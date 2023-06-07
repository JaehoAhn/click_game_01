<template>

    <div v-if = "showStart" class="container">
        <h1 class="start" @click="start_timer">
            {{ timerText }}
        </h1>
    </div>

</template>

<script>
    import Timer from 'easytimer.js';
    export default {
        name: 'GameStart',
        components: {

        },

        props: ['showStart'],

        data() {
            return {
                timerText: "Start",

            }
        },

        methods: {
            start_timer() {

                var timer = new Timer();
                timer.start({countdown: true, startValues: {seconds: 4}});

                timer.addEventListener('secondsUpdated', () => {
                    this.timerText = timer.getTimeValues()['seconds'].toString();
                    // console.log(this.timerText);

                })

                timer.addEventListener('targetAchieved', () => {
                    this.$emit("startCountOver");
                    this.timerText = "Start";

                });

            }
        },

        mounted() {
            // var timer = new Timer();
            // timer.start();

            // timer.addEventListener('secondsUpdated', function () {
            //     console.log(timer.getTimeValues().toString());
            // });


        }
    }
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&display=swap');
    .start {
        font-size: 50px;

        color: rgb(239, 14, 14);
        font-size: 3em;

        font-family: 'Bebas Neue', sans-serif;

        text-align: center;
    }

</style>