<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend.slice(0,4)" :key="item.id">
      <a href="" @click.prevent="goD(item.id)">
        <img :src="item.cover_url" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: "Recommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  setup(){
    const router = useRouter()

    const goD = (id)=>{
      router.push({path:'/detail',query:{id}})
    }
    return {
      goD
    }
  }
}
</script>

<style scoped lang="scss">
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
  font-size: 12px;
}

.recommend-item{
  flex: 1;
  img{
    width: 70px;
    height: 70px;
    border-bottom: 10px;
  }
}
</style>