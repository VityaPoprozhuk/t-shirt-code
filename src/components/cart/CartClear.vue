<template>
   <h1 class="text-d mb-[10px] font-bold sm:text-e">
      The basket is empty 👀
   </h1>
   <p class="text-logoP mb-[50px] text-b sm:text-c">
      Most likely, you have not chosen anything.
      <br />To order, go to the main page.
   </p>
   <img
      class="sm:w-[250px] sm:h-[200px] w-[150px] h-[100px] mb-[74px] mr-[7px]"
      src="@/assets/notCart.png"
      alt="no item" />
   <button>
      <router-link
         to="/"
         class="bg-cartPageButton block text-bgCardBtns bg-[#282828] px-[75px] py-[14px] rounded-[30px]"
         >Go back</router-link
      >
   </button>
</template>

<script>
   export default {
      name: "CartClear",
   };
</script>

<style></style>
