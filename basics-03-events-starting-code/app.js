const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'', 
      
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
      
    },
    setName(e, lastName){
      this.name=e.target.value+' '+lastName;
    }
  }
});

app.mount('#events');
