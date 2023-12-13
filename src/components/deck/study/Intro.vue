<template>
    <div ref="containerIntro" class="flex flex-col items-center justify-center gap-y-2">
        <p>New: {{nNew}}</p>
        <p>Learning: {{nLearning}}</p>
        <p>Review: {{nReview}}</p>
        <button @click="handleStartStudy()" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
            Bắt đầu
        </button>
</div>
    
</template>

<script>
    export default {
        props: ['nNew', 'nLearning', 'nReview'], 
        methods: {
            handleStartStudy() {
                // thực hiển ẩn đi màn hình này.
                this.$refs.containerIntro.style.display = "none"
                this.$emit('startStudy')
            }
        }
    }
</script>
