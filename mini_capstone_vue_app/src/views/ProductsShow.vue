<template>
  <div class="sample">
    <h1>id: {{ product.id }}</h1>
    <h1>name: {{ product.name }}</h1>
    <h1>price: {{ product.price }}</h1>
    <h1>description: {{ product.description }}</h1>
    <h1>image_url: {{ product.image_url }}</h1>
    <h1>supplier id: {{ product.supplier_id }}</h1>

    <button v-on:click="destroyProduct()">Destroy the product</button>
    <router-link v-bind:to="`/products/${product.id}/edit`"> Edit the Product</router-link>
  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the show page !",
      product: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.product = response.data;
    });
  },
  methods: {
    destroyProduct: function() {
      console.log('destroying product');
      // figure out which Product I want to delete
      // tell the api i want to delete that recipe
      axios.delete('/api/products/' + this.product.id).then(response => {
        console.log(response.data);
        this.$router.push('/');
      });
    }
  }
};
</script>