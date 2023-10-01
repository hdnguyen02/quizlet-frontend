<template>
    <div class="mt-20">
        <div v-for="desk in desks" :key="desk.id" :data-desk-id="desk.id" @click="handlerChooseDesk">
            <router-link :to="`/desk/detail/${desk.id}`"
                class="mb-3 flex flex-col gap-1 hover-pointer py-2 px-4 bg-white border border-gray-200 hover:border-b-purple-500 border-b-4  rounded-lg shadow-lg">
                <span class="text-xl font-semibold tracking-tight text-gray-900">{{ desk.name }}</span>
                <span class="text-sm font-semibold text-gray-600">26 thuật ngữ</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        // lấy data bộ thẻ về. 
        return {
            desks: null
        }

    },
    methods: {
        getAllDesk() {
            // lấy desk về render ra 
            this.$axios.get('/api/v1/desk/all')
                .then(apiResponse => {
                    const response = apiResponse.data
                    this.desks = response.data
                })
        },
        handlerChooseDesk(event) {
            console.log(event.currentTarget.dataset.deskId)
        }
    },
    created() {
        this.getAllDesk()
    }
}
</script>