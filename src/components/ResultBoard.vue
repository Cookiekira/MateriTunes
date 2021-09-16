<template>
    <div class="row">
        <div v-for="(item, i) in trackList" :key="i" class="col s12 m6 l4">
            <div class="card">
                <div class="card-content pb-0">
                    <div class="row">
                        <div class="col s4 m4 l4">
                            <img :src="item?.artworkUrl100" class="h-full w-full" />
                        </div>
                        <div class="col s8 m8 s8">
                            <h2
                                class="justify-center mx-auto font-bold w-auto overflow-hidden whitespace-pre p-3"
                            >{{ item?.trackName }}</h2>
                            <h3
                                class="overflow-hidden whitespace-nowrap w-auto"
                            >{{ item.artistName }}</h3>

                            <audio
                                :src="item?.previewUrl"
                                controls
                                preload="none"
                                class="m-5 mx-auto max-w-45 max-h-full"
                            ></audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const trackList = computed(() => store.state.trackList);
</script>
