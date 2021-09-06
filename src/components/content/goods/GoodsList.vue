<template>
  <div class="goods">
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "goodsList",
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap; /*自动换行*/
  justify-content: space-around; /*四周环绕*/
  padding: 5px;
}
</style>