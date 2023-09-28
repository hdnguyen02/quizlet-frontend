import {defineStore} from 'pinia'
import axios from 'axios'
import {baseURL} from '../global.js'
export const useTopicStore = defineStore('topic', {
  state: () => {
      return {
        topics: null 
      }
  }, 
  getters: {
    getTopics(state) { 
        return state.topics
    }
  }, 
  actions: {
    fetchTopics(){
        const urlapi = baseURL + "/api/v1/topic/all"
        axios.get(urlapi).then(apiResponse => {
            const response = apiResponse.data 
            this.topics = response.data
        })  
    }
  }
})
