<template>
  <div class="element">
    <p>Search: <input type="text" v-model="searchTerm" list="titles"></p>
    <p><button v-on:click="setSortAttribute('pages')">Sort by pages</button></p>
    <p><button v-on:click="setSortAttribute('title')">Sort by title</button></p>
    <datalist id="titles">
      <option v-for="book in books"> {{ book.title }} </option>
    </datalist>
    <div v-for="book in orderBy(filterBy(books, searchTerm, 'title'), sortAttribute)">
      <h2>Book Title: {{ book.title }}</h2>
      <p>Pages: {{ book.pages }}</p>
    </div>
  </div>
</template>

<style>
.element {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}
</style>





<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      books: [],
      searchTerm: "",
      sortAttribute: 'id'
    };
  },
  created: function() {
    console.log("***********")
    axios.get("/api/books").then(response => {
      console.log(response.data);
      this.books = response.data;
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      console.log(attribute);
      this.sortAttribute = attribute;
    }
  }
};
</script>


