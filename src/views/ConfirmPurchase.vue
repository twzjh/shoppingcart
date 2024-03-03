<script >

</script>

<template>
  <main class="main">
    <div>
      <h1 class="mb-3 text-3xl font-bold">購買確認及填寫資訊</h1>
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
    <form>
      <div class="mb-6 px-5">
        <label for="name" class="block mb-2 font-bold text-lg">姓名</label>
        <input id="name" type="text" class="w-full border rounded-md py-2 px-4">
      </div>
      <div class="mb-6 px-5">
        <label for="phone" class="block mb-2 font-bold text-lg">電話</label>
        <input id="phone" type="text" class="w-full border rounded-md py-2 px-4">
      </div>
      <div class="mb-6 px-5">
        <label for="address" class="block mb-2 font-bold text-lg">地址</label>
        <input id="address" type="text" class="w-full border rounded-md py-2 px-4">
      </div>
      <div class="mb-6 px-5">
        <label for="email" class="block mb-2 font-bold text-lg">電子信箱</label>
        <input id="email" type="email" class="w-full border rounded-md py-2 px-4">
      </div>
      <div class="mb-6 px-5">
        <label for="payChoice" class="block mb-2 font-bold text-lg">付款方式</label>
        <div class="flex gap-5">
          <div>
            <input type="radio" for="payChoice1" class="mr-2">
            <label for="payChoice1">信用卡</label> 
          </div>
          <div>
            <input type="radio" for="payChoice2" class="mr-2">
            <label for="">貨到付款</label>
          </div>
        </div>
      </div>
      <div class="mb-6 px-5">
        <label for="tranSport" class="block mb-2 font-bold text-lg">運送方式</label>
        <div class="flex gap-5">
          <div>
            <input type="radio" for="tranSport1" class="mr-2">
            <label for="payChoice1">宅配</label> 
          </div>
          <div>
            <input type="radio" for="tranSport2" class="mr-2">
            <label for="">超商取貨</label>
          </div>
        </div>
      </div>
    </form>
    <div class="flex flex-col items-end mb-1">
      <h2 class="text-2xl font-bold">商品數量:</h2>
      <h2 class="text-2xl font-bold">商品總金額:$</h2>
    </div>
    <div class="flex justify-between">
      <button class="bg-red-800 rounded-md px-4 py-1 w-1] text-white">回上頁繼續加購</button>
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
