import axios from "axios";




export const getAllProducts = async()=>{
    try{

        const token = await axios.get('http://localhost:4040/products')
        const res = await token.data;
         return res
    }catch(err){
        return "products not found"
    }
}
