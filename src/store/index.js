import { createStore } from "vuex";
const store = createStore({
  state: {
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "bright",
  },
  mutations: {
    updateTheme(state, theme) {
      state.theme = theme;
    },
  },
});
export default store;
