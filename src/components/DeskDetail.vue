<template>
    <div class="mt-20">
        <h3 class="text-2xl font-semibold tracking-tight text-gray-900">Tiếng anh</h3>
        <div class="flex flex-col lg:flex-row gap-4">
        <div class="w-full">
           
            <h3 class="font-bold mt-4">Hoạt động tự học</h3>
            <div class="mt-6 flex gap-y-4 lg:gap-y-0 flex-col lg:flex-row lg:justify-between">
                <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                    <span><i class="fa-solid fa-chalkboard text-2xl text-[#4255FF]"></i></span>
                    <span class="font-medium">Học</span>
                </button>
                <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                    <span><i class="fa-solid fa-plus text-2xl text-[#4255FF]"></i></span>
                    <span class="font-medium">Thêm thẻ</span>
                </button>
                <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                    <span><i class="fa-solid fa-check text-2xl text-[#4255FF]"></i></span>
                    <span class="font-medium">Kiểm tra</span>
                </button>
                <button class="flex gap-x-4 items-center bg-white px-10 py-2 rounded-lg shadow-md">
                    <span><i class="fa-solid fa-pen-to-square text-2xl text-[#4255FF]"></i></span>
                    <span class="font-medium">Hiệu chỉnh</span>
                </button>
            </div>
            <CardAdd></CardAdd>
        </div>
        <div class="max-w-md">
            <h3 class="mt-6 font-medium">Mô tả</h3>
            <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum fugit quia similique voluptatem laborum modi a vel veritatis quo.</p>
            <h3 class="mt-4 font-medium">Public: true</h3>
            <h3 class="mt-4 font-medium">Số thẻ: 0</h3>
            <h3 class="mt-4 font-medium">Số thẻ tới hạn: 0</h3>
        </div>
    </div>
    </div>
</template>

<script>    
    import CardAdd from './CardAdd.vue';
    export default {
        components: {
            CardAdd
        },
        data(){
            return {
                
            }
        }, 
        methods: {

        },
        created() {
            console.log(this.$route.params.id)   
            // fetch data lên thôi. nhưng trước tiên cần tạo ra card đã. 
            //
            // ví dụ bây giờ thêm thẻ . 

        }
    }

</script>