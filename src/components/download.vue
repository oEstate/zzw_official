<template>
  <div class="do">
    <div class="logo"><img src="../assets/LOGO.png" alt="" /></div>
    <div class="h1">供需优化对接平台</div>
    <div class="h2">地方政府、企业、人才高效对接平台</div>
    <div class="bg">
      <img src="../assets/phone.png" alt="" />
    </div>
    <div class="btns">
      <p class="btn_item" @click="downLoad">立即下载</p>
    </div>
    <div v-if="isWx" class="showS" @click="isWx=false">
      <img src="../assets/wx.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isWx: false,
    };
  },
  methods: {
    downLoad() {
      // 判断是微信浏览器环境
      if (/(MicroMessenger)/i.test(navigator.userAgent)) {
        this.isWx = true;
        return;
      }
      // 判断是ios iPad 环境
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        alert("暂不支持 苹果手机下载");
        return;
      }
      window.open('http://www.zhizhaowang.cn/app/zhizhaowang.apk')
    },
  },
};
</script>
<style scoped>
.logo {
  text-align: left;
}
.logo img {
  height: 80px;
}
.do {
  text-align: center;
  background: #f12a2e;
  height: 100%;
  position: relative;
}
.showS{
  position: absolute;
  background-color: rgba(0, 0, 0, .5);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: right;
}
.showS img{
  width: 60%;
  position: fixed;
  right: 0;

}
.h1 {
  font-size: 30px;
  color: #fff;
}
.h2 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
}
.bg {
  box-sizing: border-box;
  padding: 0 80px;
}
.bg img {
  width: 100%;
}
.btns {
  box-sizing: border-box;
  padding: 40px 80px;
}
.btn_item {
  width: 100%;
  color: #f12a2e;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  display: block;
}

/*包含以下五种的链接*/
a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
  text-decoration: none;
}
/* 获得焦点的时候 鼠标松开时显示的颜色*/
a:focus {
  text-decoration: none;
}

@media screen and (min-width: 720px) {
  .do {
    width: 720px;
    margin: 0 auto;
  }
}
</style>
