<template>
   <main @touchstart="touchStart" @touchend="touchEnd">
      <my-header />
      <router-view />
   </main>
</template>

<script>
   import MyHeader from "./components/MyHeader.vue";
   import { mapActions } from "vuex";

   export default {
      components: {
         MyHeader,
      },
      data() {
         return {
            touchX: null,
            touchY: null,
         };
      },
      methods: {
         ...mapActions("catalog", [
            "resetSelected",
            "changeInnerWidth",
         ]),

         // change route in swipe left and right
         touchStart(touchEvent) {
            //first touch
            if (touchEvent.changedTouches.length === 1) {
               this.touchX = touchEvent.changedTouches[0].clientX;
               this.touchY = touchEvent.changedTouches[0].clientY;
            }
         },
         touchEnd(touchEvent) {
            if (touchEvent.changedTouches.length === 1) {
               const posXEnd = touchEvent.changedTouches[0].clientX;
               const posYEnd = touchEvent.changedTouches[0].clientY;

               if (
                  this.touchY - posYEnd < 50 &&
                  this.touchY - posYEnd > -50
               ) {
                  const router = this.$route.path === "/";
                  if (this.touchX - posXEnd < -100 && !router) {
                     // swipe right
                     this.$router.push("/");
                  } else if (this.touchX - posXEnd > 100 && router) {
                     // swipe left
                     this.$router.push("/cart");
                  }
               }
            }
         },
      },
      watch: {
         $route() {
            this.resetSelected();
            window.scroll(0, 0);
         },
      },
      mounted() {
         window.addEventListener("resize", (e) =>
            this.changeInnerWidth(e.target.innerWidth)
         );
      },
      unmounted() {
         window.removeEventListener("resize", (e) =>
            this.changeInnerWidth(e.target.innerWidth)
         );
      },
   };
</script>

<style>
   @font-face {
      font-family: "Proxima Nova";
      src: url("./assets/font.otf");
   }

   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   #app {
      font-family: "Proxima Nova";
      font-weight: 500;
      text-align: center;
      color: #2c3e50;
   }

   nav a.router-link-exact-active {
      color: #42b983;
   }
</style>
