const app=Vue.createApp({
    // data:function(){}
    data(){
        return{
            msg:'Hi this is Rokan',
            link:"https://github.com/NoorMohammadTalukder?tab=repositories",
            favSportsA:'<h1>Cricket</h1>',
            favSportsB:"Football",
          
        };
    },
    methods:{
        favColours(){
            const num=Math.random();
            if(num<0.5){
                return 'Red';
            }else{
                return "BLUE"
            }

        },
        favSports(){
            const num=Math.floor(Math.random()*10);
            if(num<5){
                return this.favSportsA;
            }else{
                return this.favSportsB;
            }
        }
    }
});

app.mount('#user-goal');
