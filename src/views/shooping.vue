<script >
export default{
  data(){
    return{
      products:[],
      productsList: 'card',
    }
  },
  mounted(){
    fetch('./json/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
        this.products = data;
        console.log(this.products); 
    }) 

  },
}

</script>

<template>
  <main class="main">
    <div>
      <h1 class="mb-3 text-3xl font-bold">商品列表</h1>
      <div class="flex justify-end">
        <button @click="productsList='card'">
        <span class="material-symbols-outlined">dataset</span>
        </button>
        /
        <button @click="productsList='list'">
        <span class="material-symbols-outlined">list</span>
        </button>
      </div>
    </div>
    <!-- 卡片顯示 -->
    <div class="flex flex-wrap justify-center gap-5" v-if= "productsList == 'card'">
      <div v-for="(products, index) in products" :key="index" class="w-1/6 border rounded-lg flex flex-col">
        <img src="https://dummyimage.com/300x300" class="rounded-t-lg" alt="">
        <div class="pl-3 pt-3 gap-3 flex flex-col h-[200px]">
          <h2>{{ products.name }}</h2>
          <p>{{ products.description }}</p>
          <p>價格:{{ products.price }}</p>
        </div>
        <div class="mb-5">數量: <button class="button-left">-</button><input type="number" class="border w-[80px]"><button class="button-right">+</button></div>
        <button class="bg-yellow-800 rounded-b-lg px-4 py-1">加入購物車</button>
      </div>
    </div>
    
    <!-- 條列顯示 -->
    <div class="mb-6 px-5" v-else-if = "productsList == 'list'">
      <div class="grid grid-cols-6 gap-4 border-y py-2 font-bold">
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">商品描述</div>
        <div class="text-center">價錢</div>
        <div></div>
        <div></div>
      </div>
      <div v-for="(products, index) in products" :key="index" class="grid grid-cols-6 gap-x-3 py-3 border-b">
        <div class="flex justify-center"><img src="https://dummyimage.com/300x300"></div>
        <div class="flex items-center">{{ products.name }}</div>
        <div class="flex items-center justify-center">{{ products.description }}</div>
        <div class="flex items-center justify-center">${{ products.price }}</div>
        <div class="flex items-center justify-center">
          <div class="flex flex-col">
            <div>
              <button class="button-left">-</button>
              <input type="number" class="border w-[80px]">
              <button class="button-right">+</button>
            </div>
            <button class="bg-yellow-800 rounded-full px-4 py-1">加入購物車</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>


<style scoped>
.main{
  @apply  w-full px-5 pt-[10px]
}
.button-left{
  @apply bg-green-800 border rounded-l-lg w-[20px]
}
.button-right{
  @apply bg-green-800 border rounded-r-lg w-[20px]
}
</style>
