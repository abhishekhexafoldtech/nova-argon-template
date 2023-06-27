<template>
    <div class="mx-3">
        <div class=" text-white">
            List of products
        </div>
        <div>
            <div>

                <el-tabs  class="demo-tabs text-white" style="background-color: white;color:white;width:max-content"  @tab-click="handleClick" >
        <el-tab-pane label="All products" name="first" style="color:white">
        </el-tab-pane>
        <el-tab-pane label="All accessories" name="second" style=""></el-tab-pane>
      </el-tabs>
            </div>
            
        </div>
    </div>
</template>

<script>
import { productStore } from "~/stores/ProductStore"
export default {
    setup(){
        const store = productStore();
        return {
            store
        }
    },
    methods:{
        async handleClick(tab,event){

            if(tab.props.name === 'first'){
                this.store.$state.productType = true;
            }
            else{
                await useFetch("/api/accessories")
                this.store.$state.productType = false;
            }

            this.store.getProducts();
        }
    },
    async created(){
        await useFetch("/api/products")
    }
}

</script>