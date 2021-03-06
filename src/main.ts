import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 页面刷新自动滚到底
window.onload = () =>
  setTimeout(() => {
    window.scroll(0, 200);
  }, 0);

// 非手机打开提示
if (document.documentElement.clientWidth >= 500) {
  window.alert('为了保证浏览效果，请使用手机打开本页面');
}
