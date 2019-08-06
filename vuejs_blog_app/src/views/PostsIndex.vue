<template>
  <div class="container">
    <h1> All Posts </h1>
    <div v-for="post in posts">
      <h2>Title: {{post.title}}</h2>
      <h2>Body: {{post.body}}</h2>
      <h2>Image: {{post.image}}</h2>
      <h2>User_id: {{post.user_id}}</h2>
      <router-link v-bind:to="`/posts/${post.id}/edit`">Edit post</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      this.posts = response.data;
    });
  }
};
</script>