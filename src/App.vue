<template>
  <router-view/>

  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon"><i class="iconfont icon-shouye"></i></div>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/category">
      <div class="icon"><i class="iconfont icon-leimupinleifenleileibie"></i></div>
      <div>分类</div>
    </router-link>
    <router-link class="tab-bar-item" to="/shopcart">
      <div class="icon"><i class="iconfont icon-gouwuche"></i></div>
      <div>购物车</div>
    </router-link>
    <router-link class="tab-bar-item" to="/profile">
      <div class="icon"><i class="iconfont icon-gerenzhongxin-xuanzhongxin"></i></div>
      <div>个人中心</div>
    </router-link>
  </div>

</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.1);

  a {
    color:var(--color-text);

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);
  }

  .tab-bar-item .icon {
    height: 24px;
    width: 24px;
    margin-top: 5px;
    vertical-align: middle;
    display: inline-block;
  }
}


</style>
