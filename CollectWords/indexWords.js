Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message: null
        }
    },
    methods: {
        Save() {
            this.words.push(this.word);
            this.word = null;
        },
        Show() {
            this.message = this.words;           
        },
        Clear() {
            this.words = [];
            this.message = null;
        }
    },
}).mount('#wordsApp');