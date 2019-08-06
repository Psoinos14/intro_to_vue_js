<template>
  <div class="container">
    <h1>New Post</h1>
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="newPostTitle" />
      Body:
      <input type="text" v-model="newPostBody" />
      Image:
      <input type="text" v-model="newPostImage" />
      User_id:
      <input type="text" v-model="newPostUser_id" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newPostTitle: "",
      newPostBody: "",
      newPostImage: "",
      newPostUser_id: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createPost: function() {
      var params = {
        title: this.newPostTitle,
        body: this.newPostBody,
        image: this.newPostImage,
        user_id: this.newPostUser_id
      };
      axios.post("/api/posts", params).then(response => { this.$router.push("/posts");
      })
      .catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>