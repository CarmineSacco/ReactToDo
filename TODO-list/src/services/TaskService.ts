import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const Taskservice={
    addTask : async (task : {title : string , argument : string , id_utente : string | undefined})=>{
        let response !: {success : boolean , message : string}
        await axios.post<{success : boolean , message : string}>(`${API_URL}addTask.php`, {...task}).then(res => response = res.data);
        return response
    }
}