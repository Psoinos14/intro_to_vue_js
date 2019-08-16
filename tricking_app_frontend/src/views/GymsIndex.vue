<template>
  <div class="container">
    <h1>All Gyms</h1>
    <div v-for="gym in gyms">
      <h2>{{ gym.name }}</h2>
      <p>address: {{ gym.address }}</p>
      <p>open gym times: {{gym.open_gym_times}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      gyms: []
    };
  },
  created: function() {
    axios.get("/api/gyms").then(response => {
      this.gyms = response.data;
      console.log(response.data)
    });
  },
  methods: {}
};
</script>

<!-- 
DEBUG THE ALL GYMS FRONTEND!!!!!! THEN, CHECK TRELLO FOR NEXT DUTIES -->