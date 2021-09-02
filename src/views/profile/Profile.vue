<template>
  <div>
    <Nav-bar>
      <template v-slot:default>个人中心</template>
    </Nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Profile",
  components:{NavBar}
}
</script>

<style scoped>

</style>