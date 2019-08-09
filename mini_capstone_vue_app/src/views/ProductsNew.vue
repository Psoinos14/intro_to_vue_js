<template>
  <div class="products-new">
    <h1>{{ message }}</h1>
    <div v-for="error in errors">
      {{error}}
    </div>
    <form v-on:submit.prevent="makeProduct()">
    <p>name: <input type="text" v-model="newProductName"></p>
    <p>price: <input type="text" v-model="newProductPrice"></p>
    <p>description: <input type="text" v-model="newProductDescription"></p>
    <p>ImageUrl: <input type="text" v-model="newProductImageUrl"></p>
    <p>SupplierId: <input type="text" v-model="newSupplierId">
    </p>
    <input type="submit" value="Create a new Product">
  </form>
  </div>
</template>

<style>
</style>

<script>

import  axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to the products new page!",
      newProductName: "",
      newProductPrice: "",
      newProductDescription: "",
      newProductImageUrl: "",
      newSupplierId: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeProduct: function() {
      console.log('in make product');
      // get some data
      var newProduct = {
        name: this.newProductName,
        price: this.newProductPrice,
        description: this.newProductDescription,
        image_url: this.newProductImageUrl,
        supplier_id: this.newSupplierId
      };
      // send that data to the api
      axios.post('/api/products', newProduct).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/');
      })
      .catch(error => {
        console.log('in the .catch')
        console.log(error.response);
        this.errors = error.response.data.errors;
      })
    }
  }
};
</script>