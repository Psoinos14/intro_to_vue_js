<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <p>name: <input type="text" v-model="newProductName"></p>
    <p>price: <input type="text" v-model="newProductPrice"></p>
    <p>description: <input type="text" v-model="newProductDescription"></p>
    <p>ImageUrl: <input type="text" v-model="newProductImageUrl"></p>
    <p>SupplierId: <input type="text" v-model="newSupplierId">
    </p>
    <button v-on:click="makeProduct()">Make a new product</button> -->
    <div v-for="product in products">
      <p>id:{{product.id}}</p>
      <p>name:{{product.name}}</p>
      <p>image url: {{product.image_url}}</p>
      <img v-bind:src="product.image_url" v-bind:alt="product.name">
      <p>
      <router-link v-bind:to="`/products/${product.id}`">See more info</router-link>
    </p>
      <div v-if="false">
        <p>price: {{ product.price }}</p>
        <p>description: {{ product.description }}</p>
        <p>supplier_id: {{ product.supplier_id }}</p>

        <p>Name: <input type="text" v-model="product.name"></p>
        <p>Price: <input type="text" v-model="product.price"></p>
        <p>Description: <input type="text" v-model="product.description"></p>
        <p>Supplier_id: <input type="text" v-model="product.supplier_id"></p>
        <button v-on:click="updateProduct(product)">Update the product</button>
      <hr>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      message: "Home page",
      products: [],
    };
  },
  created: function() {
    console.log('i am in created');
    axios.get('/api/products').then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {},
};
</script>