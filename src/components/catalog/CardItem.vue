<template>
   <div
      class="sm:w-[260px] w-[330px] flex flex-col justify-stretch drop-shadow-lg"
      :class="{ 'border-b-2 border-myblack pb-[10px]': border }">
      <img
         class="sm:h-[260px] h-[330px]"
         :src="require(`../../assets/${item.img}.png`)"
         alt="product" />
      <h2 class="text-c text-myblack mb-[22px] mt-[11px]">
         {{ item.title }}
      </h2>
      <div
         class="py-[7px] px-[5px] bg-bgCardBtns rounded-[10px] mb-[17px]">
         <div class="flex justify-around">
            <button
               v-for="material in item.material"
               class="transition-all duration-500 text-a text-myblack w-[40%] bg-white py-[10px] rounded-[5px]"
               :class="{
                  'bg-[transparent]': !material.rest,
                  'hover:bg-logo2': material.rest && !innerWidth,
                  'bg-logoP': material.selected,
               }"
               :disabled="!material.rest"
               :key="material"
               @click="
                  selectedMaterial({
                     id: item.id,
                     material: material.title,
                  })
               ">
               {{ material.title }}
            </button>
         </div>
         <div class="flex justify-around mt-2">
            <button
               class="duration-500 text-a text-myblack w-[30%] bg-white py-[10px] rounded-[5px]"
               :class="{
                  'bg-[transparent]': !size.rest,
                  'hover:bg-logo2': size.rest && !innerWidth,
                  'bg-logoP': size.selected,
               }"
               v-for="size in item.size"
               :disabled="!size.rest"
               :key="size"
               @click="
                  selectedSize({
                     id: item.id,
                     size: size.title,
                  })
               ">
               {{ size.title }}
            </button>
         </div>
      </div>
      <div class="flex justify-between items-center">
         <span class="font-bold text-[18px] text-myblack"
            >from {{ item.price }}$</span
         >
         <button-card :id="item.id" @click="addToCart(item)" />
      </div>
   </div>
</template>

<script>
   import { mapActions, mapGetters } from "vuex";
   export default {
      props: {
         item: Object,
         border: Boolean,
      },
      data() {
         return {};
      },
      computed: {
         ...mapGetters("catalog", ["catalog", "innerWidth"]),
         ...mapGetters("cart", ["cart"]),
      },
      methods: {
         ...mapActions("catalog", [
            "selectedMaterial",
            "selectedSize",
         ]),
         ...mapActions("cart", ["addToCart"]),
      },
   };
</script>

<style></style>
