<template>
  <div class="hello">
    <div class="home">
      <div class="homeLeft">
        <div class="left_top">
          <div class="left-top_wrapper">
            <img class="left_top_image" v-bind:src="leftData[0].landscape_poster_s" />
            <div></div>
          </div>
        </div>
        <div class="left_bottom">
          <div class="left_bottom_wrapper one">
           <img class="left_bottom_image" v-bind:src="leftData[1].landscape_poster_s" />
          </div>
          <div class="left_bottom_wrapper two">
           <img class="left_bottom_image" v-bind:src="leftData[2].landscape_poster_s" />
          </div>
        </div>
      </div>
      <div class="homeRight">
          <template v-for="(rd, i) in rightData">
            <ul v-if="i < (rightData.length-1)/2" class="rightItem" v-bind:key="i">
              <li class="rightItem_wrapper">
                <img v-bind:src="rightData[2*i].portrait_poster_m" />
              </li>
              <li class="rightItem_wrapper">
                <img v-bind:src="rightData[2*i+1].portrait_poster_m" />
              </li>
            </ul>
          </template>
      </div>
    </div>  
    <ul class="homeNav">
      <li v-for="(nav,index) in hd.genre" v-bind:key="index">{{nav.name}}</li>
    </ul>
  </div>
</template>

<script>
import Kb from '../../utils/kb'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your home page'
    }
  },
  props: ['hd'],
  created () {
    let hkb = new Kb('home')
  },
  computed: {
    leftData () {
      return this.$props.hd.data[0].carousel_episodes.slice(0, 3)
    },
    rightData () {
      let propData = this.$props.hd.data[0].carousel_episodes
      return propData.slice(3, propData.length - 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
px2rem(px) 
  (px/100)rem

h1, h2 
  font-weight: normal;
ul 
  list-style-type: none;
  display: inline-block;
  margin-left: px2rem(15);
  padding: 0;
a 
  color: #42b983;

.home
  margin-top px2rem(100)
  margin-left px2rem(100)
  overflow hidden
.homeLeft 
  width: px2rem(907)
  float: left
  .left_top
    width: px2rem(907);
    height: px2rem(510);

.left_top_image
.left_bottom_image
  width: 100%;
  height: 100%;

.left_bottom
  width: px2rem(907);
  height: px2rem(246);
  margin-top: px2rem(15);
  .one  
    float: left;
  .two
    float: right;
    margin-left: px2rem(10)
.left_bottom_wrapper
  width: px2rem(446);
  height: px2rem(246)
.homeRight 
  white-space: nowrap;
.rightItem
  li:first-of-type 
    margin-bottom: px2rem(15)
.rightItem_wrapper
  width: px2rem(270);
  height: px2rem(378);
  img
    width 100%;
    height 100%;

.homeNav
  margin-left px2rem(100)
  li
    display inline-block
    font-size 24px
    margin-left px2rem(30)
</style>
