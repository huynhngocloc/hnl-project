import axios from 'axios'


export async function saveUser(user) {
    try {
        const response = await axios.post(
           'https://6523fd9cea560a22a4e93281.mockapi.io/api/v1/users',
            user
          )
        return response.data
    } catch {

        
        return false;
    }
}




