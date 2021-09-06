<template>
  <div>
    <Nav-bar>
      <template v-slot:default>大清图书</template>
    </Nav-bar>

    <div class="banners">
      <img src="@/assets/images/2.jpg" alt="">
    </div>

    <Recommend :recommend="recommends"></Recommend>

    <tab-control @tabClick="tabClick" :titles="['畅销','新书','精选',]"></tab-control>

    <goods-list></goods-list>
  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Recommend from "@/views/home/ChildComps/Recommend";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {onMounted,ref,reactive} from "vue";
import {getHomeAllData,getHomeGoods} from 'network/home'





export default {
  name: "Home",
  components:{
    NavBar,
    Recommend,
    TabControl,
    GoodsList
  },
  setup(){
    const recommends = ref([]);
    let temid = ref(0)

    //商品列表数据模型
    const goods = reactive({
      sales:{page:0,list:[]},
      new:{page:0,list:[]},
      recommend:{page:0,list:[]},
    })

    onMounted(()=>{
      getHomeAllData().then(res=>{
        recommends.value = res.goods.data;
      })

      getHomeGoods('sales').then(res=>{
        goods.sales.list = res.goods.data
      })
      getHomeGoods('new').then(res=>{
        goods.new.list = res.goods.data
      })
      getHomeGoods('recommend').then(res=>{
        goods.recommend.list = res.goods.data
      })
      console.log(goods);
    })

    const tabClick = (index) =>{
      temid.value = index
    }
    return {
      recommends,
      tabClick,
      temid,
      goods
    }
  },
}
</script>

<style scoped>
.banners img{
  width: 100%;
  height: auto;
  margin-top: 45px;
}
</style>