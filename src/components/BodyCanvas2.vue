<template>
    <div v-if="showGame" class="container">

        <h1 class="timer">
            {{ time }}
        </h1>

        <h1 class="count">
            {{ count }}
        </h1>


        <div class="button_cont">
            <img src="../assets/button.png" @click="count_up" class="button">
        </div>


    </div>
</template>
  
  <script>
    import Timer from 'easytimer.js';
    export default {

        name: 'BodyCanvas',
        components: {
    
        },

        props: ['showGame'],

        data() {
            return {
                count: 0,
                time: 10,
                gameFinish: false,
            }
        },
    
        methods: {
            count_up() {
                if (!this.gameFinish) {
                    this.count = this.count + 1;
                }

                var click = new Audio('../assets/click_sound.mp3');
                click.play();
            },

            countDown() {
                this.gameFinish = false;

                var timer = new Timer();
                timer.start({countdown: true, startValues: {seconds: 10}});

                timer.addEventListener('secondsUpdated', () => {
                    this.time = timer.getTimeValues()['seconds'];

                });

                timer.addEventListener('targetAchieved', () => {
                        //Count stop
                        this.$emit("countOver", this.count);
                        this.timerText = "Start";
                        this.gameFinish = true;

                        this.count = 0;
                        this.time = 10;
                        
                });
            }
        },

        watch: {
            showGame: function(newVal, oldVal)
            {
                console.log(newVal);
                console.log(oldVal);

                if (newVal)
                {
                    this.countDown();

                    if (this.time <= 0) {
                    console.log('done')
                }
                }
            }
    
        }

    }
  
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&display=swap');

    .button_cont {
        display: flex;
        justify-content: center;

        font-size: 3em;
        font-family: 'Bebas Neue', sans-serif;

    }

    .timer {
        text-align: center;

        font-size: 3em;
        font-family: 'Bebas Neue', sans-serif;
    }

    .count {
        text-align: center;

        font-size: 3em;
        font-family: 'Bebas Neue', sans-serif;

        color: black;

    }
  
  </style>