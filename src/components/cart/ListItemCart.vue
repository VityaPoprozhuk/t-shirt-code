<template>
   <div
      class="flex flex-col gap-[20px] min-h-full md:min-h-[300px] mb-[20px] w-full">
      <cart-item v-for="(item, i) in cart" :key="i" :item="item" />
   </div>
</template>

<script>
   import CartItem from "./CartItem.vue";
   import { mapGetters } from "vuex";

   export default {
      components: {
         CartItem,
      },
      computed: {
         ...mapGetters("cart", ["cart"]),
      },
   };
</script>

<style></style>
