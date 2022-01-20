import Vue from 'vue';
import Vuex from 'vuex';
import scoring from './modules/scoring.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        scoring,
    },
})
