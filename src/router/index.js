import { createRouter, createWebHistory } from "vue-router";
import Catalog from "@/views/Catalog.vue";
import Cart from "@/views/Cart.vue";
import Error404 from "@/views/Error404.vue";
const routes = [
   {
      path: "/",
      name: "Catalog",
      component: Catalog,
   },
   {
      path: "/cart",
      name: "Cart",
      component: Cart,
   },
   {
      path: "/:any(.*)",
      name: "Error404",
      component: Error404,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
