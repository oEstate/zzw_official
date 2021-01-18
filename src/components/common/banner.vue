<template>
    <div class="head-wrapper" >
      <div class="nav-wrapper">
        <app-head></app-head>
        <div class="taWrapper">
          <slot name="tradeAndArea">

          </slot>
        </div>
      </div>
      <div class="banner-wrapper">
        <slot name="banner">

        </slot>
      </div>
<!--      <div class=""></div>-->

    </div>
</template>

<script>
  import appHead from './head.vue'
    export default {
      name: "banner.vue",
      data(){
        return{

        }
      },
      components:{appHead}
    }
</script>
<style>

</style>
<style scoped lang="scss">
  .taWrapper{
    width:100%;
    /*margin-top:51px;*/
  }
  .head-wrapper{
    width:100%;
  }
  .nav-wrapper{
    width:100%;
  }
  /*.banner-wrapper {*/
  /*  height:440px;*/
  /*  background-size: cover;*/
  /*}*/
  /*@media(max-width: 768px){*/
  /*  .banner-wrapper{*/
  /*    height:240px;*/
  /*  }*/
  /*}*/

</style>
