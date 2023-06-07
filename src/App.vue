<template>
  <div id="App">
    <NavigateMenu></NavigateMenu>

    <div class="app_container">
      <BodyCanvas v-bind:showGame = isShowGame @countOver = "countOver"></BodyCanvas>
      <GameStart v-bind:showStart = isShowStart @startCountOver = "startCountOver"></GameStart>
      <GameFinish v-bind:showFinish = isShowFinish v-bind:sendScore = score @clickRestart = "clickRestart"></GameFinish>
    </div>
    
  </div>
</template>

<script>
  import NavigateMenu from '@/components/NavigateMenu.vue';
  import BodyCanvas from '@/components/BodyCanvas2.vue';
  import GameStart from '@/components/GameStart.vue';
  import GameFinish from '@/components/GameFinish.vue';

export default {

  name: 'App',
  components: {
    NavigateMenu,
    BodyCanvas,
    GameStart,
    GameFinish
  },

  data() {
    return {
      isShowGame: false,
      isShowStart: true,
      isShowFinish: false,

      
    }

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

    },

    clickRestart() {
      console.log('hi2');
      this.isShowGame = false;
      this.isShowStart = true;
      this.isShowFinish = false;
    }
  
  }
}
</script>

<style>
#app {
  position: absolute;
  height: 100%;
  width: 100%;

}

body {
  background-color: #ffd389;
  margin: 0;
  padding: 0;
}


</style>
