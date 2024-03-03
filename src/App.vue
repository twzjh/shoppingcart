<script>


</script>

<template>
  <header class="bg-black text-white">
    <div class="wrapper">
      <nav class="h-[40px] flex items-center justify-between px-1">
        <RouterLink to="/shooping" class="text-yellow-500">shooping</RouterLink>
        <RouterLink to="/ShoppingCart">
        <span class="material-symbols-outlined mr-5 flex items-center">shopping_cart</span>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
