<template>
  <div class="container">
    <h1>New User</h1>
    <form v-on:submit.prevent="createUser()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="newUserFirstName" />
      Last Name:
      <input type="text" v-model="newUserLastName" />
      Age:
      <input type="text" v-model="newUserAge" />
      Location:
      <input type="text" v-model="newUserLocation" />
      Email:
      <input type="text" v-model="newUserEmail" />
      Password:
      <input type="text" v-model="newUserPassword" />
      Password Confirmation:
      <input type="text" v-model="newUserPasswordConfirmation" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newUserFirstName: "",
      newUserLastName: "",
      newUserAge: "",
      newUserLocation: "",
      newUserEmail: "",
      newUserPassword: "",
      newUserPasswordConfirmation: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createUser: function() {
      var params = {
        first_name: this.newUserFirstName,
        last_name: this.newUserLastName,
        age: this.newUserAge,
        location: this.newUserLocation,
        email: this.newUserEmail,
        password: this.newUserPassword,
        password_confirmation: this.newUserPasswordConfirmation
      };
      axios
      .post("/api/users", params)
      .then(response => {
        this.$router.push("/users");
      })
      .catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      })
    }
  }
}

</script>


