import axios from "axios";

import { SCORE_STATE } from "@/store/state-types.js";
import { SET_SCORE } from "@/store/mutation-types.js";
import { FETCH_SCORE } from "@/store/action-types.js";

import { SET_CAR } from "@/store/mutation-types.js";

const INIT_CAR = Object.freeze({
  buying: "",
  maint: "",
  doors: "",
  persons: "",
  lug_boot: "",
  safety: "",
});

export default {
  state: {
    car: { ...INIT_CAR },
    score: SCORE_STATE[0],
  },
  getters: {
    initCar: () => ({ ...INIT_CAR }),
    car: (state) => state.car,
    score: (state) => state.score,
  },
  mutations: {
    [SET_CAR]: (state, payload) => (state.car = { ...state.car, ...payload }),
    [SET_SCORE]: (state, payload) => (state.score = SCORE_STATE[payload]),
  },
  actions: {
    [FETCH_SCORE]: async ({ commit }, payload) => {
      try {
        // console.log(getters.car)
        // console.log(payload);
        const URL = "api/score";
        const data = { car: payload };
        const { score } = await (await axios.post(URL, data)).data;
        // console.log('score', score)
        commit(SET_SCORE, score);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
