import axios from 'axios'
import getApiUrl from '../../../helpers/getApiUrl';



const API_URL = getApiUrl('products')


const cre = 'createdAt'
const order = 'desc'
const pageItem = 1
const limititem = 4; // Số sản phẩm trên mỗi trang


export async function fetchLatestProduct(){
    const response  = await axios
    .get(`${API_URL}?sortby=${cre}&order=${order}&page=${pageItem}&limit=${limititem}`)
    return response.data
}


