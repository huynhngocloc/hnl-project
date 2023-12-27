import axios from 'axios'
import getApiUrl from '../../../helpers/getApiUrl';



const API_URL = getApiUrl('products')
const currentPage = 1;
const limitItem = 8; 
const sort = 'createdAt';
const order = 'desc';

export async function getProductCategory(category) {
    const response = await axios
    .get(`${API_URL}?category=${category}&sortby=${sort}&orderby=${order}&page=${currentPage}&limit=${limitItem}`)
    return response.data
}




