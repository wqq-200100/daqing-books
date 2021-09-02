<template>
  <div class="nav-bar">
    <div class="left" @click="goback"><slot name="left">
      <img src="@/assets/images/Left.png" alt="">
    </slot></div>
    <div class="content"><slot></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "NavBar",

  setup(){
    const router = useRouter()

    const goback =()=>{
      router.go(-1);
    }
    return {
      goback
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  background-color: var(--color-high-text);
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
  height: 45px;
  line-height: 45px;
  text-align: center;
  box-shadow: 0 2px 0 rgba(100,100,100,.2);
}
  .left,.right {
    width: 60px;
  }
  .left img{
    width: 45px;
    padding: 12px;
  }
  .content{
    flex: 1;
  }
</style>