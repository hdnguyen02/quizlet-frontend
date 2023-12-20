<template>
  <div class="flex flex-col gap-y-4">


  <div class="flip-card h-[340px] w-[700px] my-auto">

    <div :class="{'is-flip': isFlip}" class="flip-card-inner shadow-3xl bg-white rounded-lg text-2xl">

      <div class="flip-card-front">

        <div class="flex flex-col items-center justify-center gap-y-2 h-full">
          <!-- <p class="absolute top-4 left-4 text-sm font-light text-green-500">
            Thẻ mới
          </p>
          <p class="absolute top-4 left-4 text-sm font-light text-orange-600">
            Thẻ ôn tập
          </p> -->
          <span class="absolute top-4 right-4 text-sm font-light text-purple-600">front</span>
          <span>{{ card?.term }}</span>
          <!-- <span><i class="fa-solid fa-volume-high"></i></span> -->
          <!-- <div class="w-96 h-52 flex justify-center">
            <img style="max-width: 100%; max-height: 100%;" class="object-contain">
          </div> -->
          <audio controls ref="audiocard" class="hidden">
            <source type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>

      </div>
      <div class="flip-card-back">
        <div class="flex flex-col justify-center items-center gap-y-2 h-full">
          <span class="absolute top-4 right-4 text-sm font-light text-purple-600">back</span>
          <span>{{ card?.definition }}</span>
          <!-- * ex info -->
          <span></span>
        </div>
      </div>
    </div>
  </div>


  <div class="flex justify-center">
    <button v-show="!isFlip" @click="handleShowAnswer" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
      Show answer
    </button> 

    <div v-show="isFlip" class="flex gap-x-4">
      <button v-for="(value, key,index) in card.options" :key="index"  @click="handleChoose(key)"  class="flex gap-x-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded">
        <span>{{key}}</span>
        <span>({{value}} day)</span>
      </button>
    </div>
    
    




  

  </div>



</div>
</template>
<script>

import { response } from '../../../global'

export default {
  props: ['card'], 
  
  data() {
    return {
      isFlip: false 
      
    }
  },

  methods: {
    // sau khi người dùng chọn kết quả => gửi đến cho máy chủ luôn. 
    handleShowAnswer() {
      // lấy option ra.
      this.isFlip = true
    }, 
    handleChoose(key) {
      this.$emit("nextCard",response[key])
    }
  },
  watch: {
    card() {
      this.isFlip = false
    }
  },



}
</script>


<style scoped>
.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}


.is-flip {
  transform: rotateY(180deg);
}



.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>