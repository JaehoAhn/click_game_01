<template>
  <div>

    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" v-model="fname"><br><br>

    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" v-model="lname"><br><br>

    <label for="email">Email:</label>
    <input type="text" id="email" name="email" v-model="email"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password " v-model="password"><br><br>

    <button @click="submit">Submit</button>

  </div>
</template>

<script>
  import { initializeApp } from "firebase/app";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  const auth = getAuth(app);

  export default {
    name: 'AuthPage',

    data() {
      return {
        fname: "",
        lname: "",
        email: "",
        password: "",
      }
  
    },

    methods: {
      async sendData(uid) {
        const fname = this.fname;
        const lname = this.lname;

        await setDoc(doc(db, "users", uid), {
          first_name: fname,
          last_name: lname,
          ranking: 999
        });

      },

      submit() {

        const userEmail = this.email;
        const userPassword = this.password;

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          // Signed in 

          console.log(userCredential);

          this.sendData(userCredential.user.uid);

        })
        .catch((error) => {

          //const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);

          // ..
        });

        console.log(userEmail);
        console.log(userPassword);
      }
    }

  };


</script>

<style scoped>


</style>