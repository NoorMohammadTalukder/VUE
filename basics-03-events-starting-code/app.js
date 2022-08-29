const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      
    };
  },
  methods:{
    add(){
      this.counter+=1;
    },
    remove(){
      if(this.counter>0){
        this.counter-=1;
      }
      
    }
  }
});

app.mount('#events');
