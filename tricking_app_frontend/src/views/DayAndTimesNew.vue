<template>
  <div class="container">
    <h1>New Check-in</h1>
    <form v-on:submit.prevent="createDayAndTime()">
      <ul>
        <li v-for="error in errors"> {{ error}} </li>
      </ul>
      Day:
      <input type="text" v-model="newDayAndTimeDay" />
      Time:
      <input type="text" v-model="newDayAndTimeTime" />
      Gym:
      <input type="text" v-model="newDayAndTimeGymID" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newDayAndTimeDay: "",
      newDayAndTimeTime: "",
      newDayAndTimeGymID: "",
      errors: []
    };
  },
  // created: function () {
  //   // axios
  //   // .get("/api/day_and_time/" + this.$route.params.id).then(response => {
  //   //   this.day_and_time.user_id = response.data;
  //   });
  // },
  methods: {
    createDayAndTime: function() {
      var params = {
        Day: this.newDayAndTimeDay,
        Time: this.newDayAndTimeTime,
        Gym: this.newDayAndTimeGymID,
      };
      axios
        .post("/api/day_and_times", params)
        .then(response => {
          this.$router.push("/day_and_times");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
<!-- 
GET RID OF USER CREATE FIELD, SET UP AUTHENTICATION WITH VUE JS AUTHENTICATION CHEAT SHEET,  -->