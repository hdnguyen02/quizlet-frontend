<template>
    <router-view></router-view>
    <DeskAll/>

</template>

<script>
import DeskAll from '../components/DeskAll.vue'
export default {
    components: {
        DeskAll
    }
    
}

</script>