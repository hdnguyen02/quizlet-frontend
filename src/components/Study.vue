<template>
  <div v-if="!isComplete" class="mt-4 max-w-3xl w-full">
    <div v-show="!isStart" class="flex flex-col items-center gap-3">
      <div class="flex items-center gap-3">
        <span class="text-green-500">card mới : {{ studyCards.length }} </span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-orange-500">card ôn tập : {{ reviewCards.length }} </span>

      </div>

      <button @click="isStart = true"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bắt
        đầu</button>
    </div>
    <div v-show="isStart" class="flip-card w-full h-[340px]">

      <div v-if="curentCard" class="flip-card-inner  shadow-3xl bg-white rounded-lg text-2xl"
        :class="{ 'is-flip': isFlip, 'x': isX }">

        <div class="flip-card-front">

          <div class="flex flex-col items-center justify-center gap-y-2 h-full">
            <p v-if="isStudyCard" class="absolute top-4 left-4 text-sm font-light text-green-500">
              Thẻ mới
            </p>
            <p v-else class="absolute top-4 left-4 text-sm font-light text-orange-600">
              Thẻ ôn tập
            </p>
            <span class="absolute top-4 right-4 text-sm font-light text-purple-600">front</span>
            <span>{{ curentCard.term }}</span>
            <span v-if="curentCard.audio" @click="playAudio"><i class="fa-solid fa-volume-high"></i></span>
            <div v-if="curentCard.image" class="w-96 h-52 flex justify-center">
              <img style="max-width: 100%; max-height: 100%;" class="object-contain" :src="curentCard.image">
            </div>
            <audio controls ref="audiocard" class="hidden">
              <source :src="curentCard.audio" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
        <div class="flip-card-back">
          <div class="flex flex-col justify-center items-center gap-y-2 h-full">
            <span class="absolute top-4 right-4 text-sm font-light text-purple-600">back</span>
            <span>{{ curentCard.definition }}</span>
            <span v-if="curentCard.extractInfo != null">{{ curentCard.extractInfo }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isStart" class="flex justify-between items-center mt-2">
      <span class="text-green-500 text-sm">{{ studyCards.length - indexStudyCard}}</span>
      <p @click="handlerFlip" class="text-blue-600 underline cursor-pointer">
        Lật thẻ
      </p>
      <span class="text-orange-500 text-sm">{{ reviewCards.length - indexReviewCard }}</span>

    </div>

    <div v-show="isStart" class="mt-1">
      <div v-if="isShowAnswer" class="flex gap-x-4 justify-center">
        <div v-if="curentCard.repetitions != 0 && curentCard.repetitions != 1">
          <div class="flex flex-col items-center justify-center">
            <span class="text-sm">{{ computedDay.hard }} day</span>
            <button @click="handlerChooseQuality" data-response="hard"
              class="w-28 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Khó
            </button>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="text-sm">{{ computedDay.medium }} day</span>
            <button @click="handlerChooseQuality" data-response="medium"
              class="w-28 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              Trung bình
            </button>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="text-sm">{{ computedDay.good }} day</span>
            <button @click="handlerChooseQuality" data-response="good"
              class="w-28 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Tốt
            </button>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="text-sm">{{ computedDay.veryGood }} day</span>
            <button @click="handlerChooseQuality" data-response="veryGood"
              class="w-28 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Rất tốt
            </button>
          </div>
        </div>
        <div v-else>
          <div v-if="curentCard.repetitions == 0" class="flex flex-col items-center justify-center">
            <span class="text-sm">1 day</span>
            <button @click="handlerChooseQuality" data-response="hard"
              class="w-28 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Khó
            </button>
          </div>
          <div v-if="curentCard.repetitions == 1" class="flex flex-col items-center justify-center">
            <span class="text-sm">4 day</span>
            <button @click="handlerChooseQuality" data-response="medium"
              class="w-28 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Trung bình
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <CompleteStudy/>
  </div>
</template>

<script>
import calc from '../sm2/index.js'
import { quality } from '../sm2/index.js'
import CompleteStudy from '../components/CompleteStudy.vue'
export default {
  data() {
    return {
      deskId: this.$route.params.id,
      isStart: false, isFlip: false,
      studyCards: [], reviewCards: [],
      curentCard: null,
      indexStudyCard: 0,
      indexReviewCard: 0,
      isStudyCard: true, // đang học thẻ mới. 
      learnedCards: [],  // chứa thẻ card đã học song và được tính toán.
      reviewedCards: [],
      isShowAnswer: false,
      isComplete: false, // đánh dấu đã học hết. 
      computedDay: {
        hard: null,
        medium: null,
        good: null,
        veryGood: null
      },
      isX: false
    }
  },
  created() {
    this.getCards()
  },
  methods: {
    getCards() {
      this.$axios.get(`api/v1/card/study?deskId=${this.deskId}`)
        .then(apiResponse => {
          const response = apiResponse.data

          this.studyCards = response.data.studyCards

          this.reviewCards = response.data.reviewCards
  

          if (this.studyCards.length != 0) {
            this.curentCard = this.studyCards[this.indexStudyCard]
            this.isStudyCard = true
          }
          else {
            this.curentCard = this.reviewCards[this.indexReviewCard]
            this.isStudyCard = false // review
          }
        })

        .catch(error => {
          console.log(error)
        })
    },
    playAudio() {
      this.$refs.audiocard.play()
    },
    handlerFlip() {
      this.isFlip = !this.isFlip
      if (this.isShowAnswer) return // đang show
      this.isShowAnswer = true
      this.isX = true
      this.handlerComputedDay()


    },
    handlerChooseQuality(event) {
      if (this.isComplete) return;
      const target = event.currentTarget
      let card = this.curentCard
      let sm2Value = calc(quality[target.dataset.response], card.repetitions, card.interval, card.easeFactor)


      card.repetitions = sm2Value.repetitions
      card.interval = sm2Value.interval
      card.easeFactor = sm2Value.easeFactor 
      console.log(this.indexStudyCard, this.indexReviewCard)

      if (this.isStudyCard) {
        if (this.indexStudyCard != this.studyCards.length - 1) { // chưa học xong. 
        this.learnedCards.push(card) 
        this.curentCard = this.studyCards[++this.indexStudyCard]
        }
        else  { 
          this.learnedCards.push(card)
          this.curentCard = this.reviewCards[0] 
          this.isStudyCard = false
        }
      }
      else {
        if (this.indexReviewCard != this.reviewCards.length - 1) { // đang xem card review
        this.reviewedCards.push(card)
        this.curentCard = this.reviewCards[++this.indexReviewCard]
        }
        else  {
          this.reviewedCards.push(this.curentCard) // vẫn push vào => 
          console.log("k")
          this.isComplete = true
          this.isX = false
          this.isFlip = false
          this.isShowAnswer = false
        }
      }
     
      
      

      // if (this.indexStudyCard == this.studyCards.length - 1 && this.indexReviewCard == this.reviewCards.length - 1) {
      //   console.log("dô complete")
      //   this.isComplete = true
      //   return
      // }
      
    },
    handlerComputedDay() {
      let card = this.curentCard

      let sm2HardValue = calc(quality['hard'], card.repetitions, card.interval, card.easeFactor)
      let sm2MediumValue = calc(quality['medium'], card.repetitions, card.interval, card.easeFactor)
      let sm2GoodValue = calc(quality['good'], card.repetitions, card.interval, card.easeFactor)
      let sm2VeryGoodValue = calc(quality['veryGood'], card.repetitions, card.interval, card.easeFactor)


      this.computedDay.hard = sm2HardValue.interval
      this.computedDay.medium = sm2MediumValue.interval
      this.computedDay.good = sm2GoodValue.interval
      this.computedDay.veryGood = sm2VeryGoodValue.interval
    }, 
    
  },
  watch: {
    isComplete(newisComplete) {
      if (newisComplete == true) {
        let dataSend = {
          'reviewCards': this.reviewedCards, 
          'studyCards': this.learnedCards
        }

        // gửi lên.. 
      this.$axios.put("api/v1/card/study/" + this.deskId, dataSend)
      .then(() => {
        // update thành công => reset lại trang hiện tại 
        location.reload()
      }) 
      .catch(error => {
        console.log(error)
      })


        console.log(dataSend, "data send")

        // this.$axios.put(`api/v1/card/study/${this.deskId}`, dataSend)
        //   .then(responseApi => {
        //     const response = responseApi.data 
        //     console.log(response)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })
      }
    }
  },
  components: {
      CompleteStudy
    }
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
  /* transition: transform 0.3s; */
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.x {
  transition: transform 0.3s;
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
}</style>