<template>
    <div v-show="cards" class="flex w-full">
        <div class="border-r">
            <div class="pr-8 pt-8">
                <div>
                    <span>Bộ thẻ</span>
                    <div class="mt-4">
                        <div v-for="deck in decks" :key="deck.id" class="flex items-center mb-4">
                            <input :value="deck.id" v-model="valueFilter" data-type-filter="id-deck" name="value-filter" type="radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm font-medium text-gray-600">{{ deck.name }}</label>
                        </div>

                    </div>
                </div>
                <hr class="m-4">

                <div>
                    <span>Loại</span>
                    <div class="mt-4">
                        <div class="flex items-center mb-4">
                            <input data-type-filter="type" value="LEARNING" v-model="valueFilter" name="value-filter" type="radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm font-medium text-gray-600">Thẻ đang học</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input data-type-filter="type" type="radio" value="REVIEW" name="value-filter" v-model="valueFilter"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm font-medium text-gray-600">Thẻ review</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input data-type-filter="type" type="radio" value="FRESH" name="value-filter" v-model="valueFilter"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm font-medium text-gray-600">Thẻ mới</label>
                        </div>
                    </div>
                </div>
                <hr class="m-4">
                <div>

                    <span>Tags</span>
                    <div class="mt-4">
                        <div v-for="tag in tags" :key="tag.id" class="flex items-center mb-4">
                            <input v-model="valueFilter" :value="tag.name" data-type-filter="tags" name="value-filter" type="radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label class="ms-2 text-sm font-medium text-gray-600">{{ tag.name }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="border-l px-8 pt-8 grow flex">
            <div class="grow">
                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="min-w-full inline-block align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="p-2 text-start text-xs font-medium text-gray-500 uppercase">Term</th>
                                            <th scope="col"
                                                class="p-2 text-start text-xs font-medium text-gray-500 uppercase">
                                                Definition</th>
                                            <th scope="col"
                                                class="p-2 text-start text-xs font-medium text-gray-500 uppercase">Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">

                                        <tr v-for="card in cards" :key="card.id">
                                            <td class="p-2 text-gray-800 dark:text-gray-200">{{ card.term }}</td>
                                            <td class="p-2">{{ card.definition }}</td>
                                            <td class="p-2 text-sm text-gray-800 ">
                                                <div class="flex gap-x-6 text-gray-600">
                                                    <span class="text-sm">edit</span>
                                                    <span class="text-sm">delete</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    }
}

</script>