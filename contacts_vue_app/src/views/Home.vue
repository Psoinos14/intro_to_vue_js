<template>
  <div class="container">
    <h1> New Contact </h1>
    <div>
      First Name: <input type="text" v-model="newFirstName">
      Last Name: <input type="text" v-model="newLastName">
      Email: <input type="text" v-model="newEmail">
      Phone Number: <input type="text" v-model="newPhoneNumber">
      <button v-on:click="createContact()">Create Contact</button>
    </div>
    <div v-for="contact in contacts">
      <p>{{ contact.first_name}}</p>
      <p>{{ contact.last_name}}</p>
      <p>{{ contact.email}}</p>
      <p>{{ contact.phone_number}}</p>
      <button v-on:click="showContact(contact)">Show more</button>
      <div v-if="currentContact === contact">
        <p>{{ contact.first_name}}</p>
        <p>{{ contact.last_name}}</p>
        <p>{{ contact.email}}</p>
        <p>{{ contact.phone_number}}</p>
      </div>
    </div>
  </div>
</template>





<script>
import axios from "axios";
export default {
  data: function() {
    return {
      contacts: [],
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newPhoneNumber: ""
    };
  },
  created: function() {
    axios.get("/api/contacts").then(response => {
      this.contacts = response.data;
    });
  },
  methods: {
    createContact: function() {
      var params = {
        first_name: this.newFirstName,
        last_name: this.newLastName,
        email: this.newEmail,
        phone_number: this.newPhoneNumber
      };
      axios.post("/api/contacts", params).then(response => {
        this.contacts.push(response.data);
        this.newFirstName = "";
        this.newLastName = "";
        this.newEmail = "";
        this.newPhoneNumber = "";
      });
    },
    showContact: function(contact) {
      if (this.currentContact === contact) {
        this.currentContact = {};
      } else {
        this.currentContact = contact;
      }
    }
  }
};
</script>
<!-- 
Note --- am not complete with the show action, finish second box of show cheatsheet box-->