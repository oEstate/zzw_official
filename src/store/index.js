import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lang: 'zh',
    langs : [
      {
        label : '中文',
        lang : 'zh'
      },
      {
        label : 'English',
        lang : 'en'
      }
    ]

  },
  getters: {
    lang: state => {
      return state.lang;
    },
    langs: state => {
      return state.langs;
    }
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    setLang(context) {
      context.commit('setLang');
    }
  },
  modules: {

  }
});

export default store;
