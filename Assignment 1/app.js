const app=Vue.createApp({
    data(){
        return{
            Name:"Noor",
            Address:"Dhaka",
            Link:"https://github.com/NoorMohammadTalukder?tab=repositories",
        };
    },
    methods:{
        companyName(){
            return "BSS";
        }
    }
});
app.mount('#asgn');