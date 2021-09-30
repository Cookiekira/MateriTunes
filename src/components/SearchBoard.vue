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
            <label for="searchText">iTunes {{ store.state.locale }}</label>
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
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const searchText = ref<string>();
const searchResult = ref<object[]>();
const getMusic = async () => {
  store.commit("setLoding", true);
  searchResult.value = await axios
    .get(
      `api/search?term=${searchText.value}&country=${store.state.locale}`
    )
    .then((response) => response.data)
    .then((response) => response.results);
  // console.log(searchResult.value);
  store.commit("storeResult", searchResult.value);
  store.commit("setLoding", false);
};
</script>

<style scoped>
.card-content {
  background: url("../assets/img/bg_mv_repeat.png"),
    linear-gradient(
      45deg,
      rgba(246, 171, 251, 0.349) 0%,
      rgba(102, 215, 249, 0.74) 52%,
      rgba(93, 253, 162, 0.616) 90%
    );
}
</style>
