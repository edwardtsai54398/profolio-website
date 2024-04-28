import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// import router from './router';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCode,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faArrowUpRightFromSquare,
  faCode,
  faAnglesDown
);

import "@/assets/scss/all.scss";

const app = createApp(App);

app.use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
