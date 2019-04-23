import Vue from 'vue';
import vueCustomElement from 'vue-custom-element'
import DemoElement from './components/DemoElement';
Vue.use(vueCustomElement);
Vue.customElement('demo-element', DemoElement);
