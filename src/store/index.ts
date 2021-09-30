import { createStore } from "vuex";

export default createStore({
    state: {
        trackList: Array,
        isLoading: false,
        locale: "jp",
    },
    mutations: {
        storeResult: function (state, value) {
            state.trackList = value;
        },
        setLoding: function (state, value) {
            state.isLoading = value;
        },
        setLocale: function (state, value) {
            state.locale = value;
        },
    },
    actions: {},
    modules: {},
});
