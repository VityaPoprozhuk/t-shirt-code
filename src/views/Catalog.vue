<template>
   <section class="flex-col flex">
      <div>
         <filters />
         <select-app />
      </div>
      <list-cards />
   </section>
</template>

<script>
   import Filters from "@/components/catalog/Filters.vue";
   import SelectApp from "@/components/catalog/SelectApp.vue";
   import ListCards from "@/components/catalog/ListCards.vue";

   export default {
      components: {
         Filters,
         ListCards,
         SelectApp,
      },
      name: "catalog",
   };
</script>

<style></style>
