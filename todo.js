Vue.createApp({
    data() {
        return {
            assignment: null,
            assignments: [],
            message: null
        }
    },
    methods: {
        Add() {
            if (!this.assignment) {
                return;
            }
            this.assignments.push(this.assignment);
            this.message = this.assignments;
            this.assignment = null;
        },
        
        RemoveAll() {
            this.assignments = [];
            this.message = null;
        },

        RemoveAssignment(assignmentToRemove) {
            this.assignments = this.assignments.filter(assignment => assignment !== assignmentToRemove);
        },


        
    },
}).mount('#wordsApp');