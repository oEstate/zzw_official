<template>
    <div class="company-tr">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="container zzw-tr-info">
        <div class="zzw-tr-left">
          <img src="../../assets/img/zzw-tr/zzw-trInfo.jpg" alt="智招网投融资">
        </div>
        <div class="zzw-tr-right">
          智招网在全国30多个省设有运营中心，在部分城市设有工作站，拥有全国各地产业信息、资源禀赋的详细数据，能依据项目需求快速匹配出适合企业投资落地的区域；智招网拥有专业的选址要素分析、意向地块谈判能力；同时也拥有相当良好的本地化政府公共关系，能为您的企业匹配相关政策支持。
        </div>
      </div>
      <div class="zzw-tz-problem">
        <h3 class="info-title">
          企业投资难题
        </h3>
        <div class="info-box">
          <img class="b-lazy hidden-xs"
               src="http://pic.zhizhaowang.cn/loding.gif"
               data-src="../../../static/img/company-sj/problems.jpg"
               alt="">
          <div class="company-pro-list visible-xs">
            <ul class="company-pro-ul">
              <li v-for="(item,index) in problemsList" :key="index">
                <div class="company-pro-info">
                  <span class="index-tag">{{index+1}}</span>
                  <p class="title">
                    {{item.title}}
                  </p>
                  <p class="desc">{{item.desc}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="firm-service-con">
        <h3 class="info-title">
          服务内容
        </h3>
        <div class="container service-con-wrapper">
          <div class="row">
            <div class="col-md-12">
              <div class="service-con-box">
                <div class="service-con-left">
                  <ul class="serviceList">
                    <li class="service-con-left-li-1">
                      <h3 class="service-title">“VR双胞胎智慧企业”的主要功能</h3>
                      <p class="service-con">企业利用智招网平台建立自己的“VR双胞胎智慧企业” ，共享智招网强大的功能、数据、渠道、团队、智库等，用VR全景展示自己的产品、打通上下游产业链，帮助企业解决客户、资金、技术和人才等难题。</p>
                    </li>
                    <li class="service-con-left-li-2">
                      <h3 class="service-title">企业数据中心</h3>
                      <p class="service-con">为每个企业量身定做适合本企业需要的“数据中心”：包括上下游客户数据库、供应链数据库、销售链数据库、产品价格库、投融资数据库、行业数据库、高新技术库、人才数据库、产业数据库、政策数据库、行业动态、金融数据等等。</p>
                    </li>
                  </ul>
                </div>
                <div class="service-con-right">
                  <ul class="serviceList">
                    <li class="service-con-left-li-1">
                      <h3 class="service-title">客户地图</h3>
                      <p class="service-con">根据用户企业上下游产业链，快速匹配全球的上下游客户，并把客户名单及相关信息装到企业专属用户端的“客户管理”库里，包括公司自有客户、平台匹配客户、动态推送客户。企业只需在客户地图中筛选目标客户，随时还可以接收到平台推送的新客户，不再为缺少客户犯愁，做到不销而售。</p>
                    </li>
                    <li class="service-con-left-li-2">
                      <h3 class="service-title">企业服务工具</h3>
                      <p class="service-con">需求管理专家。智招网构筑了易用、实用、高效的企业需求在线解决方案和线下对接服务工具。把企业线下服务延伸到线上，尽量通过线上快速解决，给客户超值的服务感受，获取回头客。</p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="service-other">
                <img class="service-other-img" src="../../assets/img/zzw-tr/company-service-other.jpg" alt="">
                <div class="service-other-con">
                  <ul class="service-other-con-list">
                    <li>
                      <h3>寻找优质投资项目</h3>
                      <p>利用平台行业项目库、区域项目库、产业动态等，进行科学分析和研究，帮助企业选择有“钱途”的优质投资项目，避免因选错项目而输在了起跑线.
                      </p>
                    </li>
                    <li>
                      <h3>筛选最佳投资目的地</h3>
                      <p>通过全国各个城市和园区的营商环境、优势资源、产业基础、配套设施、优惠政策等方面对比分析，帮助企业选择最适合项目落地并具备快速成长“土壤“的投资目的地。
                      </p>
                    </li>
                    <li>
                      <h3>个性化订制服务</h3>
                      <p>包括咨询培训服务、企业融资、高新技术人才遴选、私诊会、战略合作、法律法规、知识产权、海外投资等服务。
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div class="zzw-fw-content">
        <h3 class="info-title">
          更多服务
        </h3>
        <div class="container info-box">
          <ul class="info-box-ul">
            <li class="info-box-li" v-for="(item,index) in infoList" :key="index">
              <img :src="item.imgUrl" alt="智招网-服务内容">
              <p class="info-item-title">{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="zzw-advantage">
        <h3 class="info-title">
          智招网优势
        </h3>
        <div class="container info-box">
          <div class="row">
            <div class="col-md-6">
              <div class="b-lazy zzw-advantage-desc zzw-ad-destination" :data-src="require('../../../static/img/company-sj/advantage1.jpg')">
                <h3>筛选最佳投资目的地</h3>
                <p>通过全国各个城市和园区的招商环境、优惠政策、优势资源的对比分析，<br>
                  帮助企业选择最适合项目落地、具备企业成长的投资目的地。 </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="zzw-advantage-desc zzw-ad-type1">
                <h3>遴选高新技术人才</h3>
                <p> 利用平台汇聚的科研机构、高等院校的各领域、各行业、各区域的“专家人才库”和高新技术，为企业提供专家顾问、专业人才、高新技术服务。</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="zzw-advantage-desc zzw-ad-type2">
                <h3>寻找优质投资项目</h3>
                <p> 利用本平台庞大的行业项目库、区域项目库、行业动态资讯等，进行科学分析和研究，帮助企业选择有“钱途”的优质投资项目。</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="zzw-advantage-desc zzw-ad-type1">
                <h3>提供专业咨询培训</h3>
                <p> 通过平台系统的产业研究报告，市场分析等，为企业提供经营管理咨询，提升工作效率和经济效益，跟上市场变化，化解产能/产品过剩等问题。</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="zzw-advantage-desc zzw-ad-type2">
                <h3>提供快速融资渠道</h3>
                <p> 利用本平台汇聚的各类金融机构和金融产品，为企业提供便捷高效的融资渠道。</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="b-lazy zzw-advantage-desc zzw-ad-service" :data-src="require('../../../static/img/company-sj/advantage2.jpg')">
                <h3>中介及个性化服务</h3>
                <p>提供企业私董会、私诊会、企业体检、战略合作、企业注册、税务、社保、法律法规、知识产权、人力资源、海外投资等服务。 </p>
              </div>
            </div>
            </div>
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
        return {
          infoList:[
            {title:'政府对接',imgUrl:require('../../assets/img/zzw-tr/1.png')},
            {title:'产业链诊断',imgUrl:require('../../assets/img/zzw-tr/2.png')},
            {title:'企业体检',imgUrl:require('../../assets/img/zzw-tr/3.png')},
            {title:'政府政策申报',imgUrl:require('../../assets/img/zzw-tr/7.png')},
            {title:'政策导览',imgUrl:require('../../assets/img/zzw-tr/8.png')},
            {title:'法律服务',imgUrl:require('../../assets/img/zzw-tr/11.png')},
            {title:'知识产权',imgUrl:require('../../assets/img/zzw-tr/12.png')},
            {title:'高新企业申请',imgUrl:require('../../assets/img/zzw-tr/13.png')},
            {title:'商业计划书',imgUrl:require('../../assets/img/zzw-tr/14.png')},
            {title:'税收代理',imgUrl:require('../../assets/img/zzw-tr/15.png')},
          ],
          problemsList:[
            {title:'盲目无方向',desc:'缺乏足够的选址经验，难以通过科学方式确定选址方向'},
            {title:'政府对接难',desc:'难以高效对接准确的负责人，把握项目真实落地可行性及争取更优惠政策'},
            {title:'决策风险大',desc:'若缺乏科学的评估体系支持选址决策，将会为项目未来正常运转埋下诸多隐患'},
            {title:'花费成本高',desc:'需花费大量金钱及人力成本来组建专门的选址团队'}
          ]
        }
      },
      mounted(){
        this.Blazy();
      }
    }
</script>

<style scoped lang="scss">

  .service-other{
    margin-top:100px;
    width:564px;
    height:338px;
    position:relative;
    margin-bottom:300px;

    img{
      width:100%;
      height:100%;
    }
    .service-other-con{
      position:absolute;
      bottom:-327px;
      left:222px;
      width:772px;
      padding:60px 26px;
      background-color:#f8f8f8;
    }
    .service-other-con-list{
      width:100%;
      li{
        width:100%;
        float:left;
        text-align: left;
        margin-bottom:49px;
        position:relative;
        &:last-child{
          margin-bottom: 0;
        }
        &:before{
          content:'';
          display: inline-block;
          position:absolute;
          width:46px;
          height:6px;
          background-color: #2659c1;
          left:0;
          top:-20px;
        }
        h3{
          font-size:24px;
        }
        p{
          margin-top:24px;
          font-size:16px;
        }
      }
    }
  }
  .firm-service-con{
    margin-top:50px;
  }
  .service-con-wrapper{
    .service-con-box{
      height:645px;
      background: url('../../assets/img/zzw-tr/qy-fw.png') center center no-repeat;
    }

    .service-con-left,.service-con-right{
      width:50%;
      float:left;
    }
    .service-con-left{
      padding-right:30px;
      .serviceList{
        overflow: hidden;
        li{
          width:100%;
          float:right;
          text-align:right;
          margin-top:30px;
          line-height: 32px;
        }
        .service-con-left-li-1{
          margin-top:104px;
        }
        .service-con-left-li-2{
          margin-top:133px;
        }
        .service-title{
          font-size:24px;
        }
        .service-con{
          font-size:16px;
          margin-top:20px;
        }

      }
    }
    .service-con-right{
      padding-left:30px;
      .serviceList{
        overflow: hidden;
        li{
          width:100%;
          float:left;
          text-align:left;
          margin-top:30px;
          line-height: 32px;
        }
        .service-con-left-li-1{
          margin-top:240px;
        }
        .service-con-left-li-2{
          margin-top:102px;
        }
        .service-title{
          font-size:24px;
        }
        .service-con{
          font-size:16px;
          margin-top:20px;
        }

      }
    }
  }
  .company-pro-list{
    padding:15px ;
    background-color: #f8f8f8;
    .company-pro-ul{
      width:100%;
      overflow: hidden;
      li{
        width:100%;
        float:left;
        background-color: #fff;
        margin-bottom:15px;
        &:last-child{
          margin-bottom: 0;
        }
      }
      .company-pro-info{
        width:100%;
        padding:15px 15px 15px 60px;
        text-align: left;
        position:relative;
        .title{
          font-size: 17px;
        }
        .desc{
          font-size: 14px;
        }
        .index-tag{
          width:40px;
          height:40px;
          background: url('../../../static/img/home/zs-index.png') 0 0 no-repeat;
          background-size: 100%;
          position:absolute;
          top:50%;
          left:10px;
          transform: translateY(-50%);
          text-align: center;
          line-height: 40px;
          font-size:14px;
          color:#0102ff;
        }

      }
    }
  }
  .company-tr .bannerArea{
    background: url('../../assets/img/commonImg/qysj.jpg') center center no-repeat;
    background-size: cover;
  }
.zzw-tr-info{
  overflow: hidden;
  padding-top:136px;
  padding-bottom:20px;
}
.zzw-tr-left{
  width:35%;
  height:270px;
  float:left;

}
.zzw-tr-right{
  width:65%;

  padding:40px 36px;
  position:relative;
  float:left;
  margin-top:62px;
  text-align: left;
  font-size: 16px;
  line-height: 32px;
  background-color:#f6f7f8 ;
  &:before{
    content: '';
    width:51px;
    height:42px;
    background: url('../../assets/img/zzw-tr/tr-pre.png') 0 0 no-repeat;
    position:absolute;
    top:-10px;
    left:36px;
  }
  &:after{
    content: '';
    width:51px;
    height:42px;
    background: url('../../assets/img/zzw-tr/tr-next.png') 0 0 no-repeat;
    position:absolute;
    bottom:-10px;
    right:36px;
  }
}
.zzw-tz-problem{
  padding-top:100px;
}
.info-title{
  text-align: center;
  font-size:32px;
  color:#333;
  padding-bottom:100px;
}
.info-box{
  text-align: center;
  img{
    max-width:100%;
  }
}
.zzw-fw-content{
  padding-top:120px;
}
  .info-box-ul{
    width:100%;
    overflow: hidden;
    .info-box-li{
      float:left;
      width:20%;
      text-align: center;
      margin-bottom:50px;
      img{
        max-width: 100%;
      }
    }
    .info-item-title{
      font-size: 14px;
      margin-top:30px;
    }
  }
  .zzw-advantage{
    padding-top:100px;
    padding-bottom:100px;
  }
  .zzw-advantage-desc{
    height:204px;
    color:#fff;
    text-align: left;
    padding:32px 22px;
    margin-bottom:30px;
    h3{
      font-size:24px;
      margin-bottom:27px;
    }
    p{
      font-size:14px;
      line-height: 24px;
    }
  }
  .zzw-ad-destination{

    /*background:url('../../../static/img/company-sj/advantage1.jpg') 0 0 no-repeat;*/
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .zzw-ad-service{
    /*background: url('../../../static/img/company-sj/advantage2.jpg') 0 0 no-repeat;*/
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .zzw-ad-type1{
    background-color:#5591eb ;
  }
  .zzw-ad-type2{
    background-color:#24c6dc;
  }
  .zzw-success-demo{
    padding:60px 0;
    margin-top:100px;
    background-color:#f8f8f8 ;
  }
  .success-demo-img{
    max-width:100%;
    margin-bottom: 40px;
  }
  @media(max-width:768px){

    .service-other{
     margin-bottom:50px;
    }
    .service-other .service-other-con{
      position:static;
      width:100%;
      height:auto;
    }
    .service-other-con-list{
      overflow: hidden;
    }
    .service-con-wrapper {
      .service-con-box{
        background: none;
        height:auto;
        overflow: hidden;
      }
    }
    .service-con-wrapper .service-con-left .serviceList li{
      text-align: left;
    }
    .service-con-wrapper .service-con-left .serviceList {
      .service-con-left-li-1{
        margin-top: 0px;
      }
      .service-con-left-li-2{
        margin-top: 50px;
      }
      .service-con{
        font-size: 18px;
      }
    }
    .service-con-wrapper .service-con-right .serviceList {
      .service-con{
        font-size: 18px;
      }
      .service-con-left-li-1{
        margin-top: 50px;
      }
      .service-con-left-li-2{
        margin-top: 50px;
      }
    }
    .service-con-wrapper .service-con-left{
      width:100%;
      padding:0;
    }
    .service-con-wrapper .service-con-right{
      width:100%;
      padding:0;
    }
    .service-other{
     width:100%;
      height:auto;
    }
    .company-tr .bannerArea{
      background: url('../../assets/img-phone/phone-qysj.jpg') center center no-repeat;
      background-size: cover;
    }
    .zzw-tr-info{
      padding-top:50px;
    }
    .zzw-tr-left{
      img{
        max-width: 100%;
      }
    }
    .zzw-tr-right{
      padding:20px 15px;
      &:before{
        width:25px;
        height:21px;
        background-size: 100% 100%;
      }
      &:after{
        width:25px;
        height:21px;
        background-size: 100% 100%;
      }
    }
    .zzw-tz-problem{
      padding-top:50px;
    }
    .info-title{
      padding-bottom: 50px;
    }
    .zzw-fw-content{
      padding-top:60px;
    }
    .info-box-ul .info-box-li{
      width:50%;
    }
    .zzw-advantage{
      padding-top:50px;
      padding-bottom:50px;

    }
  }

</style>
