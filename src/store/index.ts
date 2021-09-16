import { createStore } from "vuex";

export default createStore({
  state: {
    trackList:Array
  },
  mutations: {
    storeResult: function (state, value) {
      state.trackList = value;
    },
  },
  actions: {},
  modules: {},
});
