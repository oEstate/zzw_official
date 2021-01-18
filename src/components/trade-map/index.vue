<template>
    <div class="tradeMap">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="recognize-zs">
        <h3 class="info-title">什么是产业招商地图</h3>
        <div class="container zs-map-box1">
          <div class="row">
            <div class="zs-map-box-info">
            <p> 产业招商地图是根据区域战略规划和产业发展需求定制化绘制的潜在招商目标图系。</p>
            <p> 产业招商地图对招商引资具有直接的指导作用，可以实现快速精准招商，提高招商资源配置效率，节约大量时间和经费。</p>
            <p>根据不同城市的产业链，利用智招网海量的数据库和先进的数据模型，帮助政府建设“产业招商地图”，快速匹配“产业链”上的相关企业，锁定目标客商，实现“产业链网”招商。 </p>
            </div>
            <div class="zs-map-box-img  hidden-xs">
              <img src="../../assets/img/trade-map/recognize1.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class="container zs-map-box2">
          <div class="row">
            <div class="zs-map-box-img">
              <img src="../../assets/img/trade-map/recognize2.jpg" alt="">
            </div>
            <div class="zs-map-box-info">
              <p> 区域产业未来发展的愿景图</p>
              <p> 科学招商的过程管理工具</p>
              <p> 区域精准化招商的技术方案</p>
            </div>
          </div>
        </div>
      </div>
      <div class="core-advantage-wrapper">
        <h3 class="info-title">核心优势</h3>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-6" v-for="(item,index) in advantageList" :key="index">
              <div class="advantage-list" :style="{backgroundImage:`url(${item.imgBg})`}">
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="tradeMap-feature">-->
<!--        <h3 class="info-title">产业地图特点</h3>-->
<!--        <div class="tradeMap-Box">-->
<!--          <div class="container">-->
<!--            <div class="row">-->
<!--              <div class="col-md-3 ">-->
<!--                <div class="tradeMap-list tradeMap-list1">-->
<!--                  <div class="tradeMap-list-head">-->
<!--                      <p>营商环境 一目了然</p>-->
<!--                      <i class="list-index1"></i>-->
<!--                  </div>-->
<!--                  <div class="tradeMap-list-con">-->
<!--                    <img src="../../assets/img/trade-map/tradeMap-f1.jpg" alt="">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-3">-->
<!--                <div class="tradeMap-list tradeMap-list2">-->
<!--                  <div class="tradeMap-list-head">-->
<!--                    <p>一网打尽所有产业数据</p>-->
<!--                    <i class="list-index2"></i>-->
<!--                  </div>-->
<!--                  <div class="tradeMap-list-con">-->
<!--                    <img src="../../assets/img/trade-map/tradeMap-f2.jpg" alt="">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-3">-->
<!--                <div class="tradeMap-list tradeMap-list3">-->
<!--                  <div class="tradeMap-list-head">-->
<!--                    <p>海量载体数据 告别数据瓶颈</p>-->
<!--                    <i class="list-index3"></i>-->
<!--                  </div>-->
<!--                  <div class="tradeMap-list-con">-->
<!--                    <img src="../../assets/img/trade-map/tradeMap-f3.jpg" alt="">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-3">-->
<!--                <div class="tradeMap-list tradeMap-list4">-->
<!--                  <div class="tradeMap-list-head">-->
<!--                    <p>一键展示未来所有规划</p>-->
<!--                    <i class="list-index4"></i>-->
<!--                  </div>-->
<!--                  <div class="tradeMap-list-con">-->
<!--                    <img src="../../assets/img/trade-map/tradeMap-f4.jpg" alt="">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="tradeMap-build-plan">
        <h3 class="info-title">招商产业地图建设方案 </h3>
        <div class="tradeMap_plan-content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-6">
                <ul class="tradeMap_plan-left">
                  <li>载体信息收集 <span>01</span></li>
                  <li>载体区位标注 <span>02</span></li>
                  <li>载体信息详情 <span>03</span></li>
                  <li>配置专属域名 <span>04</span></li>
                </ul>
              </div>
              <div class="col-md-4 hidden-xs" >
                <div class="tradeMap_plan-img">
                  <img src="../../assets/img/trade-map/tradeMapBuild.png" alt="">
                </div>
              </div>
              <div class="col-md-4 col-xs-6">
                <ul class="tradeMap_plan-right">
                  <li><span>05</span>开放产业信息 </li>
                  <li><span>06</span>配套信息关联</li>
                  <li><span>07</span>产业板块规划</li>
                  <li><span>08</span>产业报告</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quick-connect">
        <div class="connectBtn" @click="newWin('http://chain.zhizhaowang.cn')">
          产品体验
        </div>
      </div>
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
        return{
          advantageList:[
            {title:'加快产业升级调整',imgBg:require('../../assets/img/trade-map/advan1.png')},
            {title:'促进产业集群创新',imgBg:require('../../assets/img/trade-map/advan2.png')},
            {title:'提升招商谈判地位',imgBg:require('../../assets/img/trade-map/advan3.png')},
            {title:'加强自主创新能力建设',imgBg:require('../../assets/img/trade-map/advan4.png')},
            {title:'促进区域之间协调发展',imgBg:require('../../assets/img/trade-map/advan5.png')},
            {title:'标准化智能报告产出',imgBg:require('../../assets/img/trade-map/advan6.png')},
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  .core-advantage-wrapper{
    background: url('../../assets/img/trade-map/advantagebg.jpg') 0 0 no-repeat;
    background-size:cover;
    margin-top:100px;
    overflow: hidden;
    padding-bottom:100px;
    .info-title{
      color:#fff;
      margin-top:92px;
      margin-bottom:70px;
    }
  }
  .advantage-list{
    width:100%;
    padding-top:100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 74px;
    font-size:16px;
    color:#fff;
    margin-bottom:40px;
  }
  .recognize-zs{
    margin-top:120px;
  }
  .zs-map-box2{
    margin-top:100px;
    .zs-map-box-info{
      width:60%;
      float:left;
      background-color:#f8f8f8;
      padding: 30px 50px;
      text-align: left;
      line-height: 28px;
      margin-top: 35px;
      p{
        height:30px;
        line-height: 30px;
        font-size: 16px;
        padding-left:35px;
        text-align: left;
        margin-bottom:20px;
        background: url('../../assets/img/trade-map/map-flag.png') 0 center no-repeat;
        background-size:20px;
        &:last-child{
          margin-bottom:0;
        }


      }
    }
    .zs-map-box-img{
      width:40%;
      float:left;
      img{
        max-width: 100%;
      }
    }
  }
  .zs-map-box1{
    margin-top:100px;
    .zs-map-box-info{
      width:60%;
      float:left;
      background-color:#f8f8f8;
      padding:50px;
      text-align: left;
      line-height: 28px;
      margin-top: 35px;
      p{
        text-indent: 32px;
        font-size: 16px;
      }
    }
    .zs-map-box-img{
      width:40%;
      float:left;
      img{
        max-width: 100%;
      }
    }

  }

  .tradeMap .bannerArea{
    background: url('../../assets/img/commonImg/cydt.jpg') center center no-repeat;
    background-size: cover;
  }
  .info-title{
    color:#525252;
    font-size:32px;
  }
  .tradeMap-feature{
    padding-top:76px;
    padding-bottom:118px;
    background:url('../../assets/img/trade-map/tradeFeatureBg.jpg') 0 0 no-repeat ;
    background-size: cover;
  }
  .tradeMap-Box{
    margin-top:62px;
    .tradeMap-list{
      position:relative;
      height:320px;
      background-color:#879baf ;
      &:hover{
        .tradeMap-list-head{
          background-color:#67a3fc ;
          &:before{
            top:-20px;
            background-color:#67a3fc ;
          }
        }
      }
    }
    .tradeMap-list-con{
      height:200px;
      position:absolute;
      bottom:0;
      right:0;
      img{
        max-width:100%;
        height:100%;
      }
    }
  }
  .tradeMap-list-head{
    width:100%;
    height:120px;
    color:#fff;
    position:absolute;
    text-align:center ;
    line-height: 120px;
    font-size:18px;
    transition: all 0.5s ease-in;
    &:before{
      content: '';
      display: block;
      width:100%;
      height:20px;
      background-color:#879baf ;
      position:absolute;
      top:0;
      left:0;
      transition: background-color 0.5s ease-in;
    }
    i{
      width:80px;
      height:80px;
      display: inline-block;
      position:absolute;
      z-index:10;
      bottom:-40px;
      left:50%;
      margin-left: -40px;
    }
    .list-index1{
      background:url('../../assets/img/trade-map/1nor.png')  0 0 no-repeat;
      background-size: 100%;
    }
    .list-index2{
      background:url('../../assets/img/trade-map/2nor.png')  0 0 no-repeat;
      background-size: 100% ;
    }
    .list-index3{
      background:url('../../assets/img/trade-map/3nor.png')  0 0 no-repeat;
      background-size: 100% ;
    }
    .list-index4{
      background:url('../../assets/img/trade-map/4nor.png')  0 0 no-repeat;
      background-size: 100% ;
    }
  }
  .tradeMap-list1:hover{
    .list-index1{
      background:url('../../assets/img/trade-map/1sel.png')  0 0 no-repeat;
      background-size: 100% ;
    }
  }
  .tradeMap-list2:hover{
    .list-index2{
      background:url('../../assets/img/trade-map/2sel.png')  0 0 no-repeat;
      background-size: 100% ;
    }
  }
  .tradeMap-list3:hover{
    .list-index3{
      background:url('../../assets/img/trade-map/3sel.png')  0 0 no-repeat;
      background-size: 100% ;
    }
  }
  .tradeMap-list4:hover{
    .list-index4{
      background:url('../../assets/img/trade-map/4sel.png')  0 0 no-repeat;
      background-size: 100% ;
    }
  }
  .tradeMap-build-plan{
    padding-top:82px;
    padding-bottom:100px;
  }
  .tradeMap_plan-content{
    margin-top:70px;
  }
  .tradeMap_plan-left,.tradeMap_plan-right{
    width:100%;
    overflow: hidden;
    li{
      width:100%;
      float:left;
      font-size: 18px;
      line-height: 47px;
      span{
        color:#66a2fb;
      }
    }
  }
  .tradeMap_plan-left{
    text-align:right ;
    span{
      margin-left:15px;
    }
  }
  .tradeMap_plan-right{
    text-align: left;
    span{
      margin-right:15px;
    }
  }
  .tradeMap_plan-img{
    width:100%;
    margin-top:0;
    img{
      max-width:230px;
    }
  }
  .quick-connect{
    height:334px;
    background: url('../../assets/img/trade-map/map.jpg') 0 0 no-repeat;
    background-size: cover;
    position:relative;
    .connectBtn{
      width: 370px;
      height: 63px;
      cursor: pointer;
      background: #4285e7;
      border-radius: 4px;
      color: #fff;
      font-size: 28px;
      text-align: center;
      line-height: 63px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
  @media(max-width: 768px){
    .core-advantage-wrapper .info-title{
      margin-top:50px;
      margin-bottom:50px;
    }
    .core-advantage-wrapper{
      padding-bottom:50px;
    }
    .zs-map-box2{
      margin-top: 0;
      .zs-map-box-img{
        width:100%;
      }
      .zs-map-box-info{
        width:100%;
        margin-top:0;
      }
    }
    .core-advantage-wrapper{
      margin-top:50px;
    }
    .recognize-zs{
      margin-top:50px;
    }
    .zs-map-box1{
      margin-top:50px;
      .zs-map-box-info{
        padding:15px;
        width:100%;
      }

    }

    .tradeMap .bannerArea{
      background: url('../../assets/img-phone/phone-cydt.jpg') center center no-repeat;
      background-size: cover;
    }
    .tradeMap-feature{
      padding-top:50px;
      padding-bottom:0;
    }
    .tradeMap-Box{
      margin-top:50px;
      .tradeMap-list-con{
        position:static;
      }
      .tradeMap-list{
        height:auto;
      }
    }
    .tradeMap-build-plan{
      padding-top:50px;
      padding-bottom:50px;
    }
    .tradeMap_plan-left{
      text-align: center;
    }
    .quick-connect{
      height:200px;
    }
    .quick-connect .connectBtn{
      width: 370px;
      height: 63px;
      cursor: pointer;
      background: #4285e7;
      border-radius: 4px;
      color: #fff;
      font-size: 28px;
      text-align: center;
      line-height: 63px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .tradeMap-list-head{
      &:before{
        display: none;
      }
    }
    .tradeMap-Box .tradeMap-list:hover .tradeMap-list-head{
      background: none;
    }
    .tradeMap-Box .tradeMap-list-con img{
      width:100%;
      height:100%;
    }
    .tradeMap-Box{
      padding-top:20px;
      padding-bottom:10px;
      background:#879baf ;
    }
    .tradeMap-list-head{
     height:auto;
      p{
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.4);
      }
    }
    .tradeMap-list{
      margin-bottom:15px;
    }

  }
</style>
