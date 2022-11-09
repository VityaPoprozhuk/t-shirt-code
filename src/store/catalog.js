export default {
   namespaced: true,
   state: {
      products: product(),
      innerWidth: window.innerWidth,
      nameFilter: [
         { title: "All", selected: true },
         { title: "Men's", selected: false },
         { title: "Female", selected: false },
         { title: "Childish", selected: false },
         { title: "Accessories", selected: false },
      ],
   },
   getters: {
      products: (state) => state.products,
      innerWidth: (state) => state.innerWidth < 768,
      nameFilter: (state) => state.nameFilter,
      realWidthWindow: (state) => state.innerWidth,
   },
   mutations: {
      selectedMaterial(state, { id, material }) {
         let single = state.products.find((item) => item.id === id);

         single.material = single.material.map((mater) => {
            if (mater.title === material) {
               mater.selected = !mater.selected;
            } else mater.selected = false;
            return mater;
         });
      },
      selectedSize(state, { id, size }) {
         let single = state.products.find((item) => item.id === id);

         single.size = single.size.map((selected) => {
            if (selected.title === size) {
               selected.selected = !selected.selected;
            } else selected.selected = false;
            return selected;
         });
      },
      resetSelected(state) {
         state.product = state.products.map((item) => {
            item.material.map(
               (material) => (material.selected = false)
            );
            item.size.map((size) => (size.selected = false));
            return item;
         });
      },
      changeInnerWidth(state, width) {
         state.innerWidth = width;
      },

      filterItems(state, title) {
         if (title === "All") {
            state.products = product();
         } else {
            state.products = product().filter((item) => item[title]);
         }
         state.nameFilter = state.nameFilter.map((filter) => {
            filter.selected = false;
            if (title === filter.title) filter.selected = true;
            return filter;
         });
      },
   },
   actions: {
      selectedMaterial({ commit }, info) {
         commit("selectedMaterial", info);
      },
      selectedSize({ commit }, info) {
         commit("selectedSize", info);
      },
      resetSelected({ commit }) {
         commit("resetSelected");
      },
      changeInnerWidth({ commit }, width) {
         commit("changeInnerWidth", width);
      },
      filterItems({ commit }, title) {
         commit("filterItems", title);
      },
   },
};

function product() {
   return [
      {
         id: 1,
         title: "Sensei",
         price: 99,
         img: "1",
         "Men's": true,
         Female: false,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: true,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: true, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
      {
         id: 2,
         title: "ROBLOX",
         price: 120,
         img: "2",
         "Men's": false,
         Female: true,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: false,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: false, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
      {
         id: 3,
         title: "ROBLOX",
         price: 89,
         img: "3",
         "Men's": true,
         Female: true,
         Childish: true,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: false,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: false, selected: false },
            { title: "m (46)", rest: false, selected: false },
         ],
      },
      {
         id: 4,
         title: "anime LOVELY EYES",
         price: 95,
         img: "4",
         "Men's": false,
         Female: true,
         Childish: true,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: true,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: false, selected: false },
            { title: "s (44)", rest: false, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
      {
         id: 5,
         title: "NEON GAME LOGO",
         price: 105,
         img: "5",
         "Men's": true,
         Female: true,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: true,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: true, selected: false },
            { title: "m (46)", rest: false, selected: false },
         ],
      },
      {
         id: 6,
         title: "Da Vinci's Cat",
         price: 100,
         img: "6",
         "Men's": true,
         Female: true,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: true,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: true, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
      {
         id: 7,
         title: "FOCUS",
         price: 85,
         img: "7",
         "Men's": true,
         Female: true,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: false,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: true, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
      {
         id: 8,
         title: "Tree of Life",
         price: 100,
         img: "8",
         "Men's": true,
         Female: false,
         Childish: false,
         Accessories: false,
         material: [
            {
               title: "cotton",
               rest: true,
               selected: false,
            },
            {
               title: "synthetics",
               rest: true,
               selected: false,
            },
         ],
         size: [
            { title: "xs (42)", rest: true, selected: false },
            { title: "s (44)", rest: true, selected: false },
            { title: "m (46)", rest: true, selected: false },
         ],
      },
   ];
}
