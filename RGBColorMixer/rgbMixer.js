Vue.createApp({
    data() {
        return {
            red: 0,
            green: 0,
            blue: 0,
            background: 'rgb(0, 0, 0)'
        }
    },
    methods: {
        colorMixer() {
            this.background = `rgb(${this.red}, ${this.green}, ${this.blue})`;
            
        }
    },
}).mount('#App');