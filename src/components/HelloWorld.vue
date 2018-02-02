<template>
  <div class="hello">
    <Home v-if="homeData !== null" :hd=homeData></Home>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Home from './home/index'

export default {
  name: 'HelloWorld',
  components: {
    Home
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    homeData () {
      return this.$store.state.home.homeData
    }
    // ...mapGetters({
    //   homeData: 'homeData',
    // }),
  },
  created () {
    this.$store.dispatch('getHomeData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
