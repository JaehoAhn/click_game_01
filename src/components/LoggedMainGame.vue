<template>
    <div id="main">    
      <div class="app_container">
        <BodyCanvas v-bind:showGame = isShowGame @countOver = "countOver"></BodyCanvas>
        <GameStart v-bind:showStart = isShowStart @startCountOver = "startCountOver"></GameStart>
        <GameFinish v-bind:showFinish = isShowFinish v-bind:sendScore = score v-bind:uidOfChild = uid v-bind:emailOfChild = email @clickRestart = "clickRestart"></GameFinish>
      </div>
      
    </div>
  </template>
  
  <script>
    import BodyCanvas from '@/components/BodyCanvas2.vue';
    import GameStart from '@/components/GameStart.vue';
    import GameFinish from '@/components/GameFinish.vue';

    import { initializeApp } from "firebase/app";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    //import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "AIzaSyD78q7WLGsIT2QkLvXvnGMivBP9FGuYw0M",
      authDomain: "clickclickclick-f70d5.firebaseapp.com",
      projectId: "clickclickclick-f70d5",
      storageBucket: "clickclickclick-f70d5.appspot.com",
      messagingSenderId: "536358588531",
      appId: "1:536358588531:web:babea68e8b787e16b39a06",
      measurementId: "G-TTTRDV9V6Y"
    };
  
  export default {
  
    name: 'LoggedMainGame',
    components: {
      BodyCanvas,
      GameStart,
      GameFinish
    },
  
    data() {
      return {
        isShowGame: false,
        isShowStart: true,
        isShowFinish: false,

        uid: 0,
        email: ''
      }
  
    },

    mounted() {

    },
  
    methods: {
  
      startCountOver() {
        this.isShowGame = true;
        this.isShowStart = false;
        this.isShowFinish = false;
      },
  
      countOver(count) {
        this.score = count;
  
        this.isShowGame = false;
        this.isShowStart = false;
        this.isShowFinish = true;

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const user = auth.currentUser;

        onAuthStateChanged(auth, () => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            this.uid = user.uid;
            this.email = user.email;

            // ...
          } else {
            // User is signed out
            // ...
          }
        });
  
      },
  
      clickRestart() {
        this.isShowGame = false;
        this.isShowStart = true;
        this.isShowFinish = false;
      },
    
    }
  }
  </script>
  
  <style>
  #main {
    position: absolute;
    height: 100%;
    width: 100%;
  
  }
  
  body {
    background-color: #ffd389;
    margin: 0;
    padding: 0;
  }
  
  
  .login_btns {
    text-align: center;
  }
  
  </style>