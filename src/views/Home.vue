<template>
    <Slider></Slider>
</template>

<script>
    import { mapStores } from 'pinia'
    import {useUserStore} from '../stores/useUserStore.js'
    import Slider from '../components/Slider.vue'



    export default {
        computed: {
            ...mapStores (useUserStore),
        }, 
        components: {
            Slider
        }
    }

    

</script>
