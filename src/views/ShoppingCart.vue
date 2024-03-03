<script >

</script>

<template>
  <main class="main">
    <div>
      <h1 class="mb-3 text-3xl font-bold">購物車確認</h1>
    </div>
    <div class="mb-6 px-5">
      <div class="grid grid-cols-6 gap-4 border-y py-2 font-bold">
        <div></div>
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">價錢</div>
        <div></div>
      </div>
      <div class="grid grid-cols-6 gap-4 py-2 border-b">
        <div class="flex justify-center"><input type="checkbox"></div>
        <div class="flex justify-center"><img src="https://dummyimage.com/300x300" class="w-[100px] h-[100px]"></div>
        <div class="flex items-center">abcde</div>
        <div class="flex items-center justify-center">$555</div>
        <div class="flex items-center justify-center"><button class="button-left">-</button><input type="number" class="border w-[80px]"><button class="button-right">+</button></div>
      </div>
    </div>
    <div class="flex flex-col items-end mb-1">
      <h2 class="text-2xl font-bold">商品數量:</h2>
      <h2 class="text-2xl font-bold">商品總金額:$</h2>
    </div>
    <div class="flex justify-between">
      <button class="bg-red-800 rounded-md px-4 py-1 w-1] text-white">回上頁繼續購買</button>
      <button class="bg-red-800 rounded-md px-4 py-1 w-1] text-white">確認購買</button>
    </div>
  </main>
</template>


<style scoped>
.main{
  @apply  w-full px-5 pt-[10px]
}
.button-left{
  @apply bg-green-800 border rounded-l-lg w-[40px]
}
.button-right{
  @apply bg-green-800 border rounded-r-lg w-[40px]
}
</style>
