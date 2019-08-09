<template>
  <div class="container">
    <h1> New Book </h1>
    <form v-on:submit.prevent="createBook()">
      <ul>
        <li v-for="error in errors">{{error}}</li>
      </ul>
      Title:
      <input type="text" v-model="newBookTitle" />
      Pages:
      <input type="text" v-model ="newBookPages" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newBookTitle: "",
      newBookPages: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createBook: function() {
      var params = {
        title: this.newBookTitle,
        pages: this.newBookPages
      };
      axios
        .post("/api/books", params)
        .then(response => {
          this.$router.push("/books");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>