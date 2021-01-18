<template>
    <div class="elite">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="elite-creation">
        <h3 class="info-title">
          人才创新创业
        </h3>
        <div class="container elite-desc">
          <div class="row">
            <div class="col-md-12">
              “专家人才库”汇聚的国内外各领域顶级专家智慧及与中外科研咨询机构建立的友好合作关系，能够为城市提供领先的战略思想、决策咨询和实战服务。
              “不求所有，但求所用”，利用他们的人才智力知本为社会提供省钱、省时、省心的咨询服务，实现智力与资本有效对接，为城市、社会发展做出实际的贡献。
            </div>
          </div>
          </div>
      </div>
      <div class="elite-main-function">
        <div class='container'>
          <div class="row">
            <div class="col-md-5">
              <div class="elite-function-img">
                <img src="../../assets/img/zzw-tr/elite-function-img.jpg" alt="">
              </div>
            </div>
            <div class="col-md-7">
              <div class="elite-function-con">
                <h2 >主要功能</h2>
                <div class="swiper-container elite-function-swiper" id="eliteFuncSwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <li v-for="(item,index) in eliteFunctionList1" :key="index">
                        <div class="functionList" :style="{backgroundImage:`url(${item.bgImg})`}">
                          <h3 class="title">{{item.title}}</h3>
                          <p class="desc">{{item.desc}}</p>
                        </div>
                      </li>
                    </div>
                    <div class="swiper-slide">
                      <li v-for="(item,index) in eliteFunctionList2" :key="index">
                        <div class="functionList" :style="{backgroundImage:`url(${item.bgImg})`}">
                          <h3 class="title">{{item.title}}</h3>
                          <p class="desc">{{item.desc}}</p>
                        </div>
                      </li>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="eliteFuncPagnation"></div>
                </div>
                <ul>

                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div class="elite-service">
        <h3 class="info-title">
          更多服务
        </h3>
        <div class="container elite-service-box">
          <div class="row">
            <div class="col-md-12">
              <ul class="info-box-ul">
                <li class="info-box-li" v-for="(item,index) in infoList" :key="index">
                  <img :src="item.imgUrl" alt="智招网-人才服务">
                  <p class="info-item-title">{{item.title}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="b-lazy elite-service-wrapper" data-src="../../../static/img/elite/service.jpg">-->
<!--        <div class="container">-->
<!--          <div class="row">-->
<!--            <div class="col-md-3 col-xs-12 elite-service-item" v-for="(item,index) in serviceList" :key="index">-->
<!--              <div class="serviceList">-->
<!--                <i class="serviceIcon" :style="{background:'url('+item.icon+')',backgroundSize:'100%'}"></i>-->
<!--                <div class="serviceInfo">-->
<!--                  <p class="index">{{'0'+(index+1)}}</p>-->
<!--                  <p class="title">{{item.title}}</p>-->
<!--                  <p class="con">{{item.desc}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="elite-expert">
        <h3 class="info-title">
          专家智库
        </h3>
        <div class="elite-expert-box">
          <div class="container">
            <div class="row">
              <div class="col-md-3 " v-for="(item,index) in expertList" :key="index">
                <div class="b-lazy expert-con"  :data-src="item.img"   >
                  <div class="expert-con-inner">
                    <p class="personName">{{item.personName}}</p>
                    <p class="personJob">{{item.job}}</p>
                    <p class="personInfo">{{item.info}}</p>
                  </div>
                </div>
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
        return{
          infoList:[
            {title:'个人作品展示',imgUrl:require('../../assets/img/elite/ser1.png')},
            {title:'众创空间',imgUrl:require('../../assets/img/elite/ser5.png')},
            {title:'网络孵化器',imgUrl:require('../../assets/img/elite/ser3.png')},
            {title:'专家培训',imgUrl:require('../../assets/img/elite/ser4.png')},
            {title:'需求对接',imgUrl:require('../../assets/img/elite/ser6.png')},
            {title:'人才求职',imgUrl:require('../../assets/img/elite/ser7.png')},
            {title:'财智奖项',imgUrl:require('../../assets/img/elite/ser8.png')},
            {title:'品牌塑造',imgUrl:require('../../assets/img/elite/ser9.png')},
          ],
          serviceList:[
            {title:'创业服务',icon:require('../../assets/img/elite/icon1.png'), desc:'本平台为专家学者、行业精英搭建了一个新技术和项目发布推广窗口。同时，利用平台汇聚的政府资源、中外企业等快速转化研究成果，实现智力知本与资本的高效对接，提升科研成果的转化率，为社会发展做出更大的贡献。'},
            {title:'成果转化',icon:require('../../assets/img/elite/icon2.png'),desc:'为创业者提供一站式创业服务，包括：创业项目的评估，使其贏在起跑线；选择最佳创业地，具备更好的成长土壤；创业辅导，提升创业成功率等。'},
            {title:'就业服务',icon:require('../../assets/img/elite/icon3.png'),desc:'《城市人才库》+《行业人才库》为应届大学生、留学生和社会精英搭建一个按行业、区域求职就业的窗口，更好帮助各类人才理想就业，人尽其才。'},
            {title:'咨询服务',icon:require('../../assets/img/elite/icon4.png'),desc:' “不求所有，但求所用”“一人可以身兼数职”。精英们可以借助本平台，利用自己的智力知本为政府、企业提供省时、省钱、省心的咨询服务；如果您要咨询管理和技术等方面的问题，只需一个留言，平台就会为您智能匹配，找到您想咨询的专家，快捷地解决您想咨询的难题。'},
            ],
          expertList:[
            {personName:'王琪延',job:'经济学博士，教授、博士生导师',img:require('../../assets/img/elite/expert1.jpg'),info:'统计应用科学研究中心、社会学理论与方法研究中心、国际竞争力研究中心兼职教授。北京市人民政府顾问。讲授的课程为企业人力资源管理、统计学、市场调查、宏观经济学等。'},
            {personName:'杨文泉',job:'律师、商标代理人',img:require('../../assets/img/elite/expert2.jpg'),info:'主要从事知识产权法律咨询、许可、转让、海关保护、反不正当竞争、制止盗版和假冒、计算机和作品的著作权注册、域名注册和争议解决以及知识产权行政诉讼和侵权诉讼业务。杨文泉先生谙熟知识产权诉讼和许可；曾多次在国内外知识产权论坛上就中国知识产权保护的相关议题发表演讲，已代理几十家跨国企业进行专利、商标和著作权行政查处和诉讼。'},
            {personName:'刘治彦',job:'经济学家、教授',img:require('../../assets/img/elite/expert3.jpg'),info:'主要从事城市经济学、区域经济学、资源环境经济学、生态经济学研究，研究方向包括城市经济学理论与方法、城市经济系统分析、城市区域经济发展战略、绿色经济、城市投资价值分析、城镇化与城乡发展规划、土地利用规划与整治、城市区域运行模拟与智慧城市、“城市病”治理等。'},
            {personName:'李光斗',job:'中央电视台品牌顾问、著名品牌营销战略专家',img:require('../../assets/img/elite/expert4.jpg'),info:'自1990年开始从事市场营销和品牌策划工作，先后担任伊利、蒙牛、招商银行、古越龙山、喜临门、长虹、德尔惠等全国数十家著名企业的常年品牌营销广告顾问，被评为影响中国营销进程的风云人物，并任北京大学、清华大学、上海交通大学、厦门大学EMBA品牌学特聘教授，具有丰富的品牌建设和市场营销经验。'},
            ],
          eliteFunctionList1:[
            {title:'创业创新服务',desc:'为创业者提供一站式创新创业服务。',bgImg:require('../../assets/img/elite/cxfu.png')},
            {title:'邀约见面',desc:'可以约见不同领域和行业的专家，与他们进行一对一见面咨询。',bgImg:require('../../assets/img/elite/yyhm.png')},
            {title:'成果转化',desc:'帮助各类人才、科研单位快速转化研究成果，知本与资本高效对接。',bgImg:require('../../assets/img/elite/cgzh.png')},
          ],
          eliteFunctionList2:[
            {title:'就业服务',desc:'为应届大学生、留学生和行业精英搭建一个按行业、区域求职就业的窗口，更好帮助各类人才理想就业，人尽其才。',bgImg:require('../../assets/img/elite/jyfw.png')},
            {title:'咨询服务',desc:'精英们可以借助平台为政府、企业提供咨询服务，解决难题。',bgImg:require('../../assets/img/elite/zx.png')},
            {title:'个性化定制服务',desc:'为人才提供其他个性化定制服务。',bgImg:require('../../assets/img/elite/dz.png')},
          ]
        }
      },
      mounted() {
        this.Blazy();
        let mySwiper = new Swiper('#eliteFuncSwiper', {
          spaceBetween: 30,
          autoplay:true,
          clickable:true,
          pagination: {
            el: '.eliteFuncPagnation',
            clickable: true,
          },
        });
      },
      methods:{

      }
    }
</script>
<style lang="scss">

  .elite-function-con{
    position:relative;
    .swiper-container-horizontal>.swiper-pagination-bullets{
    text-align:center;
      position:absolute;
      bottom:0;
      z-index:1000;
    .swiper-pagination-bullet{
      width:45px;
      height:7px;
      border-radius: 3px;
    }
  }
    .swiper-pagination-bullet-active{
      background-color: #3f74df;
    }
  }
</style>
<style scoped lang="scss">
  .elite-function-swiper{
    padding-bottom:20px;
  }
  .elite-main-function{
    text-align: left;
    margin-bottom:88px;
    margin-top:88px;
    img {
      max-width:100%;
    }
    .functionList{
      padding-left:90px;
      margin-bottom:50px;
      background: url('../../assets/img/elite/cxfu.png') 0 0 no-repeat;
      background-size: 66px 66px;
    }
    .elite-function-con{
      padding-left:40px;

      h2{
        font-size:36px;
        margin-bottom:50px;
      }
      .title{
       font-size:24px;
        margin-bottom:20px;
      }
      .desc{
        font-size:16px;
      }
    }
  }
  .elite .bannerArea{
    background: url('../../assets/img/commonImg/rcsc.jpg') center center no-repeat;
    background-size: cover;
  }
  .info-title{
    text-align: center;
    font-size: 40px;
  }
  .elite-creation{
  padding-top:69px;
  padding-bottom:62px;
}
  .elite-desc{
    margin-top:50px;
    font-size:16px;
    text-align:left;
    text-indent: 32px;
    line-height: 28px;
  }
  .elite-service{
    padding-top:70px;
    background: #f8f8f8;
  }
  .elite-service-box{
    margin-top: 60px;
  }
  .info-box-ul{
    width:100%;
    overflow: hidden;
    .info-box-li{
      float:left;
      width:25%;
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
  .elite-service-wrapper{
    margin-top:169px;
    height:580px;

    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .serviceList{
    width:100%;
    height:100%;
    padding-top:130px;
    position:relative;
    color:#fff;
    .index{
      text-align: center;
      font-size:32px;

    }
    .title{
      text-align:center;
      font-size: 28px;
      margin-top:27px;
    }
    .con{
      margin-top:32px;
      font-size: 15px;
      text-indent: 32px;
      line-height: 28px;
      text-align:left;
      padding:0 30px;
    }
    .serviceIcon{
      position:absolute;
      width:120px;
      height:120px;
      top:-60px;
      left:50%;
      margin-left:-60px;
      background: url('../../assets/img/elite/icon1.png') 0 0 no-repeat;
      background-size:100% 100%;

    }
  }
  .elite-expert{
    padding-top:100px;
    padding-bottom:105px;
    .elite-expert-box{
      margin-top:95px;
    }
    .expert-con{
      width:100%;
      height:380px;
      color:#fff;
      background-size:100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      &:hover{
        .expert-con-inner{
          opacity:1;
          background-color: rgba(32,41,57,0.8);
        }
      }
    }
    .expert-con-inner{
      width:100%;
      height:100%;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s ease-in-out;
      .personName{
        font-size:20px;
        color:#fff;
        text-align: center;
        font-weight: bold;
        margin-bottom:18px;
        margin-top:50px;
      }
      .personJob{
        font-size:14px;
      }
      .personInfo{
        padding:0 15px;
        margin-top:14px;
        font-size:14px;
        color:#d3cdcd;
        text-align: left;
      }
    }
  }
  @media(max-width: 768px){
    .elite-main-function .elite-function-con{
      margin-top:50px;
      padding:0;
      h2{
        font-size: 30px;
        text-align: center;
      }
    }
    .elite-main-function{
      margin-top:0;
      margin-bottom:30px;
    }
    .elite-expert  .expert-con-inner{
      .personName{
        font-size:24px;
      }
      .personJob{
        font-size:18px;
      }
      .personInfo{
        font-size:16px;
      }
    }
    .elite .bannerArea{
      background: url('../../assets/img-phone/phone-rcsc.jpg') center center no-repeat;
      background-size: cover;
    }
    .elite-creation{
     padding-top:50px;
      padding-bottom:50px;
    }
    .elite-service{
      padding-top:50px;
    }
    .info-box-ul .info-box-li{
      width:50%;
    }
    .elite-service-wrapper{
      margin-top:100px;
    }
    .serviceList .serviceIcon{
      width:80px;
      height:80px;
      top: -40px;
      margin-left: -40px;
    }
    .serviceList{
      padding-top:0;
      .title{
       margin-top:10px;
      }
      .con{
        padding:0;
        margin-top:10px;
      }
    }
    .elite-service-item{
      margin-bottom:70px;
    }
    .elite-service-wrapper{
      height:1200px;
    }
    .elite-expert{
      padding-top:60px;
      padding-bottom:50px;
    }
    .elite-expert .elite-expert-box{
      margin-top:50px;
    }
    .elite-expert .expert-con{
      height:480px;
      margin-bottom:20px;
    }
    .elite-expert .expert-con-inner{
      opacity: 1;
      background-color: rgba(32, 41, 57, 0.6);
    }
  }


</style>
