export default {
   namespaced: true,
   state: {
      cart: [
         {
            id: 1,
            title: "Sensei",
            price: 100,
            img: "1",
            material: "cotton",
            size: "xs (42)",
            cnt: 1,
         },
      ],
   },
   getters: {
      cart: (state) => state.cart,
      isItemInCart: (state) => (id) => {
         return state.cart.find((item) => item.id === id);
      },

      func: (state) => (info) => {
         return state.cart.find((item) => {
            return (
               info.id === item.id &&
               info.material === item.material &&
               info.size === item.size
            );
         });
      },

      typeSelect: (state) => (type) => {
         return type.find((t) => t.selected)?.title;
      },

      totalCart: (state) => {
         return state.cart.reduce(
            (total, item) => total + item.price * item.cnt,
            0
         );
      },

      quantifyProd: (state) => {
         return state.cart.reduce(
            (quantify, item) => quantify + item.cnt,
            0
         );
      },

      quantifyProductToId: (state) => (id) => {
         return state.cart.reduce((acc, item) => {
            if (item.id === id) {
               acc += item.cnt;
            }
            return acc;
         }, 0);
      },
   },
   mutations: {
      addToCart(state, item) {
         state.cart.push({
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.img,
            material: item.material.find((mat) => mat.selected)
               ?.title,
            size: item.size.find((size) => size.selected)?.title,
            cnt: 1,
         });
      },

      incrementCnt(state, info) {
         state.cart = state.cart.map((selected) => {
            if (
               selected.id === info.id &&
               selected.size === info.size &&
               selected.material === info.material
            ) {
               selected.cnt += 1;
            }
            return selected;
         });
      },

      decrementCnt(state, info) {
         state.cart = state.cart.map((selected) => {
            if (
               selected.id === info.id &&
               selected.size === info.size &&
               selected.material === info.material
            ) {
               selected.cnt -= 1;
            }
            return selected;
         });
      },

      deleteItemFromCart(state, info) {
         state.cart = state.cart.filter((item) => {
            return (
               item.id !== info.id ||
               item.material !== info.material ||
               item.size !== info.size
            );
         });
      },
      
      clearCart(state) {
         state.cart = [];
      },
   },
   actions: {
      addToCart({ commit, getters }, info) {
         const size = getters.typeSelect(info.size);
         const material = getters.typeSelect(info.material);

         if (!size || !material) return;

         if (
            getters.func({
               id: info.id,
               material: material,
               size: size,
            })
         ) {
            commit("incrementCnt", {
               id: info.id,
               size: size,
               material: material,
            });
         } else {
            commit("addToCart", info);
         }
      },
      incrementCnt({ commit }, info) {
         commit("incrementCnt", info);
      },
      decrementCnt({ commit }, info) {
         if (info.cnt === 1) {
            commit("deleteItemFromCart", info);
         }
         commit("decrementCnt", info);
      },
      clearCart({ commit }) {
         commit("clearCart");
      },
      deleteItemFromCart({ commit }, info) {
         commit("deleteItemFromCart", info);
      },
   },
};
