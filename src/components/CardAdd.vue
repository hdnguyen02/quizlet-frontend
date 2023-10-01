<template>
    <form class="w-full mt-8">
        <div class="md:flex md:items-center mb-6 gap-x-4">
          <div class="w-full">
            <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Thuật ngữ *
              </label>
            <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
          </div>
          <div class="w-full">
            <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Định nghĩa *
              </label>
            <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
          </div>
        </div>
    
          <div class="md:flex md:items-center mb-6 gap-x-4">
            <div class="w-full">
              <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Hình ảnh   
                </label>
              <input type="file" class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" >
            </div>
            <div class="w-full">
                <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Audio  
                  </label>
                <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
              </div>
          </div>
    
          <div class="md:flex md:items-center mb-6">
            <div class="w-full">
              <label class=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                 Thông tin thêm    
                </label>
              <input class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
            </div>
          </div>
       
        <div class="">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="button">
              Thêm
            </button>
          </div>
        </div>
      </form>
</template>

<script>
 
    export default {
        props: [], 
        data() {
            return {

            }
        }, 
        methods:{},

    }
</script>