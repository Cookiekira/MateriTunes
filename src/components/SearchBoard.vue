<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card blue-grey darken-1">
        <div class="card-content black-text grey lighten-4">
          <span class="card-title">Search Music</span>
          <p>アイ Must GO ！</p>
          <div class="input-field col s12 top-2rem">
            <input
              v-model="searchText"
              @keyup.enter="getMusic()"
              placeholder="M@STERPIECE"
              id="searchText"
              type="text"
              class="validate"
            />
            <label for="searchText">Try</label>
          </div>
          <button
            @click="getMusic()"
            class="btn waves-effect waves-light top-1rem col s12 m10 l6 push-l3 push-m1"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex"
import axios from "axios";

const store = useStore();
const searchText = ref<string>();
const searchResult = ref<object[]>();
const getMusic = async () => {
  searchResult.value = await axios.get(
    `https://itunes.apple.com/search?term=${searchText.value}&country=jp`
  ).then((response) => response.data).then((response) => response.results);
  console.log(searchResult.value);
  store.commit("storeResult", searchResult.value);
};

</script>
