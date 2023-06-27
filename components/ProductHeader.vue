<template>
    <div class="mx-3">
        <div class=" text-white">
            List of products
        </div>
        <div>
            <div>

                <el-tabs v-model="activeName" class="demo-tabs text-white" style="background-color: white;color:white;width:max-content"  @tab-click="handleClick" >
        <el-tab-pane label="Cylinders" name="first" >
        </el-tab-pane>
        <el-tab-pane label="Accessories" name="second" style=""></el-tab-pane>
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
        const activeName = ref('first')
        return {
            store,
            activeName
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