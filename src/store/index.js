import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      inputValue:'',
    }
  },
  getters: { 
  },
  mutations: {
    setInputValue(state, value){
      state.inputValue = value;
    }
  },
  actions: {

  },
  modules: {
  },
})


