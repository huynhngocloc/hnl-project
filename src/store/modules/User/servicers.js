import axios from 'axios'
import getApiUrl from '../../../helpers/getApiUrl'



const API_URL = getApiUrl('users')


export async function insertRegister(user) {

    const response = await axios.post(API_URL, user)

    return response.data
}

export async function checkLogin(email,password, name) {
    try {
        const response = await axios.get(
            API_URL,
            { params: { email, password, name } }
        )

        return response.data[0]
    } catch {
        return false;
    }
}
export async function get(){
    const response = await axios.get(API_URL)
    return response.data
}

export async function deleteItem(id) {
    const response = await axios.delete(`${API_URL}/${id}`)

    return response.data
}




