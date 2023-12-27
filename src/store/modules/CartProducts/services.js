import axios from 'axios'
import getApiUrl from '../../../helpers/getApiUrl'


const API_URL = getApiUrl('products')


export async function deleteCart(productId) {
    const response = await axios.delete(`${API_URL}/${productId}`)
    return response.data
}
