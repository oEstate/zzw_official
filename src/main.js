// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import '../static/css/reset.css'
import ElementUI from 'element-ui'
import i18n from './i18n/i18n';
import store from './store/index';
import 'element-ui/lib/theme-chalk/index.css'
// import {Pagination} from 'element-ui'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.scss'
Vue.config.productionTip = false;
import 'blazy/blazy'
// Vue.use(Pagination)
import App from './App'
Vue.use(ElementUI);
router.beforeEach((to,from,next)=>{
  window.scrollTo(0,0);
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store: store,
  components: { App },
  template: '<App/>'
})
Vue.prototype.newWin=  function(url){
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('style', 'display:none');
  a.setAttribute('target', '_blank');
  document.body.appendChild(a);
  a.click();
  a.parentNode.removeChild(a);
}
Vue.prototype.Blazy=  function(obj){
  obj=obj?obj:{};
  let defaultOptions={offset: 200}
  let options=Object.assign(defaultOptions,obj)
  return new Blazy(options)
}


