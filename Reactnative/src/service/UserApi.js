import { URL_USER } from "../service/UserApi";
import axios from "axios";




async function findOneUser(id){
    const res = await axios.get(`${URL_USER}/${id}`);
    return res.data;
}





export default {
    findOneUser,
}