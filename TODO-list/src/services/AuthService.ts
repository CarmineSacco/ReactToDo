import axios from "axios"
import { IUserForm } from "../interfaces/auth/IUserForm";
import { ILoginResponse } from "../interfaces/auth/ILoginResponse";
import { IUser } from "../interfaces/auth/IUser";

const API_URL = import.meta.env.VITE_API_URL;

export const AuthService = {
  login: async (loginForm : {usernameEmail : string , password : string}) => {
    let response !: ILoginResponse;
    
    await axios.post<ILoginResponse>(`${API_URL}login.php`, loginForm).then(res => response = res.data); 
    
    return response;
  },

  register: async (user : IUserForm) => {
    
    let response !: {success : boolean , message : string};
     
    await axios.post<{success : boolean , message : string}>(`${API_URL}register.php`, {
        user
       }).then(res =>response = res.data);
    
       return response       
  },

  checkUserLogged: () => {
    const userLogged = JSON.parse(localStorage.getItem("user") as string);
      if (!userLogged) {
        return false;
      } 
    return true;  
  },

  getUser : () : IUser | null=> {
    return JSON.parse(localStorage.getItem("user") as string);
  }
};
