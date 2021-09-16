<template>
  <div style="background-color: #f5f5f5" class="h-screen">
    <nav class="light-green light-green lighten-2">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">MateriTunes</a>
        <n-dropdown @select="handleSelect" trigger="click" :options="options">
          <a class="btn-floating btn-large waves-effect waves-light left-40vw">
            <i class="large material-icons">menu</i>
          </a>
        </n-dropdown>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { NDropdown } from "naive-ui";
import {useStore} from "vuex"

const store = useStore();
const options:Array<any> = [
  {
    label:"Change Locale",
    disabled: true
  },
  {
    label: "Japan",
    key: "jp",
  },
  {
    label: "America",
    key: "us",
  },
];

function handleSelect(key: string) {
  M.toast({html:`<span>Search in ${key} now</span><button class="btn-flat toast-action">Success</button> `,classes: 'rounded'});
  store.commit('setLocale', key);
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
