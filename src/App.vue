<template>
  <div id="App">
    <NavigateMenu></NavigateMenu>

    <RouterView></RouterView>
    
  </div>
</template>

<script>
import NavigateMenu from '@/components/NavigateMenu.vue';

export default {

  name: 'App',
  components: {
    NavigateMenu,

  },

  data() {
    return {

    }

  },

  methods: {
  
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


.login_btns {
  text-align: center;
}

</style>
