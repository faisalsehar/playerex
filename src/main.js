import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Router from './routes/router';
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = true
Vue.use(VueRouter);
const router = new VueRouter({
    routes: Router,
    mode: 'history'

});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')