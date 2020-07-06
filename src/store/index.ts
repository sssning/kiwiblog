import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideTool:{},
    weatherNow:{},
  },
  mutations: {
    setWeather(state,data){
      state.weatherNow = data;
    },
    setSideTool(state,data){
      state.sideTool = data;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
