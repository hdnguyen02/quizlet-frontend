<template>
    <!-- Main navigation container -->
    <nav
        class="sticky top-0 z-50 flex-no-wrap flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <!-- Hambu  rger button for mobile view -->
            <button
                class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>

            <!-- Collapsible navigation container -->
            <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1" data-te-collapse-item>
                <!-- Logo -->
                <a class="h- w-20 mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    href="#">
                    <img src="https://logos-world.net/wp-content/uploads/2021/03/Quizlet-Logo.png" style="width: 100%"
                        alt="">
                </a>
                <!-- Left navigation links -->
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                    <li class="mb-4 lg:mb-0 lg:pr-2 me-4">
                        <!-- Dashboard link -->
                        <router-link to="/" class="font-medium">
                            Trang chủ
                        </router-link>
                    </li>
                    <!-- Team link -->
                    <li class="mb-4 lg:mb-0 lg:pr-2 me-4">
                        <router-link to="/blog">
                            Blog
                        </router-link>
                    </li>
                    <li v-if="userStore.getIsAuthenticated" class="mb-4 lg:mb-0 lg:pr-2 me-4">
                        <router-link to="/class">
                            Lớp học
                        </router-link>
                    </li>
                    <li v-if="userStore.getIsAuthenticated" class="mb-4 lg:mb-0 lg:pr-2 me-4">
                        <router-link to="/desk">
                            Bộ thẻ
                        </router-link>
                    </li>
                    <!-- Projects link -->

                </ul>
            </div>

            <!-- Right elements -->
            <div class="relative flex items-center gap-x-4">
                <!-- Container with two dropdown menus -->

                <!-- Second dropdown container -->

                <!-- * theo trạng thái đăng nhập -->

                <div v-if="!userStore.getIsAuthenticated" class="relative" data-te-dropdown-ref
                    data-te-dropdown-alignment="end">
                    <!-- Second dropdown trigger -->
                    <router-link to="/login" class="text-gray-500 font-medium">Đăng nhập</router-link>
                    <!-- Second dropdown menu -->

                </div>
                <div v-if="!userStore.getIsAuthenticated">
                    <router-link to="/register"
                        class="text-black inline-block rounded px-6 py-2.5 font-medium shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        style="background-color: #FFCD1F">
                        Đăng ký
                    </router-link>
                </div>

                <div>

                    <div v-if="userStore.getIsAuthenticated" class="flex gap-3">
                        <div class="relative ml-3">
                            <div @click="toggleAdd" class="rounded-3xl w-8 h-8 bg-[#4255FF] flex items-center justify-center font-bold text-white">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div :class="{ hidden: isCloseAdd }" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <router-link @click="isCloseAdd = true" to="/desk/add" class="block px-4 py-2 text-sm text-gray-700" tabindex="-1">Bộ thẻ</router-link>
                                <router-link @click="isCloseAdd = true" to="/class/create" class="block px-4 py-2 text-sm text-gray-700" tabindex="-1">Lớp</router-link>
                        
                            </div>

                        </div>
                        <div @click="toggleDropdownAvt" class="relative ml-3">
                            <div class="flex gap-x-2">
                                <div class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </div>
                                <div class="flex items-center"><i class="fa-solid fa-caret-down"></i></div>
                            </div>


                            <div :class="{ hidden: isCloseDropdownAvt }"
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Your Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Settings</a>
                                <router-link @click="logouthandler" to="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Sign out</router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '../stores/useUserStore.js'
import { useTopicStore } from '../stores/useTopicStore.js'

export default {
    computed: {
        ...mapStores(useUserStore,useTopicStore),
    },
    data() {
        return {
            isCloseDropdownAvt: true,
            isCloseAdd: true       
        }
    },
    methods: {
        toggleDropdownAvt() {
            this.isCloseDropdownAvt = !this.isCloseDropdownAvt
        },
        toggleAdd() {
            this.isCloseAdd = !this.isCloseAdd 
        },
        logouthandler() {
            localStorage.removeItem("token")
            // cập nhập lại trạng thái 
            this.userStore.changeAuthenticate() // thay đổi 
            // this.$axios.get('/api/v1/logout')
        }
    }, 
    created(){
        this.topicStore.fetchTopics()
    }


}
</script>