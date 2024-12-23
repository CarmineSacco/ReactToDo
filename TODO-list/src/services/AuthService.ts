import axios from "axios"

import { IUserForm } from "../interfaces/IUserForm";

const API_URL = import.meta.env.VITE_API_URL;




export const AuthService = {
  login: () => {
    //TODO : chiamata  api login
  },

  register: (user : IUserForm) => {
    //TODO : chiamata api per registrazione
    let response !: {success : boolean , message : string};
      axios.post<{success : boolean , message : string}>(`${API_URL}register.php`, {
        user
       }).then(res =>response = res.data);
    return response       
  },
};
