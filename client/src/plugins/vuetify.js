import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import carscoreTheme from '@/themes/carscoreTheme'

Vue.use(Vuetify);

const vuetify = new Vuetify({ theme: carscoreTheme });

export default vuetify;