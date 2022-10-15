import Vue from "vue";
import App from "./App.vue";
import TypeNav from "@/components/TypeNav";

import router from "@/router";

import store from "@/store";

import "@/mock/mockServe";

import "swiper/css/swiper.css";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import * as API from "@/api";
import { MessageBox } from "element-ui";

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
