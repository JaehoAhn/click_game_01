<template>
    <div class="nav_container">

        <div @click="record" class="record_btn">
            Records
        </div>

        <div @click="exit" class="exit_btn">
            Exit
        </div>

        <!-- <audio controls autoplay id="audio" style="display: none;">
            <source src="../assets/background.mp3">
        </audio> -->

    </div>
</template>

<script>
  export default {
    name: 'NavigateMenu',

    methods: {
        record() {
            this.$router.push('/ranking');
        },

        exit() {
            this.$router.push('/');
        }
    }
  };

</script>

<style scoped>
    .nav_container {
        margin-top: 30px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;

    }

    .nav_container div {
        font-family: fantasy;
        font-size: 20px;
        color: aliceblue;
        

    }

    .record_btn {
        padding-right: 30%;
    }

</style>