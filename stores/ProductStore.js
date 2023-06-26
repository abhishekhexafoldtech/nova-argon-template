import { defineStore } from "pinia";



export const getAllProducts=defineStore('productstable',{

    state:()=>({
        data:[]
    }),

    actions:{
        async getProducts(){
            const data = await $fetch("/api/productdata");
            this.data = data;
        }
    }

})