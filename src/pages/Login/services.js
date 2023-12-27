import axios from "axios";
import { getApiUserEndPoint } from "../helper/api";


export async function checkLogin(email,password) {
    try {
        const response = await axios.get(
            `${getApiUserEndPoint()}`,
            { params: { email, password } }
        )

        return response.data[0]
    } catch {
        return false;
    }
}