import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    covid: null,
    loading: null,
    title: 'Global',
    dataDate: '',
    status: {},
    countries: [],
  },
  mutations: {
    SET_COVID(state, payload) {
      state.covid = payload
      state.loading = true

    },
    SET_DATE(state, payload) {
      state.dataDate = payload
    },
    SET_STATUS(state, payload) {
      state.status = payload
    },
    SET_COUNTRY(state, payload) {
      state.countries = payload
    },

  },
  actions: {
     fetchCovidData({ commit, state }) {
       axios({
        method: 'get',
        url: 'https://api.covid19api.com/summary'
      })
        .then(response => {
          commit("SET_COVID", response.data)
          commit("SET_DATE", state.covid.Date)
          commit("SET_STATUS", state.covid.Global)
          commit("SET_COUNTRY", state.covid.Countries)
        })


    },



  }


})