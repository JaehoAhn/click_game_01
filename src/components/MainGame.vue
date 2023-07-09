<template>
    <div id="main">    
      <div class="app_container">
        <h1>Click! Click! Click!</h1>
      </div>
  
      <div class="login_btns" style="margin-top: 60vh;">
        <button @click="clickSignIn" style="margin-right: 20px;">Sign In</button>
        <button @click="clickSignUp">Sign Up</button>
      </div>
      
    </div>
  </template>
  
  <script>
  
  export default {
  
    name: 'MainGame',
    components: {

    },
  
    data() {
      return {
  
        
      }
  
    },
  
    methods: {
      clickSignUp() {
        window.location.href = `${window.location.href}auth`;
      },

      clickSignIn() {
        window.location.href = `${window.location.href}login`;
      }
    
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
  
/* CSS */
button {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}

  h1 {
    text-align: center;
    font-size: 35px;
    color: red;
  }
  
  </style>
  