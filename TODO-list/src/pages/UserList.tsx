import { Fragment, useEffect, useState } from "react";
import { userService } from "../services/userService";
import { IGetUserResponse } from "../interfaces/user/IGetUserResponse";
import UserRow from "../components/UserRow";
import { useLocation } from "react-router-dom";

interface Props {
  search: string;
}
const UserList = ({ search }: Props) => {
  const [users, setUsers] = useState<Array<IGetUserResponse>>([]);
  const [filteredUsers, setFilteredUsers] = useState<Array<IGetUserResponse>>(
    []
  );

  const getUsers = async () => {
    const fetchedUsers = await userService.getUsers();
    setUsers(fetchedUsers);
    setFilteredUsers(fetchedUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      const checkUser =
        !search ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.cognome.toLowerCase().includes(search.toLowerCase()) ||
        user.nome.toLowerCase().includes(search.toLowerCase());
      return checkUser;
    });
    setFilteredUsers(filteredUsers);
  }, [search]);

  return (
    <Fragment>
      {filteredUsers.map((user, index) => (
        <UserRow key={index} user={user} />
      ))}
    </Fragment>
  );
};

export default UserList;