<template>
  <div class="container">
    <h1> Edit Post </h1>
    <form v-onsubmit.prevent="updatePost(post)">
      <ul>
        <li v-for="error in errors">{{error}}</li>
      </ul>
      Title:
      <input type="text" v-model="post.title" />
      Body:
      <input type="text" v-model="post.body" />
      Image:
      <input type= "text" v-model="post.image" />
      User_ID:
      <input type= "text" v-model="post.user_id" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      post: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function(post) {
      var params = {
        title: post.title,
        body: post.body,
        image: post.image,
        user_id: post.user_id
      };
      axios
        .patch("/api/posts/" + post.id, params)
        .then(response => {
          this.$router.push("posts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>