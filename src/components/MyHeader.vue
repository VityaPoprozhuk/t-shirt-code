<template>
   <header
      class="md:mb-[45px] mb-[10px] top-0 py-[10px] bg-white z-10"
      :class="{
         static: $route.path !== '/',
         sticky: $route.path === '/',
      }">
      <nav class="flex justify-between">
         <router-link to="/" class="text-start cursor-pointer">
            <span
               class="sm:text-d text-c text-logo1 uppercase font-extrabold leading-7"
               >all
            </span>
            <span
               class="sm:text-d text-c text-logo2 uppercase font-extrabold leading-7">
               T-Shirt</span
            >
            <p class="text-b text-logoP">
               order a t-shirt with <br class="s:hidden inline" />
               a design
            </p>
         </router-link>
         <cart-header />
      </nav>
   </header>
</template>

<script>
   import CartHeader from "./CartHeader.vue";
   export default {
      components: {
         CartHeader,
      },
      name: "my-header",
   };
</script>

<style></style>
