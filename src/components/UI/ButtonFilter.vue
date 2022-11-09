<template>
   <button
      class="py-[15px] px-[40px] rounded-[30px] duration-500"
      :class="{
         'hover:bg-[#282828] hover:text-white': !innerWidth,
         'bg-myblack text-white': filter.selected && !innerWidth,
         'bg-white text-myblack': filter.selected && innerWidth,
         'bg-mysilver text-white': !filter.selected && innerWidth,
      }">
      {{ filter.title }}
   </button>
</template>

<script>
   import { mapGetters } from "vuex";
   export default {
      name: "button-filter",
      props: {
         filter: Object,
      },
      computed: {
         ...mapGetters("catalog", ["innerWidth"]),
      },
   };
</script>

<style></style>
