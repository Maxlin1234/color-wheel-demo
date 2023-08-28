// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue/dist/vue.js";
import App from "./App";
import ColorPicker from 'vue-iro-color-picker';

Vue.component('color-picker', ColorPicker);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
