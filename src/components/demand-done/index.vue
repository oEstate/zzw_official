<template>
    <div class="demand-done">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="zs-trouble-box">
        <h3 class="info-title">招商困扰</h3>
        <div class="container zs-trouble-con">
          <div class="row">
            <div class="col-md-12">
              <div class="zs-trouble-imgWrapper">
                <img src="../../assets/img/zs-troubles/troubles.jpg" alt="">
              </div>
              <div class="zs-trouble-list">
                <ul>
                  <li>招商区域竞争加剧，资源获取难度增加</li>
                  <li>园区配套设施完善，不知企业真实诉求</li>
                  <li>项目介绍不够详细，错失优质意向客户</li>
                  <li>企业选址落地困难，政策汇集眼花缭乱</li>
                  <li>招商模式缺乏创新，投入虽大效益甚微</li>
                  <li>产业链条梳理不清，盲目定位不切实际</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
<!--        <div class="zs-trouble-content">-->
<!--          <div class="container">-->
<!--            <div class="row">-->
<!--              <div class="col-md-5">-->
<!--                <ul class="zs-trouble-left">-->
<!--                  <li>招商区域竞争加剧，资源获取难度增加</li>-->
<!--                  <li>园区配套设施完善，不知企业真实诉求</li>-->
<!--                  <li>项目介绍不够详细，错失优质意向客户</li>-->
<!--                </ul>-->
<!--              </div>-->
<!--              <div class="col-md-2">-->
<!--                <div class="zs-trouble-img">-->
<!--                  <img src="../../assets/img/zs-troubles/trouble.jpg" alt="">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-5">-->
<!--                <ul class="zs-trouble-right">-->
<!--                  <li>企业选址落地困难，政策汇集眼花缭乱</li>-->
<!--                  <li>招商模式缺乏创新，投入虽大效益甚微</li>-->
<!--                  <li>产业链条梳理不清，盲目定位不切实际</li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="zzw-data-power">
        <h3 class="info-title">数据力量</h3>
        <p class="info-title-desc">通过借助平台大数据资源，政企双方需求对接成功率高于行业平均水平</p>
        <div class="data-power-box">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-xs-6 zzw-data-power-item" v-for="(item,index) in dataPower" :key="index">
                <div class="data-power-list">
                  <img :src="item.img" class="data-power-img" alt="智招网数据力量">
                  <p class="data-power-desc" v-html="item.desc">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zzw-demand-manage">
        <h3 class="info-title">产品服务功能</h3>
        <div class="demand-manage-box">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-12" v-for="(item,index) in demandList" :key="index">
                <div class="demand-manage-list">
                  <img :src="item.img" alt="需求">
                  <div class="demand-list-con">
                    <h3>{{item.title}}</h3>
                    <p v-html="item.desc"></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="zzw-smart-recommend">
        <h3 class="info-title">智能推荐</h3>
        <p class="recommend-desc">
          打破招商引资信息不对称壁垒，帮助政府与企业实现精准匹配
        </p>
        <div class="smart-recommend-box">
          <ul class="recommend-list">
            <li ><div class="recommend-item1"></div></li>
            <li ><div class="recommend-item2">
              <h3 class="recommend-tile">聚焦项目</h3>
              <p class="recommend-expression">推荐适合当地产业发展的企业<br> 挖掘项目投资力度、企业竞争力<br> 了解企业信息，形成企业画像</p>
            </div></li>
            <li ><div class="recommend-item2">
              <h3 class="recommend-tile">聚焦载体</h3>
              <p class="recommend-expression">深入挖掘投资地产业现状<br> 清晰展现区域全产业链图谱<br> 政策完全解读，匹配投资地</p>
            </div></li>
            <li ><div class="recommend-item3"></div></li>
          </ul>
        </div>
      </div>
<!--      <div class="zzw-service-obj">-->
<!--        <h3 class="info-title">服务案例</h3>-->
<!--        <div class="container service-obj-box">-->
<!--          <div class="row">-->
<!--            <div class="col-md-4" style="text-align: center" v-for="(item,index) in serviceObj" :key="index">-->
<!--              <img class="success-demo-img" :src="item.imgUrl" alt="">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <app-foot></app-foot>
    </div>
</template>

<script>
  import headArea from 'components/common/banner.vue'
  import appFoot from 'components/common/foot'
    export default {
      name: "index",
      components:{headArea,appFoot},
      data(){
        return {
          dataPower:[
            {desc:'200000+ <br>项目数据库',img:require('../../assets/img/zs-troubles/01.png')},
            {desc:'38000+<br> 载体资源库',img:require('../../assets/img/zs-troubles/02.png')},
            {desc:'20000+ <br>细分产品名录',img:require('../../assets/img/zs-troubles/03.png')},
            {desc:'遍及全国<br> 政策详情解析',img:require('../../assets/img/zs-troubles/04.png')},
            {desc:'强大线下<br> 投资/招商团队',img:require('../../assets/img/zs-troubles/05.png')},
            {desc:'精准线上<br> 匹配分析系统',img:require('../../assets/img/zs-troubles/06.png')},
          ],
          demandList:[
            {title:'招商项目',desc:'助力政府/园区快速招商引资<br> 全程解决项目招商难题',img:require('../../assets/img/zs-troubles/demand1.png')},
            {title:'投资意向',desc:'寻找优质投资项目<br> 告别信息孤岛、智能匹配需求',img:require('../../assets/img/zs-troubles/demand2.png')},
            {title:'融资项目',desc:'提供快速融资渠道<br> 精准的信息发布渠道',img:require('../../assets/img/zs-troubles/demand3.png')},
            {title:'找资金 ',desc:'海量资金方项目<br>寻求优质投资合作 ',img:require('../../assets/img/zs-troubles/demand4.png')},
            {title:'项目选址 ',desc:'展示投资环境<br> 筛选最佳投资目的地',img:require('../../assets/img/zs-troubles/demand5.png')},
            {title:'技术服务',desc:' 提供高新科技人才<br> 提供中介个性化服务',img:require('../../assets/img/zs-troubles/demand6.png')},
            {title:'招商局',desc:' 招商局信息汇总<br> 实时一线动态资讯',img:require('../../assets/img/zs-troubles/demand7.png')},
            {title:'园区信息',desc:' 产业园区信息汇总<br> 把握招商产业集群分布',img:require('../../assets/img/zs-troubles/demand8.png')},
            {title:'企业库',desc:' 海量企业信息库<br> 布局全国，多维筛查',img:require('../../assets/img/zs-troubles/demand9.png')},
          ]
        }
      },


    }
</script>

<style scoped lang="scss">
  .zs-trouble-con{
    overflow: hidden;
    margin-top:100px;
    .zs-trouble-imgWrapper,.zs-trouble-list{
      width:50%;
      float:left;
      img{
        max-width: 100%;
      }
      ul{
        background-color: #f8f8f8;
        overflow: hidden;
        padding:60px;
        text-align: center;
        margin-top:60px;
        width:420px;
        li{
          width:100%;
          float:left;
          font-size:16px;
          line-height: 36px;
        }
      }
    }
  }
  .demand-done .bannerArea{
    background: url('../../assets/img/commonImg/xqdj.jpg') center center no-repeat;
    background-size: cover;
  }
  .zs-trouble-box{
    padding:88px 0;
  }
  .info-title{
    font-size:40px;
    color:#3a3939;
  }
  .zs-trouble-content{
    margin-top:52px;
  }
  .zs-trouble-left,.zs-trouble-right{
    width:100%;
    overflow: hidden;
    li{
      width:100%;
      float:left;
      font-size: 16px;
      line-height: 47px;
    }
  }
  .zs-trouble-left{
    text-align:right ;
  }
  .zs-trouble-right{
    text-align: left;
  }
  .zs-trouble-img{
    width:100%;
    margin-top:11px;
    img{
      max-width:100%;

    }
  }
  .zzw-data-power{
    padding:88px 0;
    background-color: #f8f8f8;
  }
  .info-title-desc{
    margin-top:52px;
    font-size:18px ;
    color:#787474;
  }
  .data-power-box{
    margin-top:62px;
  }
  .data-power-img{
    width:82px;
    height:82px;
    display: inline-block;
  }
  .data-power-desc{
    font-size:16px;
    line-height: 28px;
    margin-top:18px;
    color:#787474;
  }
  .demand-manage-list{
    overflow: hidden;
    margin-bottom:72px;
    padding-left:55px;
    img{
      width:72px;
      height:72px;
      float:left;
    }
    .demand-list-con{
      margin-left:10px;
      float:left;
      text-align: left;
      h3{
        font-size:18px;
      }
      p{
        margin-top:10px;
        font-size:14px;
        color:#6a6a6a;
      }
    }

  }
  .zzw-demand-manage{
    padding:85px 0;
  }
  .demand-manage-box{
    margin-top:100px;
  }
  .zzw-smart-recommend{
    padding-top:20px;
    padding-bottom:90px;
  }
  .recommend-desc{
    font-size:18px;
    color:#8e8c8e;
    margin-top:20px;
  }
  .smart-recommend-box{
    width:1063px;
    margin:40px auto 0 auto;
    .recommend-list{
      width:100%;
      overflow: hidden;
      li{
        width:50%;
        height:330px;
        float:left;
      }
      .recommend-item1,.recommend-item2,.recommend-item3{
        width:100%;
        height:100%;
        overflow: hidden;
        text-align: left;
        padding:80px 50px;
      }
      .recommend-item1{
        background: url('../../assets/img/zs-troubles/recommend1.png');
        background-size: cover;
      }
      .recommend-item2{
        background: url('../../assets/img/zs-troubles/recommend2.png');
        background-size: cover;
      }
      .recommend-item2{
        background: url('../../assets/img/zs-troubles/recommend2.png');
        background-size: cover;
      }
      .recommend-item3{
        background: url('../../assets/img/zs-troubles/recommend3.png');
        background-size: cover;
      }
    }
  }
  .recommend-tile{
    margin-bottom:25px;
    font-size:36px;
    color:#f0f0f0;
  }
  .recommend-expression{
    font-size:22px;
    color: #bac3d5;
  }
  .zzw-service-obj{
    padding-top:80px;
    padding-bottom:40px;
    background:#f8f8f8;
  }
  .success-demo-img{
    max-width:100%;
    margin-bottom: 40px;
  }
  .service-obj-box{
    margin-top:45px;
  }
  @media(max-width: 768px){
    .zs-trouble-con .zs-trouble-list ul{
      width:100%;
      padding:30px;
      margin-top:0;
    }
    .zs-trouble-con .zs-trouble-list{
     width:100%;

    }
    .zs-trouble-con{
      margin-top:50px;
    }
    .zs-trouble-con .zs-trouble-imgWrapper{
      width:100%;
    }
    .demand-done .bannerArea{
      background: url('../../assets/img-phone/phone-xqdj.jpg') center center no-repeat;
      background-size: cover;
    }
    .zs-trouble-box{
      padding:50px 0;
    }
    .zs-trouble-left,.zs-trouble-right{
      text-align: center;
    }
    .zs-trouble-content{
      margin-top:50px;
    }
    .zzw-data-power{
      padding:50px 0;
    }
    .info-title-desc{
      margin-top:50px;
      padding:0 15px;
    }
    .zzw-data-power-item{
      margin-bottom:20px;
    }
    .zs-trouble-img{
      margin-bottom:10px;
    }
    .zzw-demand-manage{
      padding:50px 0;
    }
    .demand-manage-box{
      margin-top:50px;
    }
    .demand-manage-list{
      margin-bottom: 40px;
    }
    .recommend-desc{
      padding:0 15px;
    }
    .smart-recommend-box .recommend-list li{
      width:50%;
      height:225px;
      float: left;
    }
    .smart-recommend-box .recommend-list .recommend-item2{
      padding:30px 10px;
    }
    .recommend-tile{
      font-size: 22px;
    }
    .recommend-expression{
     font-size:15px;
    }
    .smart-recommend-box img{
      max-width: 100%;
    }
    .smart-recommend-box{
      max-width:100%;
    }
  }


</style>
