<template>
  <div class="container">
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <div v-for="book in filterBy(books, searchTerm, 'title')">
      <h2>Book Title: {{ book.title }}</h2>
      <p>Pages: {{ book.pages }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      books: [],
      searchTerm: ""
    };
  },
  created: function() {
    console.log("***********")
    axios.get("/api/books").then(response => {
      console.log(response.data);
      this.books = response.data;
    });
  },
  methods: {}
};
</script>


