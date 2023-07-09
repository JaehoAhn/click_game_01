<template>
    <div class="app">
        <div class="rankingBox">
            <h2 v-for="i in rankings.length" :key="i">{{ i }}. {{ rankings[i - 1][0] }} : {{ rankings[i - 1][1] }}</h2>
        </div>

    </div>

</template>


<script>

    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { collection, getDocs } from "firebase/firestore";

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

    created() {
        this.getUsers();
    },

    name: 'RankingMenu',

    data() {
        return {
            rankings : []
        }
    },

    methods: {
        async getUsers() {
            
            //Getting user datas from firestore.
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                this.rankings.push([doc.data()['email'], doc.data()['score']]);
            });


            //Sorting data based on score.
            this.rankings.sort(compareSecondColumn);

            function compareSecondColumn(a, b) {
                if (a[1] === b[1]) {
                    return 0;
                }
                else {
                    return (a[1] < b[1]) ? 1 : -1;
                }
            }

        }

    },

  };

</script>

<style scoped>
    .app {
        display: flex;
        justify-content: center;
    }
    .rankingBox {
        background-color: antiquewhite;
        width: 85vw;
        height: 100vh;

        text-align: center;

        /* display: flex;
        justify-content: space-around;
        flex-direction: column; */
    }

    .rankingBox h2 {
        font-size: 18px;
    }


</style>