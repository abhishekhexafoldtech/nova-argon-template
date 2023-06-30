<template>
  <div class="py-4 container-fluid">
    <div class="container-fluid bg-white rounded-3  mt-5">
      <ProductHeader />
      <div class="py-4">

        <h3>
          Add a new product
        </h3>
      </div>

      <form @submit.prevent="store.addProduct()">


        <select class="form-select form-control fw-bold" aria-label="Default select example">
          <option selected>Select a cylinder</option>
          <option value="1">
            <a>3kg Steel cylinder</a>
          </option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </select>

        <div class="py-3">

          <lebal class="p-2 my-3">Stock Quantity</lebal>
          <input type="number" class="form-control" />
        </div>
        <label>Discount on stock</label>
        <input type="number" class="form-control" />
        <div>
          <input type="submit" value="Add Item" class="btn text-white mt-3" style="background: rgb(102,108,228);
background: linear-gradient(90deg, rgba(102,108,228,1) 0%, rgba(110,104,229,1) 35%, rgba(120,99,229,1) 100%);" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { productStore } from '~/stores/ProductStore';

export default {
  data() {
    return {
      cilynderType: '',
      quantity: 0,
      discount: 0
    }
  },
  setup() {
    const store = productStore();
    return {
      store
    }
  }
}
</script>