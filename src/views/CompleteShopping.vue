<script >

</script>

<template>
  <main class="main">
    <div>
      <h1 class="mb-3 text-3xl font-bold">完成購買</h1>
    </div>
    <div class="mb-6 px-5">
      <div class="grid grid-cols-4 gap-4 border-y py-2 font-bold">
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">價錢</div>
        <div class="text-center">數量</div>
      </div>
      <div class="grid grid-cols-4 gap-4 py-2 border-b">
        <div class="flex justify-center"><img src="https://dummyimage.com/300x300" class="w-[100px] h-[100px]"></div>
        <div class="flex items-center">abcde</div>
        <div class="flex items-center justify-center">$555</div>
        <div class="flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="mb-6 px-5">
      <div class="grid grid-cols-6 gap-4 py-2 border-y">
        <div class="flex items-center">姓名</div>
        <div class="flex items-center">電話</div>
        <div class="flex items-center">地址</div>
        <div class="flex items-center">付款方式</div>
        <div class="flex items-center">電子信箱</div>
        <div class="flex items-center">運送方式</div>
      </div>
      <div>
        <div class="grid grid-cols-6 gap-4 py-2 border-b h-[80px]">
          <div class="flex items-center">姓名</div>
          <div class="flex items-center">電話</div>
          <div class="flex items-center">地址</div>
          <div class="flex items-center">付款方式</div>
          <div class="flex items-center">電子信箱</div>
          <div class="flex items-center">運送方式</div>
        </div>
      </div>
    </div>
  </main>
  <a href="" class="flex justify-center bg-slate-400 border rounded-md"><span>回首頁</span></a>
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
