Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            result: null,
            defaultOperation: '+'
        }
    },
    methods: {
        Equals() {
            //this.result = this.num1 + this.num2;
            switch (this.defaultOperation) {
                case '+':
                    this.result = this.num1 + this.num2;
                    break;
                case '-':
                    this.result = this.num1 - this.num2;
                    break;
                case '*':
                    this.result = this.num1 * this.num2;
                    break;
                case '/':
                    this.result = this.num1 / this.num2;
                    break;
                default:
                    this.result = "Invalid Operation";
                    break;
            }
        }
       
    },
}).mount('#calcApp');