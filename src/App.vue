<template>
  <div style="background-color:#f5f5f5">
    <nav class="light-green light-green lighten-2">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">MateriTunes</a>
        <a class="btn-floating pulse btn-large waves-effect waves-light left-40vw">
          <i class="large material-icons">menu</i>
        </a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
