<template>
  <div id="app">
    <div class="nav p-3">
      <img class="logo navbar-brand mr-0" src="./assets/logo.svg" />
      <img class="logo-text my-auto" src="./assets/github.png" />
    </div>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view class="mt-5" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");


$accent: #2980b9;
$text-color: #2c3e50;

html,
body {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

//custom scrollbar
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

//navbar
.logo {
  float: left;
  height: 63px;
  margin: 0;
}
.logo-text {
  height: 30px;
}

//card
.card-container {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color: $accent;
  cursor: pointer;
  &:hover {
    background-color: #3498db;
  }
}
.user-image {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 15px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

//homepage
.user-list-container {
  height: 90vh;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
