import { createStore } from "vuex";

import catalog from "./catalog";
import cart from "./cart";

const store = {
   modules: {
      catalog,
      cart,
   },
   strict: process.env.NODE_ENV !== "production",
};

export default createStore(store);
