import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    'zh': require('./zh'),
    'en': require('./en')
  }
})
export default i18n;
