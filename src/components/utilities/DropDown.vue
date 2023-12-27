<template>

    <div class="dropdown">
        <span class="dropdown-btn">
            <slot name="title"></slot>
            <img src="../../assets/image/dropdown.png">
        </span>
   
        <div class="dropdown-content">
         <slot name="content"></slot>
        </div>  
      </div>

</template>

<style scoped>






</style>
