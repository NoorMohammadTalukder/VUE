const app=Vue.createApp({
    data(){
        return{
            input:'',
            confirmInput:"",
        }
    },
    methods:{
        setInput(e){
            this.input=e.target.value;
        },
        confirm(){
            this.confirmInput=this.input;
        }
    }
});
app.mount('#asg');