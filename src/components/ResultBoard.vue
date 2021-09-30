<template>
  <n-spin v-if="isLoading" size="large"></n-spin>
  <div class="row">
    <div v-for="(item, i) in trackList" :key="i" class="col s12 m6 l4">
      <div class="card h-45">
        <div class="card-content activator" style="padding-bottom: ">
          <div class="row">
            <div class="col s4 m4 l4">
              <img :src="item?.artworkUrl100" class="h-full w-full activator waves-effect" />
            </div>
            <div class="col s8 m8 s8">
              <n-ellipsis>
                <h2
                  class="justify-center mx-auto= font-bold w-15rem h-auto p-3"
                >{{ item?.trackName }}</h2>
              </n-ellipsis>
              <n-ellipsis>
                <h3 class="w-auto justify-center">{{ item.artistName }}</h3>
              </n-ellipsis>

              <audio
                :src="item?.previewUrl"
                controls
                preload="none"
                class="m-5 mx-auto max-w-45 max-h-full"
              ></audio>
            </div>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title bold pb-2rem">
            <n-gradient-text
              gradient="linear-gradient(45deg,rgba(246, 171, 251, 0.349) 0%,rgba(102, 215, 249, 0.74) 52%,rgba(93, 253, 162, 0.616) 90%)"
            >
              <a :href="item.collectionViewUrl">{{ item.collectionName }}</a>
            </n-gradient-text>

            <i class="material-icons right">close</i>
          </span>
          <p>{{ (item.releaseDate?.length >= 10) ? item.releaseDate.substr(0, 10) : item.releaseDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { NSpin, NEllipsis, NGradientText } from "naive-ui";
const store = useStore();
const isLoading = computed(() => store.state.isLoading);
const trackList = computed(() => store.state.trackList);
</script>
