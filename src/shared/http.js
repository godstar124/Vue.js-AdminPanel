import Vue from 'vue';
import VueResource from 'vue-resource';
import storage from './storage';

Vue.use(VueResource);

Vue.http.headers.common['x-auth-token'] = storage().getItem('auth-token') || '';
Vue.http.options.root = ENV.API_URL;
