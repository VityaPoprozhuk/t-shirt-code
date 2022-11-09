<template>
   <div
      class="flex flex-wrap justify-center md:gap-[30px] gap-[20px]">
      <template v-if="products.length">
         <card-item
            v-for="(item, i) in products"
            :key="item.id"
            :item="item"
            :border="innerWidth"
            :class="{ 'border-none': i === products.length - 1 }" />
      </template>
      <div v-else>
         <h1>There are no products :(</h1>
      </div>
   </div>
</template>

<script>
   import { mapGetters } from "vuex";

   import CardItem from "./CardItem.vue";
   export default {
      components: {
         CardItem,
      },
      name: "list-cards",
      computed: {
         ...mapGetters("catalog", ["innerWidth", "products"]),
      },
   };
</script>

<style></style>
