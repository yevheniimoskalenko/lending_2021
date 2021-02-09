import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import "./assets/styles/style.scss";
import VueHead from "vue-head";
Vue.config.productionTip = false;
Vue.use(VueHead);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
