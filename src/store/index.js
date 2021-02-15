import { createStore } from 'vuex';
import axios from 'axios';

const randomNumberAPIURL =
  'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },

  mutations: {
    INCREASE_COUNTER(state, randomNumber) {
      state.counter += randomNumber;
    },

    DECREASE_COUNTER(state, randomNumber) {
      state.counter -= randomNumber;
    },

    SET_COLOR_CODE(state, newValue) {
      state.colorCode = newValue;
    }
  },

  actions: {
    increaseCounter({ commit }) {
      axios(randomNumberAPIURL).then(response => {
        console.log(response.data);
        commit('INCREASE_COUNTER', response.data);
      });
    },

    decreaseCounter({ commit }) {
      axios(randomNumberAPIURL).then(response => {
        console.log(response.data);
        commit('DECREASE_COUNTER', response.data);
      });
    },

    setColorCode({ commit }, newValue) {
      commit('SET_COLOR_CODE', newValue);
    }
  },

  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    }
  },

  modules: {}
});
