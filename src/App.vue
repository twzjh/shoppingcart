<script>


</script>

<template>
  <header class="bg-black text-white">
    <div class="wrapper">
      <nav class="flex gap-5 h-[40px] items-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ShoppingCart">購物車</RouterLink>
        <RouterLink to="/ConfirmPurchase">確認購物</RouterLink>
        <RouterLink to="/CompleteShopping">完成購物</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
