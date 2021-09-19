Vue.createApp({
    data() {
        return {
            intentCode: 0
        }
    },
    methods: {
        addIntentCode(id, number) {
            if(document.getElementById(id).checked == false) {
                this.intentCode -= number;
            } else {
                this.intentCode += parseInt(number)
            }
        }
    }
}).mount("#calculator")