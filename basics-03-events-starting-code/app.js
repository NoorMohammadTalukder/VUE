const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      
    };
  },
  methods:{
    add(num){
      this.counter+=num;
    },
    remove(num){
      if(this.counter>0){
        this.counter-=num;
      }
      
    }
  }
});

app.mount('#events');
