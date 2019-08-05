<template>
  <div class="products-new">
    <h1>{{ message }}</h1>
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
      message: "Welcome to the products edit page!",
      newProductName: "",
      newProductPrice: "",
      newProductDescription: "",
      newProductImageUrl: "",
      newSupplierId: ""


    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.newProductName = response.data.name;
      this.newProductPrice = response.data.price;
      this.newProductDescription = response.data.description;
      this.newProductImageUrl = response.data.image_url;
      this.newSupplierId = response.data.suppler_id;
    });
  },
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
      axios.patch(`/api/products/${this.$route.params.id}`, newProduct).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/');
      });
    }
  }
};
</script>