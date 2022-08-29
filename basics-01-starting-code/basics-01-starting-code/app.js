const app=Vue.createApp({
    // data:function(){}
    data(){
        return{
            msg:'Hi this is Rokan',
            link:"https://github.com/NoorMohammadTalukder?tab=repositories"
        };
    },
    methods:{
        favColours(){
            const num=Math.random();
            if(num<0.5){
                return "RED";
            }else{
                return "BLUE"
            }

        }
    }
});

app.mount('#user-goal');
