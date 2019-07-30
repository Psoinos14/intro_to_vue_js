var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number: 27,
    guess: null,
    tooHigh: 'Too High',
    tooLow: 'Too Low',
    thatsIt: 'Thats the number!',
    outcome: null
  },

  methods: {
    numberGuesser: function() {
      console.log('i am in the numberGuesser function');
      if (parseInt(this.guess) > this.number) { 
        this.outcome = this.tooHigh;
      } else if (parseInt(this.guess) < this.number) {
        this.outcome = this.tooLow; 
      }
      else {
        this.outcome = (this.thatsIt);
      }
    }
  }
})
;
