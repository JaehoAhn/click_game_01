<template>
    <div v-if="showFinish" class="container">
        <h1 class="time_over">
            Time Over!
        </h1>

        <h1 class="score">
            Your Score : {{ sendScore }}
        </h1>

        <div class="cont">
            <button class="record" @click="clickRecord">
                Record
            </button>

            <button class="restart" @click="restart">
                Restart
            </button>

        </div>
    </div>
  
</template>
  
<script>
  import { initializeApp } from "firebase/app";   
  import { getFirestore } from "firebase/firestore";
  import { doc, setDoc } from "firebase/firestore"; 

  const firebaseConfig = {
    apiKey: "AIzaSyD78q7WLGsIT2QkLvXvnGMivBP9FGuYw0M",
    authDomain: "clickclickclick-f70d5.firebaseapp.com",
    projectId: "clickclickclick-f70d5",
    storageBucket: "clickclickclick-f70d5.appspot.com",
    messagingSenderId: "536358588531",
    appId: "1:536358588531:web:babea68e8b787e16b39a06",
    measurementId: "G-TTTRDV9V6Y"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  
  export default {
    name: 'GameFinish',
    props: ['showFinish', 'sendScore', 'uidOfChild', 'emailOfChild'],

    data() {
            return {
            }
        },
  
    methods: {
    async sendData(email) {

        await setDoc(doc(db, "users", this.uidOfChild), {
            email: email,
            score: this.sendScore
        });

    },
        
      restart() {
        console.log('restart');
        this.$emit("clickRestart");
      },

      clickRecord() {
        console.log(this.uidOfChild);

        this.sendData(this.emailOfChild);
        this.$emit("clickRestart");
      }
    },


}
  
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&display=swap');

    .time_over {
        text-align: center;

        color: rgb(239, 14, 14);
        font-size: 3em;

        font-family: 'Bebas Neue', sans-serif;
    }

    .score {
        text-align: center;

        font-family: 'Bebas Neue', sans-serif;
        color: black;
    }

    .cont {
        display: flex;
        justify-content: center;

        margin-top: 50vh;
    }

    .record {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
    }

    .record:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .record:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .record:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }

    .restart {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
        margin-left: 30px;
    }

    .restart:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .restart:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .restart:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }

</style>