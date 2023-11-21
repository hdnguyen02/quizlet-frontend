<template>
    <div class="mt-8">
        <div v-if="desks.length == 0">

            <div class="flex justify-center gap-x-5">
                <p class="text-xl">Chưa có bộ thẻ</p>
                <router-link to="/desk/add" class="text-xl text-blue-600 underline">
                    Tạo bộ thẻ
                </router-link>
            </div>

        </div>
        <div v-else>
            <div>
                <p class="text-sm ml-1">
                    <span class="font-medium">{{ desks.length }} bộ thẻ</span>
                    <span class="ml-5 text-gray-500 font-medium">tạo bởi hdnguyen</span>
                    <span style="font-size: 12px"
                        class="font-medium ml-2 px-3 py-[3px] bg-blue-200 text-gray-600 rounded-lg">Học sinh</span>
                </p>

            </div>
            <div class="mt-8">
                <div class="relative" v-for="desk in desks" :key="desk.id" :data-desk-id="desk.id">
                    <router-link :to="`/desk/${desk.id}/study`"
                        class="mb-3 flex flex-col gap-1 hover-pointer py-2 px-4 bg-white border border-gray-200 hover:border-b-purple-500 border-b-4  rounded-lg shadow-lg">
                        <span class="text-xl font-semibold tracking-tight text-gray-900">{{ desk.name }}</span>
                        <span class="text-sm font-semibold text-gray-600">{{ desk.cardNumber }} card</span>
                    </router-link>


                    <div class="absolute top-6 right-4 flex gap-x-3">
                        <router-link :to="`/desk/edit/${desk.id}`" class="underline cursor-pointer">
                            <span>
                                Edit
                            </span> <i class="ml-1 fa-solid fa-pen-to-square"></i>
                        </router-link>
                        <a :data-desk-id="desk.id" @click="handleClickDeleteDesk" class="underline cursor-pointer">
                            <span>Delete</span><i class="fa-solid fa-trash-can"></i>
                        </a>
                    </div>



                </div>
              
            </div>


        </div>

    <ConformDelete :isShowConform="isShowConform" @click-conform="handleDeleteDesk" @click-cancel="handleCancelDelete"></ConformDelete>
    </div>
</template>

<script>

import Conform from './Conform.vue'

export default {

    components: {
        ConformDelete: Conform
    }, 
    data() {
        // lấy data bộ thẻ về. 
        return {
            isShowConform: false,
            desks: [], 
            deskIdDelete: null
        
        }

    },
    methods: {
        getAllDesk() {
            this.$axios.get('/api/v1/desk/all')
                .then(apiResponse => {
                    const response = apiResponse.data
                    console.log(response)
                    this.desks = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }, 
        handleClickDeleteDesk(event) { 
            this.isShowConform = true // show lên.
            let curentTarget =  event.currentTarget 
            this.deskIdDelete =  curentTarget.dataset.deskId
        }, 
        handleDeleteDesk() {
            this.isShowConform = false 
            this.$axios.delete(`api/v1/desk/delete/${this.deskIdDelete}`) 
            .then(() => {
                location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
        }, 
        handleCancelDelete() {
            this.isShowConform = false
        }
    },
    created() {
        this.getAllDesk()
    },
    beforeUnmount() {
        this.getAllDesk()
    }
}
</script>