<template>
  <div class="home">
    <!-- <img class="logo" alt="Vue logo" src="../assets/logo.jpeg"> -->
    <HelloWorld msg="Filmes e Desenhos."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.logo {
  border-radius: 50%;
  /* width: 20%; Ajuste conforme necessário */
  /* height: 10%; Ajuste conforme necessário */
  margin-bottom: 10px;
}

</style>