<template>
   <section
      class="flex justify-start items-center flex-col mx-[10px] sm:mt-[80px] mt-[20px] md:mx-[20px] lg:mx-[60px] xl:mx-[200px] relative">
      <template v-if="cart.length">
         <div
            class="w-[100%] mb-[30px] flex items-center justify-between">
            <div class="flex items-center font-bold">
               <img
                  class="w-[29px] h-[29px] fill-myblack mr-[17px]"
                  src="@/assets/cartBlack.svg" />
               <h1
                  class="md:text-e leading-[39px] text-d text-myblack">
                  Basket
               </h1>
            </div>
            <button class="flex" @click="clearCart">
               <img
                  class="h-[20px] w-[20px]"
                  src="@/assets/trash.svg"
                  alt="trash" />
               <span class="text-logoP">Empty the trash</span>
            </button>
         </div>
         <list-item-cart />
         <div class="w-full">
            <div
               class="flex justify-between text-myblack text-[22px] sm:mb-[40px] mb-[20px] flex-col items-end sm:flex-row">
               <span>
                  Total product:
                  <span class="font-extrabold"
                     >{{ quantifyProd }} pieces.</span
                  >
               </span>
               <span class="text-textSilver">
                  Order amount:
                  <span class="text-mypink font-bold"
                     >{{ totalCart }} $</span
                  >
               </span>
            </div>
            <div
               class="flex justify-between sm:flex-row flex-col-reverse">
               <button>
                  <router-link
                     to="/"
                     :class="{
                        'hover:bg-mysilver hover:text-myblack':
                           !innerWidth,
                     }"
                     class="bg-cartPageButton inline-block text-mysilver duration-500 border-mysilver border-2 px-[75px] py-[14px] rounded-[30px] relative">
                     <span
                        class="absolute left-[31px] text-[28px] top-[5px] transform flex justify-center items-center"
                        >&lt;</span
                     >
                     Go back
                  </router-link>
               </button>
               <button>
                  <router-link
                     to="/"
                     :class="{ 'hover:bg-logo2': !innerWidth }"
                     class="bg-cartPageButton inline-block text-bgCardBtns sm:mb-0 mb-[20px] bg-mypink px-[75px] py-[14px] rounded-[30px] duration-500"
                     >Pay Now</router-link
                  >
               </button>
            </div>
         </div>
      </template>
      <cart-clear v-else />
   </section>
   <model-order/>
</template>

<script>
   import ListItemCart from "@/components/cart/ListItemCart.vue";
   import { mapGetters, mapActions } from "vuex";
   import CartClear from "@/components/cart/CartClear.vue";
   import ModelOrder from "@/views/ModelOrder.vue";
   export default {
      components: {
         ListItemCart,
         CartClear,
         ModelOrder,
      },
      computed: {
         ...mapGetters("cart", ["cart", "quantifyProd", "totalCart"]),
         ...mapGetters("catalog", ["innerWidth"]),
      },
      methods: {
         ...mapActions("cart", ["clearCart"]),
      },
   };
</script>

<style></style>
