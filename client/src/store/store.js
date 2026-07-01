import { createStore } from 'vuex';
import scoring from './modules/scoring.js';

export const store = createStore({
  modules: { scoring },
});
