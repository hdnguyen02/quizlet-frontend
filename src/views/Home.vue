<template>
    Trang home nhé {{userStore.getIsAuthenticated }}
</template>

<script>
    import { mapStores } from 'pinia'
    import {useUserStore} from '../stores/useUserStore.js'


    export default {
        computed: {
            ...mapStores (useUserStore),
        }
    }

    

</script>
