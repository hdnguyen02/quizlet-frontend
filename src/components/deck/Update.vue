<template>
     <div v-if="desk" class="mx-8">
        <form @submit.prevent="editDeskHandler" class="mx-auto flex flex-col md:flex-row justify-between gap-x-5 lg:max-w-xl md:max-w-md">
            <div class="flex flex-col gap-y-6 w-full">
                <div class="flex flex-col">
                    <input v-model="desk.name" type="text" required
                        class="outline-none focus:border-yellow-400 border-gray-500 border-b-[3px] pb-3"
                        placeholder="Nhập tên desk..." />
                    <label class="mt-3 uppercase text-[12px] font-bold text-gray-500">Tên desk</label>
                </div>
                <div class="flex flex-col">
                    <input v-model="desk.description" type="text"
                        class="outline-none focus:border-yellow-400 border-gray-500 border-b-[3px] pb-3"
                        placeholder="Mô tả desk..." />
                    <label class="mt-3 uppercase text-[12px] font-bold text-gray-500">Mô tả</label>
                </div>
                <div>

             
                <span class="font-bold">Topic</span>
              
                                <ul class="my-1">
                                    <li v-for="topic in topicStore.getTopics" :key="topic.name">
                                        <span class="font-medium">{{topic.name}}</span>
                                        <ul class="">
                                            <li v-for="label in topic.labels" :key="label.id" class="flex items-center py-1 px-2 my-1 text-base">
                                                <i class="fa-solid fa-tag"></i>
                                                <span class="flex-1 ml-3">{{label.name}}</span>
                                                <input class="w-4 h-4" :value="label.id" v-model="idLabels"  type="checkbox"> 
                                            </li>
                                    
                                        </ul>
                                    </li>   
                                </ul>
                            </div>
    
                <div class="mt-5 flex justify-between">
                    <div class="flex justify-between  w-full">
                       <button type="submit"
                            class="focus:outline-none text-white bg-[#4255FF] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3">Edit</button>



                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="desk.isPublic" type="checkbox" class="sr-only peer">
                            <div
                                class="w-11 h-[26px] bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-3 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Public</span>
                        </label>
                    </div>


                </div>
            </div>
           

        </form>

        <Success v-show="isShowAlert" message="thêm thành công"></Success>
    </div> 
</template>

<script>

import { mapStores } from 'pinia'
import { useTopicStore } from '../../stores/useTopicStore.js'
import Success from '../../components/alert/Success.vue'

export default {
    data() {
        return {
            desk: null,
            isShowAlert: false, 
            idDeck: this.$route.params.idDeck, 
            idLabels: []
        };
    },
    computed: {
        ...mapStores(useTopicStore)
    },
    methods: {
        editDeskHandler() {
            this.$axios.put('api/v1/decks/' + this.idDeck, {
                name: this.desk.name, 
                description: this.desk.description, 
                isPublic: this.desk.isPublic, 
                idLabels: this.idLabels
            })
                .then(() => {
                    location.reload()
                })  
                .catch(error=>{
                    console.log(error)
                })
        }, 
        getDeskWithId(deskId) {
            this.$axios.get(`api/v1/decks/${this.idDeck}`)
            .then(responseApi => {
                const response = responseApi.data
                this.desk = response.data
                this.desk.labels.forEach(label => {
                  this.idLabels.push(label.id)  
                })
            })
            .catch(error => {
                console.log(error)
            }) 
        }
        
    },
    created() {
        this.getDeskWithId(this.deskId)
    }, 
    components: { Success }
}
</script>