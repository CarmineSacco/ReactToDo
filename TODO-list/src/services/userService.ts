import axios from "axios";
import { IGetUserResponse } from "../interfaces/user/IGetUserResponse";

const API_URL = import.meta.env.VITE_API_URL;

export const userService = {
    getUsers : async ()=>{
        let response !: Array<IGetUserResponse>;
        
        await axios.post<Array<IGetUserResponse>>(`${API_URL}getUsers.php`, {})
        .then(res => response = res.data);
        
        return response
    }
}