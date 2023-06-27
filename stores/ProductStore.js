import { defineStore } from "pinia";



export const productStore=defineStore('productstable',{

    state:()=>({
        allproducts:[],
        productType:true
    }),

    actions:{
        async getProducts(){
            if(this.productType === true){

                const data = await $fetch("/api/productdata");
                this.allproducts = data;
            }else if(this.productType === false){
                const data = await $fetch("/api/accessoriesdata");
                this.allproducts = data;

            }
        },
        async addProduct(){
            console.log("product added")
        }
    }

})