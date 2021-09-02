<template>
  <div>
    <Nav-bar>
      <template v-slot:default>分类界面</template>
    </Nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Category",
  components: {NavBar}
}
</script>

<style scoped>

</style>