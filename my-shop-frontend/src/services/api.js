import axios from 'axios'
const API = 'https://my-shop-qm1syyaym-spongebobfcc.vercel.app' //This is your backend server

//Get all products
export const getProducts = () => fetch(`${API}/api/products`).then(res => res.json())

//Create a product
export const addProduct = (product) => fetch(`${API}/api/products`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
}).then(res => res.json())

//Delete a product
export const deleteProduct = (id) => axios.delete(`${API}/api/products/${id}`)
