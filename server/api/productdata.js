
import { getAllProducts } from "../../api/products/allproducts"


export default defineEventHandler(async(event)=>{


            try{
                const data = await getAllProducts();
                
                return data
            }catch(err){
                return `${err}`
            }
      
       
  
})
