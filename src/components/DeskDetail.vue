<template>
    <div v-if="desk" class="mt-8">
        <h3 class="text-3xl font-bold tracking-tight text-gray-900">{{desk.name}}</h3>
    
            <div class="max-w-3xl">
                <h3 class="font-medium mt-1">Hoạt động tự học</h3>
                <div class="mt-4 flex gap-y-4 lg:gap-y-0 flex-col lg:flex-row lg:justify-between">
                    <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                        <span><i class="fa-solid fa-chalkboard text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Học</span>
                    </button>
                    <router-link :to="`/desk/${idDesk}/add-card`"
                        class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                        <span><i class="fa-solid fa-plus text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Thêm thẻ</span>
                    </router-link>
                    <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                        <span><i class="fa-solid fa-check text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Kiểm tra</span>
                    </button>
                    <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                        <span><i class="fa-solid fa-pen-to-square text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Hiệu chỉnh</span>
                    </button>

                </div>
                <RouterView></RouterView>

            </div>
    

    </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            idDesk: this.$route.params.id, 
            desk: null
        }
    },
    created(){
       this.getDesk()
    }, 
    methods: {
        getDesk(){
            this.$axios.get(`api/v1/desk/detail/${this.idDesk}`)
            .then(apiResponse => {
                const response = apiResponse.data 
                this.desk = response.data
                console.log(response)
            })
            .catch(() => {
                this.$router.push('/not-found')
            })
        }
    },
    beforeRouteUpdate(to, from, next) {
    // Xử lý khi route thay đổi
        this.idDesk = to.params.id 
         next();
    }, 
    watch: {
        idDesk() {
            this.getDesk()
        }
    }


}

</script>