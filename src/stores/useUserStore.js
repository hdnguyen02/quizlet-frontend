import {defineStore} from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
      return {
        isAuthenticated: false // mới vào trạng thái sẽ như này. 
      }
  }, 
  getters: {
    getIsAuthenticated(state){
      return state.isAuthenticated
    }
  }, 
  
  actions: {
    setAuthenticated(value) { 
      this.isAuthenticated = value
    }

    // changeAuthenticate(){
    //   this.isAuthenticated = !this.isAuthenticated
    // }
  }
})
