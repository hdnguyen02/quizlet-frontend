<template>
    <div v-if="deck" class="mt-8 w-full">
        <h3 class="text-3xl font-bold text-gray-700 text-center">{{deck.name}}</h3>
    
            <!-- <div> -->
                <div class="px-2 py-8 flex gap-x-2 md:gap-x-4 justify-center">
                    <router-link :to="`/decks/${idDeck}/study`" class="flex gap-x-4 items-center bg-white px-2 md:px-10 md:py-1 md:shadow-md">
                        <span class="hidden md:block"><i class="fa-solid fa-chalkboard text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Học</span>
                    </router-link>
                    <router-link :to="`/decks/${idDeck}/cards/create`"
                    class="flex gap-x-4 items-center bg-white px-2 md:px-10 md:py-1 md:shadow-md">
                        <span class="hidden md:block"><i class="fa-solid fa-plus text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Thêm thẻ</span>
                    </router-link>
        
                    <router-link :to="`/decks/${idDeck}/update`" class="flex gap-x-4 items-center bg-white px-2 md:px-10 md:py-1 md:shadow-md">
                        <span class="hidden md:block"><i class="fa-solid fa-pen-to-square text-2xl text-[#4255FF]"></i></span>
                        <span class="font-medium">Hiệu chỉnh</span>
                    </router-link>

                </div>
                <RouterView></RouterView>
            <!-- </div> -->
    

    </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            idDeck: this.$route.params.idDeck, 
            deck: null
        }
    },
    created(){
       this.getDeck()
    }, 
    methods: {
        getDeck(){
            this.$axios.get(`api/v1/decks/${this.idDeck}`)
            .then(apiResponse => {
                const response = apiResponse.data 
                this.deck = response.data
            })
            .catch(error => {
                console.log(error)
                this.$router.push('/not-found')
            })
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.iddeck = to.params.id 
         next();
    }, 
    watch: {
        iddeck() {
            this.getDeck()
        }
    }


}

</script>