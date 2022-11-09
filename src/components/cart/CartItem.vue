<template>
   <div
      class="flex items-center flex-col justify-between border-b-2 pb-[10px] border-mysilver md:flex-row md:border-none md:p-0">
      <div
         class="flex md:mb-0 mb-[20px] items-center sm:gap-[30px] gap-[15px]">
         <img
            class="w-[80px] h-[80px]"
            :src="require(`../../assets/${item.img}.png`)"
            alt="" />
         <div class="flex flex-col md:min-w-[280px] text-start">
            <span class="text-c text-myblack mb-[6px] font-extrabold"
               >"{{ item.title }}"</span
            >
            <span class="text-[18px] text-mysilver">{{
               getTitle
            }}</span>
         </div>
      </div>

      <div class="flex">
         <div class="flex justify-center items-center">
            <btn-dectement @click="decrementCnt(item)" />
            <span
               class="text-[22px] w-[40px] font-bold mx-[20px] md:m-0"
               >{{ item.cnt }}</span
            >
            <btn-increment @click="incrementCnt(item)" />
         </div>
         <span
            class="flex justify-center font-bold items-center w-[70px] mx-[20px] sm:mx-[80px] md:mx-[50px] lg:mx-[90px] xl:mx-[95px] text-[22px]"
            >{{ item.price }} $</span
         >
         <button>
            <img
               @click="
                  deleteItemFromCart({
                     id: item.id,
                     material: item.material,
                     size: item.size,
                  })
               "
               class="w-[32px] h-[32px]"
               src="@/assets/deleteItem.svg"
               alt="delete" />
         </button>
      </div>
   </div>
</template>

<script>
   import { mapActions } from "vuex";
   import BtnDectement from "./BtnDectement.vue";
   import BtnIncrement from "./BtnIncrement.vue";

   export default {
      components: {
         BtnDectement,
         BtnIncrement,
      },
      props: {
         item: {
            type: Object,
            required: true,
         },
      },
      methods: {
         ...mapActions("cart", [
            "incrementCnt",
            "decrementCnt",
            "deleteItemFromCart",
         ]),
      },
      computed: {
         getTitle() {
            return `Material ${this.item.material}, ${this.item.size}`;
         },
      },
   };
</script>

<style></style>
