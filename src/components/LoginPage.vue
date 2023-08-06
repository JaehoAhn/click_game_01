<template>
    <div id="main">
  
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" v-model="email"><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password " v-model="password"><br><br>

        <button @click="signIn" style="margin-left: 10px;">Sign In</button>
  
    </div>
  </template>
  
  <script>
    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    const auth = getAuth(app);

    export default {
        name: 'LoginPage',

        data() {
            return {
                email: "",
                password: "",
            }
    
        },

        methods: {
            signIn() {

                const email = this.email;
                const password = this.password;

                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log("login! " + user);
                    
                    this.$router.push('/logged')
            

                })
                .catch((error) => {
                    const errorMessage = error.message;

                    console.log(errorMessage);
                });
            }

        },

    }



  </script>
  
  <style scoped>
  
  
  </style>