import axios from 'axios'
import getApiUrl from '../../../helpers/getApiUrl';



const API_URL = getApiUrl('products')


export async function insert(products) {
    const response = await axios.post(API_URL, products)

    return response.data
}

export async function get(id) {
    const url = id? `${API_URL}/${id}`: API_URL
    const response = await axios.get(url)

    return response.data
}

export async function put(values) {
    const response = await axios.put(`${API_URL}/${values.id}`, values)

    return response.data
}

export async function deleteItem(id) {
    const response = await axios.delete(`${API_URL}/${id}`)

    return response.data
}




