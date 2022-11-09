<template>
   <button
      class="flex rounded-[30px] border-[1px] border-mypink px-[10px] py-[13px] gap-[10px] items-center duration-500"
      :class="{
         'bg-mypink': hover ,
         ' bg-white': !hover ,
      }"
      @mousemove="hover =  !innerWidth"
      @mouseleave="hover = false">
      <svg
         class="w-[12px] h-[12px]"
         width="12"
         height="12"
         viewBox="0 0 12 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            :class="{
               'fill-white': hover ,
               'fill-mypink': !hover ,
            }" />
      </svg>
      <span
         class="font-bold leading-[24px]"
         :class="{
            'text-white ': hover ,
            'text-mypink': !hover,
         }"
         >Add to cart</span
      >
      <span
         v-if="isItemCart"
         class="text-a leading-[16px] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center"
         :class="{
            'bg-[white] text-mypink': hover ,
            ' text-white bg-mypink': !hover ,
         }"
         >{{ quantifyProductToId(id) }}</span
      >
   </button>
</template>

<script>
   import { mapActions, mapGetters } from "vuex";

   export default {
      name: "button-card",
      data() {
         return {
            hover: false,
         };
      },
      props: {
         id: {
            type: Number,
            reqiured: true,
         },
      },
      computed: {
         ...mapGetters("cart", [
            "isItemInCart",
            "quantifyProductToId",
         ]),
         ...mapGetters("catalog", ["innerWidth"]),
         isItemCart() {
            return this.isItemInCart(this.id);
         },
      },
   };
</script>

<style scoped></style>
