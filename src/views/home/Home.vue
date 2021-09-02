<template>
  <div>
    <Nav-bar>
      <template v-slot:default>大清图书</template>
    </Nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components:{NavBar}
}
</script>

<style scoped>

</style>