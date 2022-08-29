const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName:"",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      if (this.counter > 0) {
        this.counter -= num;
      }
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    setConfirmName() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
  },
});

app.mount("#events");
