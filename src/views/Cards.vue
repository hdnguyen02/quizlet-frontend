<template>
    <div v-show="cards">

        <button class="ml-8 flex items-center gap-x-2 md:hidden bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            <span>Filter</span>
            <span><i class="fa-solid fa-filter text-xs"></i></span>
        </button>




        <div
            class="border-b md:block bg-white mt-2 md:mt-0 pb-2 md:bg-inherit px-8 md:border-r md:fixed md:top-0 md:bottom-0 md:left-0 md:pl-8 md:w-60 md:overflow-y-auto md:h-screen md:pt-20">

            <div>
                <p class="hidden md:block text-xl font-medium text-center border-b pb-2">Filter</p>
                <div>
                    <div class="mt-4 ml-4">
                        <span class="font-medium">Bộ thẻ</span>
                        <div v-for="deck in decks" :key="deck.id" class="flex items-center my-1">
                            <input :value="deck.id" v-model="valueFilter" data-type-filter="id-deck" name="value-filter"
                                type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2">{{ deck.name }}</label>
                        </div>

                    </div>
                </div>


                <div>

                    <div class="mt-4 ml-4">
                        <span class="font-medium">Loại</span>
                        <div class="flex items-center my-1">
                            <input data-type-filter="type" value="LEARNING" v-model="valueFilter" name="value-filter"
                                type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2">Thẻ đang học</label>
                        </div>
                        <div class="flex items-center my-1">
                            <input data-type-filter="type" type="radio" value="REVIEW" name="value-filter"
                                v-model="valueFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2">Thẻ review</label>
                        </div>
                        <div class="flex items-center my-1">
                            <input data-type-filter="type" type="radio" value="FRESH" name="value-filter"
                                v-model="valueFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2">Thẻ mới</label>
                        </div>
                    </div>
                </div>

                <div>


                    <div class="mt-4 ml-4">
                        <span class="font-medium">Tags</span>
                        <div v-for="tag in tags" :key="tag.id" class="flex items-center my-1">
                            <input v-model="valueFilter" :value="tag.name" data-type-filter="tags" name="value-filter"
                                type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm">{{ tag.name }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- <div class="flex justify-end items-center gap-x-4">

                <div class="dropdown">
                    <div class="dropdown-btn">
                        <span>Order by</span>
                        <img class="w-4 h-4" src="../assets/image/dropdown.png">
                    </div>
               
                    <div class="dropdown-content">
                     <a>Option 1</a>
                     <a>Option 2</a>
                     <a>Option 3</a>
                    </div>  
                  </div>
                

                <div class="relative max-w-md w-80">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
               

            </div> -->
        <div class="mt-4 md:mt-0 md:ml-60 px-8 md:px-16">
            <table class="">
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="card in cards" :key="card.id">
                        <td class="py-4 px-2 text-sm text-gray-800">
                            <input type="checkbox"
                                class="w-6 h-6 mt-2 rounded text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-6 dark:bg-gray-700 dark:border-gray-600">
                        </td>
                        <td class="py-4 px-2 first-letter:first-line: text-gray-800 dark:text-gray-200">{{ card.term }}</td>
                        <td class="py-4 px-2">{{ card.definition }}</td>
                        <td class="py-4 px-2">
                            <span :data-type-card="card.type" style="width: 80px;"
                                class="block text-center p-1 rounded bg-gray-700 text-xs">{{ card.type }}</span>
                        </td>
                        <td class="py-4 px-2">
                           <span class="text-gray-500 underline cursor-pointer">edit</span>
                        </td>
              
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div class="hidden border-l pl-8 md:block fixed top-0 bottom-0 right-0 w-72 py-20 pr-8 overflow-y-auto h-screen">
            <form class="flex flex-col gap-5">
              <div class="md:flex md:items-center mb-2">
                <div class="w-full">
                  <label class="text-gray-500 md:text-right mb-1 md:mb-0 pr-4">Thuật ngữ</label>
                  <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                </div>
              </div>

              <div class="md:flex md:items-center mb-2">
                <div class="w-full">
                  <label class="text-gray-500 md:text-right mb-1 md:mb-0 pr-4">Định nghĩa</label>
                  <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                </div>
              </div>

              <div class="md:flex md:items-center mb-2">
                <div class="w-full">
                  <label class="text-gray-500 md:text-right mb-1 md:mb-0 pr-4">Thông tin thêm </label>
                  <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                </div>
              </div>
              
              <div class="md:flex md:items-center mb-2">
                <div class="w-full">
                  <label class="text-gray-500 md:text-right mb-1 md:mb-0 pr-4">Bộ thẻ</label>
                  <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                </div>
              </div>
              <div class="md:flex md:items-center mb-2">
                Hình ảnh
              </div>
              <div class="md:flex md:items-center mb-2">
                Audio
              </div>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Update
              </button>
          </form>

        </div> -->
    </div>
</template>
<script>



export default {
    data() {
        return {
            cards: null,
            decks: null,
            tags: null,
            valueFilter: null
        }
    },
    methods: {
        async getCards(filter, value) {

            let api
            if (filter != null && value != null) {
                api = `api/v1/cards?filter=${filter}&value=${value}`
            }
            else {
                api = `api/v1/cards`
            }
            const apiResponse = await this.$axios.get(api)
            const response = apiResponse.data
            this.cards = response.data

        },

        // lấy thẻ deck card của người dùng. ''
        async getDecks() {
            const apiResponse = await this.$axios.get(`api/v1/decks`)
            const response = apiResponse.data
            this.decks = response.data
        },
        async getTags() {
            const apiResponse = await this.$axios.get(`api/v1/tags`)
            const response = apiResponse.data
            this.tags = response.data
        },
    },
    created() {
        this.getCards(null, null)
        this.getDecks()
        this.getTags()
    },
    watch: {
        valueFilter(value) {
            let filter = document.querySelector('input[type="radio"][name="value-filter"]:checked').dataset.typeFilter
            this.getCards(filter, value)
        }
    },
   
}

</script>


<style scoped>
input {
    outline: none;
}


th:nth-child(1),
td:nth-child(1) {
    width: 2%;
}

th:nth-child(2),
td:nth-child(2) {
    width: 35%;
}

th:nth-child(3),
td:nth-child(3) {
    width: 35%;
}



[data-type-card="FRESH"] {
    background-color: green;
    color: white;
}

[data-type-card="LEARNING"] {
    background-color: purple;
    color: white;
}

[data-type-card="REVIEW"] {
    background-color: #4255FF;
    color: white;
}
</style>