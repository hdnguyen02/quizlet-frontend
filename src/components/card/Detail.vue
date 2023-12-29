<template>
    <div class="fixed top-0 bottom-0 right-0 justify-end flex left-0 z-50" style="background-color: rgba(0,0,0,0.4);">
        <div class=" bg-gray-100 shadow-xl py-4 px-8 max-w-md overflow-y-scroll" style="height: 100vh;">
            <div class="border-b-2   flex justify-between items-center">
                <i @click="handllClose" class="fa-solid fa-xmark p-4 text-2xl cursor-pointer hover:text-green-500"></i>
    
                <button class="inline-flex h-8 text-sm items-center justify-center px-4 py-2  leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600">
                    <i class="fa-solid fa-check text-green-50"></i>
                    <span class="ml-2">save changes</span>
                </button>
            </div>
            <form class="w-full flex flex-col lg:flex-row gap-5 pt-4">
                <div class="w-full">
                  <div class="md:flex md:items-center mb-4">
                    <div class="w-full">
                      <label class="text-sm md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Thuật ngữ
                      </label>
                      <input :value="card?.term"
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"/>
                    </div>
                  </div>

                  <div class="md:flex md:items-center mb-4">
                    <div class="w-full">
                      <label class="text-sm md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Định nghĩa
                      </label>
                      <input :value="card?.definition"
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"/>
                    </div>
                  </div>
                  <div class="md:flex md:items-center mb-4">
                    <div class="w-full">
                      <label class="text-sm md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Thông tin thêm
                      </label>
                      <input :value="card?.extractInfo"
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"/>
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <!-- Chứa hình ảnh audio -->
        
                    <label class="text-sm mb-1 md:mb-0">Bộ thẻ</label>
                    <select :value="card?.extractInfo"
                    class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="text-sm">Audio</label>
                </div>
                  <div>
                    <label class="text-sm mb-1 md:mb-0">Hình ảnh</label>
                    <img class="mt-2 w-100 h-100" src="https://img.freepik.com/premium-photo/beautiful-little-girl-teenager-with-field-house-park-outdoors_75156-134.jpg">
                  </div>

                </div>
              </form>

        </div>
    </div>
    
    
</template>

<script>
    export default { 
        props: ['card'],
        methods: {
            handllClose(){
                this.$emit('close')
            }
        }
    }
</script>