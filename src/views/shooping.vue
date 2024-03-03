<script >
export default{
  data(){
    return{
      products:[],
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
      <div class="flex justify-end"><button>卡片顯示</button>/<button>條列顯示</button></div>
    </div>
    <div class="flex flex-wrap justify-center gap-5">
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
