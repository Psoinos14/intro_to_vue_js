var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    shane: "hemlo friendos!",
    steve: "how are u doing today?",
    jeremy: "i am well, thank you!",
    array: [4, 8, 12, 26]
  },
  methods: {
    changeShane: function() {
      console.log('i am in the change Shane function');
      this.shane = "i am literally shane";
    }
  }
});