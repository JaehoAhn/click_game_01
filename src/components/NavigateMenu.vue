<template>
    <div class="nav_container">

        <div class="record_btn">
            Records
        </div>

        <div class="exit_btn">
            Exit
        </div>

    </div>
</template>

<script>
  export default {
    name: 'NavigateMenu',
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

    .exit_btn {

    }
</style>