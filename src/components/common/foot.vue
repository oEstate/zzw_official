<template>
    <div class="foot">
      <div class="hidden-xs">
        <div class="foot-info1">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-12 foot-item">
                <div class="zzw-simple-info">
                  <div class="phone-info">
                    <a href="javascript:;" >010-62980199/010-62988429<br>/010-62984189</a>
                    <p>{{$t('nav.jobTime')}}</p>
                  </div>
                  <div class="express-info">
                    <p :title="$t('nav.tip_1')">{{$t('nav.tip_1')}}</p>
                    <p :title="$t('nav.tip_1')">{{$t('nav.tip_2')}}</p>
                    <p :title="$t('nav.tip_1')">{{$t('nav.tip_3')}}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-xs-12">
                <div class="row">
                  <div class="col-md-4 col-xs-6">
                    <p class="foot-info-title">{{$t('nav.zfzs_bottom')}}</p>
                    <ul class="info-list">
                      <li class="one-line" :title="$t('nav.zfzs_bottom_1')">{{$t('nav.zfzs_bottom_1')}}</li>
                      <li class="one-line" :title="$t('nav.zfzs_bottom_2')">{{$t('nav.zfzs_bottom_2')}}</li>
                      <li class="one-line" :title="$t('nav.zfzs_bottom_3')">{{$t('nav.zfzs_bottom_3')}}</li>
                      <li class="one-line" :title="$t('nav.zfzs_bottom_4')">{{$t('nav.zfzs_bottom_4')}}</li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-xs-6">
                    <p class="foot-info-title">{{$t('nav.zjzzw')}}</p>
                    <ul class="info-list">
                      <li class="one-line" :title="$t('nav.zjzzw_1')">{{$t('nav.zjzzw_1')}}</li>
                      <li class="one-line" :title="$t('nav.zjzzw_2')">{{$t('nav.zjzzw_2')}}</li>
                      <li class="one-line" :title="$t('nav.zjzzw_3')">{{$t('nav.zjzzw_3')}}</li>
                      <li class="one-line" :title="$t('nav.zjzzw_4')">{{$t('nav.zjzzw_4')}}</li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-xs-8">
                    <p class="foot-info-title" :title="$t('nav.about_zzw')">{{$t('nav.about_zzw')}}</p>
                    <ul class="info-list code-scan">
                      <li><span>{{$t('nav.wechat')}}</span>
                        <img class="zzw-gzh" src="../../assets/img/home/zzw_wechat.jpeg" alt="">
                      </li>
                      <li>
                        <span>{{$t('nav.download')}}</span>
                        <img class="zzw-gzh" src="../../assets/img/home/zzw_app.jpg">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot-info2 hidden-xs">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <router-link to="/"><img src="../../assets/img/home/logoFoot.png" alt=""></router-link>
                <p class="zzw-copyRight" style="display: inline-block">
                <span>
                  {{$t('nav.bah')}}
                </span>
                  <span class="zzw-copyRight-icon">
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802025863">{{$t('nav.bah_1')}}</a>
                </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="visible-xs">
        <div class="foot-phone">
          <div class="zzw-desc">
            <div class="zzw-logo">
              <img src="../../assets/img/home/logoFoot.png" alt="">
            </div>
            <div class="zzw-desc-list">
              <p>政府招商引资的新引擎</p>
              <p>企业转型升级的新动能</p>
              <p>人才创业就业的新助手</p>
            </div>
          </div>
          <div class="zzw-info-list">
            <span class="title">
              政府招商&nbsp:
            </span>
            <p class="info">
              政府招商综合解决方案，营商环境评估，<br>
              智慧园区综合解决方案，委托招商
            </p>
          </div>
          <div class="zzw-info-list zzw-info-list2">
            <span class="title">
              走进智招网&nbsp:
            </span>
            <p class="info">
              关于智招网   隐私条款  用户协议  联系我们
            </p>
          </div>
          <div class="hotLine">
            <a href="tel:010-6298-4189">咨询热线：010-6298-4189</a>
          </div>
          <div class="contact-zzw">
            <div class="contact-type1">
              <p>官网公众号</p>
              <div class="contact-img">
                <img src="../../assets/img/home/zzw_wechat.jpeg" alt="">
              </div>
            </div>
            <div class="contact-type1">
              <p>下载APP</p>
              <div class="contact-img">
                <img src="../../assets/img/home/zzw_app.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "foot.vue"
    }
</script>

<style scoped lang="scss">
  .zzw-copyRight-icon{
    a{
      color:#fff;
      display: inline-block;
      position:relative;
      &:before{
        content:'';
        width:20px;
        height:20px;
        display: inline-block;
        background: url('../../assets/img/home/police..png') 0 0 no-repeat;
        background-size: 100%;
        position:absolute;
        top:50%;
        transform: translateY(-50%);
        left:-25px;
      }
    }
  }
  .one-line {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .foot{
    background:#474e53;
    color:#fff;
    font-size:14px;
    text-align: left;
  }
  .express-info{
    line-height: 24px;
    letter-spacing: 1px;
    padding-left:70px;
    p {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .phone-info{
    padding-left:70px;
    text-align: left;
    margin-bottom: 25px;
    a{
      color:#fff;
    }
    &:before{
      content:'';
      position:absolute;;
      display: inline-block;
      width:52px;
      height:52px;
      top:0;
      left:18px;
      background: url('../../assets/img/home/phone-foot.png') 0 0 no-repeat;
      background-size: 100%;
    }
  }
  .foot-item{
    height:160px;
    border-right:1px solid #8b92a5;
  }
  .foot-info-title{
    padding-left:20px;
    text-align: left;
    margin-bottom:24px;
    font-size:15px;
  }
  .info-list{
    overflow: hidden;
    padding:0 0 0 20px;
    li{
      width:100%;
      float:left;
      line-height: 28px;
    }
  }
  .code-scan{
    padding: 0px!important;
    li{
      width:50%;
    }
  }
  .zzw-gzh{
    margin-top:6px;
    width:86px;
    height:86px;
    display: inline-block;

  }
  .foot-info1{
    padding:40px 0;
    border-bottom: 1px solid #8b92a5
  }
  .foot-info2{
    height:100px;
    line-height: 100px;
  }
  .zzw-copyRight{
    margin-left:36px;
    span:first-child{
      margin-right:60px;
    }
  }
  @media(max-width:768px){
    .contact-zzw{
      text-align: center;
    }
    .contact-type1{
      display: inline-block;
      width:73px;
      margin-right:20px;
      p{
        text-align: center;
        margin-bottom:12px;
      }
      .contact-img{
        width:73px;
        height:73px;
        img{
          width:100%;
          height:100%;
        }
      }
      &:nth-of-type(2){
        margin-right:0;
      }
    }
    .hotLine{
      a{
        color:#fff;
      }
      width:227px;
      height:36px;
      line-height: 36px;
      color:#fff;
      border:1px solid #fff;
      margin:22px auto 33px auto;
      text-align: center;
    }
    .foot-phone{
      background-color: #4a4d52;
      padding:27px 15px;
    }
    .zzw-desc{
      width:100%;
      overflow: hidden;
      .zzw-logo{
        width: 45%;
        float:left;
        margin-top:27px;
      }
      .zzw-desc-list{
        width: 55%;
        float:left;
        padding-left:20px;
        p{
          line-height: 30px;
        }
      }
      .zzw-logo{
        height:41px;
        border-right:2px solid #656363;
        text-align: center;
        img{
          width:100px;
          display: inline-block;
          height: 100%;

        }
      }
    }
    .zzw-info-list{
      margin-top:25px;
      position:relative;
      .title{
        width:94px;
        padding-right:7px;
        text-align: right;
        color:#a7a3a3;
        position:absolute;
        top:0;
        left:0;
      }
      .info{
        width:100%;
        padding-left:94px;
        color:#fff;
      }
    }
    .zzw-info-list2{
      margin-top:20px;
      padding-bottom: 20px;
      border-bottom:1px solid #656363;
    }
    .express-info {
      padding-left:60px;
    }
      .zzw-simple-info{
      padding-left:0;
    }
    .phone-info{
      padding-left:60px;
      &:before{
        left:12px;
      }
    }
    .info-list{
      padding:0;
    }
    .foot-info-title{
      padding:0;
    }
  }

</style>
