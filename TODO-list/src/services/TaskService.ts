import axios from "axios";
import { IGetTasksResponse } from "../interfaces/tasks/IGetTasksResponse";

const API_URL = import.meta.env.VITE_API_URL;

export const Taskservice={
    addTask : async (task : {titolo : string , argomento : string , id_utente : string | undefined})=>{
        let response !: {success : boolean , message : string}
        await axios.post<{success : boolean , message : string}>(`${API_URL}addTask.php`, {...task}).then(res => response = res.data);
        return response
    },

    getAllTasksById: async (id_utente : string)=>{
        let response !: Array<IGetTasksResponse>;
        await axios.post<Array<IGetTasksResponse>>(`${API_URL}getAllTasks.php`, {id_utente}).then(res => response = res.data);
        return response
    },

    deleteTask : async (id_task : number)=>{
        let response !: {success : boolean , message : string}
        await axios.post<{success : boolean , message : string}>(`${API_URL}deleteTask.php`, {id_task}).then(res => response = res.data);
        return response
    },
    updateTask : async (task : IGetTasksResponse)=>{
        let response !: {success : boolean , message : string}
        await axios.post<{success : boolean , message : string}>(`${API_URL}editTAsk.php`, {...task}).then(res => response = res.data);
        return response
    }
}