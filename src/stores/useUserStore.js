import {defineStore} from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
      return {
        isAuthenticated: true 
      }
  }, 
  getters: {
    getIsAuthenticated(state){
      return state.isAuthenticated
    }
  }, 
  actions: {
    changeAuthenticate(){
      this.isAuthenticated = !this.isAuthenticated
    }
  }
})
