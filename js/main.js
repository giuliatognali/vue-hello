const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Welcome!',
      btnMessage: 'Push to see the image',
      imgage: 'img/Vue.js-logo-297x300.jpg',
      imgClass: "d-none"
    };
  },
  methods: {
    imgVisibility(){
        this.imgClass = 'd-show';
        console.log('schiaccio il bottone');
    }
  }

}).mount('#app')