
import { getAllAccessories } from "../../api/products/allproducts"


export default defineEventHandler(async(event)=>{
            try{
                const data = await getAllAccessories();
                return data
            }catch(err){
                return `${err}`
            }
})
