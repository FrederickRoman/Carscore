import { SCORE_STATE } from '@/store/state-types.js';
import { SET_SCORE } from '@/store/mutation-types.js';
import { FETCH_SCORE } from '@/store/action-types.js';

export default {
    state: {
        score: SCORE_STATE[0],
    },
    getters: {
        score: (state) => state.score,
    },
    mutations: {
        [SET_SCORE]: (state, payload) =>
            state.score = SCORE_STATE[payload],
    },
    actions: {
        [FETCH_SCORE]: async ({ commit }) => {
            try {
                const scoreStub = Math.floor(Math.random() * 4);
                commit(SET_SCORE, scoreStub);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
