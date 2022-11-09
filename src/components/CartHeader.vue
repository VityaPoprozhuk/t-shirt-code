<template>
   <button>
      <router-link
         to="/cart"
         v-if="$route.path !== '/cart'"
         class="bg-mypink flex gap-[10px] cursor-pointer justify-center items-center px-[15px] py-[13px] sm:px-[23px] rounded-[30px] font-bold">
         <span class="text-white">{{ totalCart }} $</span>
         <span class="w-[2px] h-[16px] bg-logo2"></span>
         <span class="text-white">
            <img
               class="inline h-[16px] mb-[4px]"
               src="../assets/cart.svg" />
            {{ quantifyProd }}</span
         >
      </router-link>
   </button>
</template>

<script>
   import { mapGetters } from "vuex";

   export default {
      name: "cart-header",

      computed: {
         ...mapGetters("cart", ["totalCart", "quantifyProd"]),
      },
   };
</script>

<style></style>
