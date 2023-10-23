<template>
    <div class="mt-14">
        <div class="flex justify-between items-center">
            <h3 class="font-bold text-2xl">Tạo bộ thẻ mới</h3>

       
            <button type="submit"
                class="flex gap-x-1 focus:outline-none text-white bg-[#4255FF] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3">
                <span>
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span>Nhập</span>
            </button>


        </div>

        <form @submit.prevent="addDeskHandler" class="mt-5 flex flex-col-reverse md:flex-row justify-between gap-x-5">
            <div class="mt-14 flex flex-col gap-y-6 w-full">
                <div class="flex flex-col">
                    <input v-model="desk.name" type="text" required
                        class="outline-none focus:border-yellow-400 border-gray-500 border-b-[3px] pb-3 bg-[#F6F7FB]"
                        placeholder="Nhập tên desk..." />
                    <label class="mt-3 uppercase text-[12px] font-bold text-gray-500">Tên desk</label>
                </div>
                <div class="flex flex-col">
                    <input v-model="desk.description" type="text"
                        class="outline-none focus:border-yellow-400 border-gray-500 border-b-[3px] pb-3 bg-[#F6F7FB]"
                        placeholder="Mô tả desk..." />
                    <label class="mt-3 uppercase text-[12px] font-bold text-gray-500">Mô tả</label>
                </div>
                <div class="mt-5 flex justify-between">
                    <div class="flex justify-between  w-full">
                        <!-- tạo --> <button type="submit"
                            class="focus:outline-none text-white bg-[#4255FF] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3">Tạo</button>



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
            <div class="w-260 md:w-[460px]">
                <div class="shadow-2xl relative w-full max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        <!-- Modal header -->
                        <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                Danh sách label
                            </h3>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6">
                            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Thiết lập label giúp bạn quản lý thẻ tốt
                                hơn</p>
                            <ul class="my-4 space-y-3 overflow-y-scroll h-36">
                                <li v-for="topic in topicStore.getTopics" :key="topic.name">
                                    <span>Topic: {{topic.name}}</span>
                                    <ul class="">
                                        <li v-for="label in topic.labels" :key="label.id" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                            <i class="fa-solid fa-tag"></i>
                                            <span class="flex-1 ml-3 whitespace-nowrap">{{label.name}}</span>
                                            <input :value="label.id" v-model="desk.idLabels"  type="checkbox"> 
                                        </li>
                                
                                    </ul>
                                </li>   
                            </ul>
                            <div>
                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>

        <Success v-show="isShowAlert" message="thêm thành công"></Success>
    </div>
</template>

<script>

import { mapStores } from 'pinia'
import { useTopicStore } from '../stores/useTopicStore.js'
import Success from './alert/Success.vue'

export default {
    data() {
        return {
            desk: {
                name: null,
                description: null,
                isPublic: true,
                idLabels: [] // chứa danh sách nhãn. 
            },
            isShowAlert: false
        };
    },
    computed: {
        ...mapStores(useTopicStore)
    },
    methods: {
        addDeskHandler() {
            this.$axios.post("api/v1/desk/add", this.desk)
                .then( () => this.$router.push("/desk/all"))
                .catch(error => alert("Thêm thất bại: " + error))
        },
    },
    components: { Success }
}
</script>