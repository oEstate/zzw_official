<template>
  <div class="fixedAside">
    <div class="appDownload hidden-xs">
      移<br>动<br>端<br>下<br>载
    </div>
    <div class="backOldVersion" @click="toBackVersion">
      返<br>回<br>首<br>页
    </div>
  </div>
</template>

<script>
    export default {
      name: "returnOld",
      methods:{
        toBackVersion(){
          this.newWin('http://data.zhizhaowang.cn')
        }
      }
    }
</script>

<style scoped lang="scss">
  .fixedAside{
    position:fixed;
    width:48px;
    right:0;
    bottom:20px;
    margin-top:-79px;
    z-index:10000;
  }
  .appDownload{
    cursor: pointer;
    padding-bottom: 15px;
    width: 48px;
    background-color: #222836;
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-bottom: 13px;
    line-height: 19px;
    padding-top: 42px;
    border: 1px solid #b5b5b5;
    position: relative;
    &:hover{
      &:after{
        left:-154px;
        opacity: 1;
      }
    }
    &:before{
      content: '';
      display: inline-block;
      width:100%;
      height:22px;
      background: url('../../assets/img/home/xiazai-3.png') center center no-repeat;
      background-size: contain;
      position:absolute;
      top:15px;
      left:0;

     }
    &:after{
      content:'';
      display:inline-block;
      width:154px;
      height:154px;
      box-sizing: border-box;
      border:1px solid #b5b5b5;
      background: url('../../assets/img/home/zzw_app.jpg') 0 0 no-repeat;
      background-size: 100%;
      position:absolute;
      z-index: -1;
      top:0;
      left:0;
      opacity: 0;
      transition: all 0.5s ease-in-out;

    }

  }
.backOldVersion{
  cursor: pointer;
  width: 48px;
  color:#333;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 13px;
  line-height: 19px;
  padding-top: 42px;
  border:1px solid #b5b5b5;
  position: relative;
  padding-bottom: 15px;
  &:before{
    content: '';
    display: inline-block;
    width:100%;
    height:22px;
    background: url('../../assets/img/home/return.png') center center no-repeat;
    background-size: contain;
    position:absolute;
    top:15px;
    left:0;
  }
}
  @media(max-width:768px){
  }
</style>
