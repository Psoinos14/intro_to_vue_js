var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    firstNumber: 0,
    secondNumber: 0,
    thirdNumber: 0,
    sum: 0
  },
  methods: {
    calculator: function() {
      console.log('i am in the calculator function');
        this.sum = (this.firstNumber + this.secondNumber + this.thirdNumber);

    }
  }
});
