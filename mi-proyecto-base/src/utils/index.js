let URLproducts = "http://localhost:3000/products";
let URLusers = "http://localhost:3000/users"
import axios from 'axios';
export const getProducts=async()=>{
    try {
        let products= await axios.get(URLproducts);
        if (products.status===200) {
            return products.data
            
        }else{
            return []
        }

    } catch (error) {
        console.log(error);
        return []
        // console.log(error.request);
    }
}
export const getUsers=async()=>{
    try {
        let Users= await axios.get(URLusers);
        if (Users.status===200) {
            return Users.data
            
        }else{
            return []
        }
    } catch (error) {
        console.log(error);
        return []
        // console.log(error.request);
    }
}    