<template>
  <form ref="addForm" @submit.prevent="handlerAddCard" class="w-full mt-8">
    <div class="md:flex md:items-center mb-6 gap-x-4">
      <div class="w-full">
        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Thuật ngữ *
        </label>
        <input v-model="card.term" required
          class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text">
      </div>
      <div class="w-full">
        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Định nghĩa *
        </label>
        <input v-model="card.definition" required
          class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text">
      </div>
    </div>


    <div class="md:flex md:items-center mb-6 gap-x-4">
      <div class="w-full">
        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Hình ảnh
        </label>
        <input ref="image" type="file"
          class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
      </div>
      <div class="w-full">
        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Audio
        </label>
        <input ref="audio" type="file"
          class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
      </div>
    </div>

    <div class="md:flex md:items-center mb-6">
      <div class="w-full">
        <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Thông tin thêm
        </label>
        <input v-model="card.extractInfo"
          class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text">
      </div>
    </div>

    <div class="">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button type="submit"
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
          Thêm
        </button>

      </div>
    </div>
  </form>
  <Failure v-if="isSuccess == false" :message="message"></Failure>
  <Success v-if="isSuccess == true" :message="message"></Success>
</template>

<script>
import axios from 'axios'
import Success from './alert/Success.vue'
import Failure from './alert/Failure.vue'

export default {
  props: [],
  data() {
    return {
      card: {
        term: null,
        definition: null,
        extractInfo: null
      },
      messageAlert: null,
      isSuccess: null,
      message: null
    }
  },
  mounted() {

  },

  methods: {

    handlerAddCard() {

      const formData = new FormData()
      formData.append('term', this.card.term)
      formData.append('definition', this.card.definition)
      formData.append('extractInfo', this.card.extractInfo)
      formData.append('image', this.$refs.image.files[0])
      formData.append('audio', this.$refs.audio.files[0])
      formData.append('idDeskAddCard', this.$route.params.id)

      axios.post('http://localhost:8080/api/v1/card/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(apiResponse => {
          const response = apiResponse.data
          this.message = response.message
          this.isSuccess = false
          setTimeout(() => {
            this.message = ""
            this.isSuccess = null
          }, 2000)

          this.card.term = this.card.definition = this.card.extractInfo = null
          this.$refs.image.value = this.$refs.audio.value = null

          this.message = "Thêm thành công"
          this.isSuccess = true
          setTimeout(() => {
            this.message = ""
            this.isSuccess = null
          }, 2000)


        })
        .catch(error => {
          const message = error.response.data.message
          this.message = message
          this.isSuccess = false
          setTimeout(() => {
            this.message = ""
            this.isSuccess = null
          }, 2000)
        })
    },


  },

  components: {
    Success, Failure
  }
}
</script>