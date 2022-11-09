<template>
   <div class="relative text-left mb-[40px]">
      <span
         v-if="showFilter"
         class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-myblack opacity-75 z-[24]"
         @click="showFilter = false"></span>
      <button
         @click="showFilter = !showFilter"
         v-if="innerWidth"
         class="bg-cartPageButton inline-block text-mysilver duration-500 border-mysilver border-2 px-[40px] py-[8px] rounded-[30px] relative"
         :class="{
            'hover:bg-mysilver hover:text-myblack': !innerWidth,
         }">
         Filters
      </button>
      <ul
         v-if="showFilter || !innerWidth"
         class="flex gap-[10px]"
         :class="{
            'absolute  h[300px] w-[200px]  flex-col gap-[10px] text-white z-[25] mt-3 rounded-[30px]':
               innerWidth,
         }">
         <button-filter
            v-for="filter in nameFilter"
            @click="filterClick(filter.title)"
            :key="filter.title"
            :filter="filter" />
      </ul>
   </div>
</template>

<script>
   import { mapGetters, mapActions } from "vuex";

   import ButtonFilter from "../UI/ButtonFilter.vue";

   export default {
      components: {
         ButtonFilter,
      },
      data() {
         return {
            showFilter: false,
         };
      },
      computed: {
         ...mapGetters("catalog", [
            "nameFilter",
            "innerWidth",
            "realWidthWindow",
         ]),
      },
      methods: {
         ...mapActions("catalog", ["filterItems"]),
         filterClick(title) {
            this.showFilter = false;
            this.filterItems(title);
         },
      },
      watch: {
         realWidthWindow() {
            this.showFilter = false
         },
      },
   };
</script>
