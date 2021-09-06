<template>
  <div>
    <Nav-bar>
      <template v-slot:default>商品详情:{{id}}</template>
    </Nav-bar>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Detail",
  components:{NavBar},

  setup(){
    const route = useRoute()

    let id = ref(0)
    id.value = route.query.id
    return {
      id
    }
  }
}
</script>

<style scoped>

</style>