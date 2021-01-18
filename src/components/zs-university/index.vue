<template>
    <div class="px-university">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="zs-problems">
        <h3 class="info-title">常见招商难题</h3>
        <div class="zs-prob-con">
          <div class="container">
            <div class="row">
              <div class="col-md-1 hidden-xs"></div>
              <div class="col-md-2 col-xs-6 zs-prob-con-item" v-for="(item,index) in zsProbList" :key="index">
                <div class="prob-list">
                  <div class="prob-con-inner">
                    <p class="index">{{index+1}}</p>
                    <p class="desc" v-html="item.con"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="training-benefit">
        <h3 class="info-title" >培训收益</h3>
        <div class="benefit-box">
          <div class="container">
            <ul class="benefit-box-ul">
              <li v-for="(item,index) in benefitList" :key="index">
                <div class="benefit-box-con" :style="{background:'url('+item.backImg+')',backgroundSize:'100% 100%'}">
                  <div class="benefit-box-con-inner" >
                    <div class="benefit-box-conWrapper">
                      <i class="icon"  :style="{background:'url('+item.icon+')',backgroundSize:'100% 100%'}"></i>
                      <p class="info" v-html="item.info"></p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="training-project">
        <h3 class="info-title">主要培训议题</h3>
        <div class="training-project-box">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-md-offset-1 " >
                <ul class="training-project-list  ">
                  <li>《创新政府招商引资及企业投资融资模式》</li>
                  <li> 《新常态下的招商引资与执政艺术》 </li>
                  <li> 《特色小城镇建设与投资配置》 </li>
                  <li>《县域经济发展与特色产业链建设》</li>
                </ul>
              </div>
              <div class="col-md-5">
                <ul class="training-project-list  ">
                  <li> 《PPP项目融资实施与操作案例分析》 </li>
                  <li> 《驻外招商工作方法与实务技巧》 </li>
                  <li> 《互联网+招商引资》  </li>
                  <li>《大数据招商引资》</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="training-advantage">
        <h3 class="info-title">培训亮点</h3>
        <div class="training-advantage-box">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-xs-6 training-advantage-box-item" v-for="(item,index) in trainingList" :key="index">
                <div class="training-advantage-con">
                  <p class="training-name" v-html="item.title"></p>
                  <p class="training-desc">{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quick-connect">
        <div class="connectBtn">
          <a href="http://cdn.zhizhaowang.cn/doc/%E6%99%BA%E6%8B%9B%E7%BD%91%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B.docx">点击下载培训课程</a>
        </div>
      </div>
<!--      <div class="elite-expert">-->
<!--        <h3 class="info-title">-->
<!--          师资力量-->
<!--        </h3>-->
<!--        <div class="elite-expert-box">-->
<!--          <div class="container">-->
<!--            <div class="row">-->
<!--              <div class="col-md-3 " v-for="(item,index) in expertList" :key="index">-->
<!--                <div class="expert-con" :style="{background:'url('+item.img+')',backgroundSize: '100% 100%'}">-->
<!--                  <div class="expert-con-inner">-->
<!--                    <p class="personName">{{item.personName}}</p>-->
<!--                    <p class="personJob">{{item.job}}</p>-->
<!--                    <p class="personInfo">{{item.info}}</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
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
        zsProbList:[
          {con:'还在为招商新人<br> 无法快速转变身份、<br> 融入环境而烦恼吗？'},
          {con:'还在为招商人员<br>  无法突破专业瓶颈、<br>  精进业务能力而困顿吗？'},
          {con:'还在为招商精英 <br> 满腹经验却不能高效萃取、系统讲解而焦虑吗？'},
          {con:'还在为招商管理者<br>  疲于人才培养、<br>  团队管理而不解吗？'},
          {con:'还在为招商团队<br>  没有形成梯队式的<br>  人才体系而疑惑吗？'},
        ],
        benefitList:[
          {info:'提升业务<br> 专业知识技能',icon:require('../../assets/img/zs-university/bIcon1.png'),backImg:require('../../assets/img/zs-university/benefit1.jpg')},
          {info:'加快招商 <br>  精英成长进度',icon:require('../../assets/img/zs-university/bIcon2.png'),backImg:require('../../assets/img/zs-university/benefit2.jpg')},
          {info:'树立招商过程 <br>  中的服务意识',icon:require('../../assets/img/zs-university/bIcon3.png'),backImg:require('../../assets/img/zs-university/benefit3.jpg')},
          {info:'节约招商 <br>  人才培养成本',icon:require('../../assets/img/zs-university/bIcon4.png'),backImg:require('../../assets/img/zs-university/benefit4.jpg')},
          {info:'强化由内 <br>  而外的招商能力',icon:require('../../assets/img/zs-university/bIcon5.png'),backImg:require('../../assets/img/zs-university/benefit5.jpg')},
          {info:'助力招商 <br>  业务工作推进',icon:require('../../assets/img/zs-university/bIcon6.png'),backImg:require('../../assets/img/zs-university/benefit6.jpg')},
        ],
        trainingList:[
          {title:'精品<br>课程',desc:'实战经验高度萃取'},
          {title:'核心<br>师资',desc:'招商引资高端师资'},
          {title:'案例<br>研讨',desc:'工作案例分享研讨'},
          {title:'定制<br>方案',desc:'针对解决园区问题'},
          {title:'知行<br>合一',desc:'理论应用落地结合'},
          {title:'高效<br>产出',desc:'保证培训效果落地'}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  .px-university .bannerArea{
    background: url('../../assets/img/commonImg/zsdx.jpg') center center no-repeat;
    background-size: cover;
  }
  .info-title{
    font-size:32px;
    text-align: center;
  }
  .zs-problems{
    padding-top:86px;
    padding-bottom:89px;
  }
  .zs-prob-con{
    margin-top:53px;
  }
  .prob-list{
    width:100%;
    padding-bottom:100%;
    background: url('../../assets/img/zs-university/problem.png') 0 0 no-repeat;
    background-size: 100% 100%;
    position:relative;
  }
  .prob-con-inner{
    width:100%;
    height:100%;
    overflow: hidden;
    position:absolute;
    top:0;
    left:0;
    .index{
      text-align:left;
      font-size:60px;
      line-height: 20px;
      color:#3798f6;
      margin-left:25px;
      margin-top:30px;
    }
    .desc{
      margin-top:25px;
      padding-left:15px;
      font-size:13px;
      color:#798395;
      text-align:left;
      font-weight: bold;
    }
  }
  .training-benefit{
    padding-top:79px;
    background-color: #484b50;
    .info-title{
      color:#fff;
    }
  }
  .benefit-box{
    margin-top:67px;

  }
  .benefit-box-ul{
    width:100%;
    overflow: hidden;
    li{
      width:16.66%;
      float:left;
      height:346px;
    }
  }
  .benefit-box-con{
    width:100%;
    height:100%;

    background-size: 100% 100%;
    text-align: center;
    position: relative;
    &:hover{
      .benefit-box-con-inner{
        background-color:rgba(80,175,247,0.66) ;
      }
      .icon{
        margin-top:-20px;
      }
    }
    .benefit-box-con-inner{
      width:100%;
      height:100%;
      position:absolute;
      transition: all 0.5s ease-in-out;
      background-color: rgba(0,0,0,0.7);
    }
    .benefit-box-conWrapper{
      height:120px;
      position:absolute;
      margin:auto;
      top:0;
      left:0;
      bottom:0;
      right:0;
    }
    .icon{
      display: inline-block;
      width:50px;
      height:50px;
      transition: all 0.5s ease-in-out;

    }
    .info{
      color:#fff;
      line-height: 28px;
      font-size:18px;
      margin-top:10px;
    }
  }
  .training-project{
    padding-top:100px;
    padding-bottom:110px;
    .training-project-box{
      margin-top:66px;
    }
    .training-project-list{
      overflow: hidden;
      li{
        width:100%;
        float: left;
        font-size:20px;
        line-height: 36px;
        color:#ababab;
        text-align: left;
      }
    }

  }
  .training-advantage{
    padding-top:77px;
    padding-bottom:115px;
    background: url('../../assets/img/zs-university/trainingAd.png') 0 0 no-repeat;
    background-size: 100% 100%;
    .info-title{
     color:#fff;
    }
  }
  .training-advantage-box{
    margin-top:74px;
  }
  .training-advantage-con{
    color:#fff;
    text-align: center;
    .training-name{
      display: inline-block;
      width:100px;
      height:100px;
      padding-top:22px;
      background-color: #45a5ff;
      font-size:22px;
      border-radius: 50%;
      line-height: 28px;
    }
    .training-desc{
      margin-top:22px;
      font-size:18px;
    }
  }
  .elite-expert{
    padding-top:150px;
    padding-bottom:105px;
    .elite-expert-box{
      margin-top:95px;
    }
    .expert-con{
      width:100%;
      height:380px;

      color:#fff;
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
        padding:0 20px;
        margin-top:14px;
        font-size:14px;
        color:#d3cdcd;
        text-align: left;
      }
    }
  }
  .quick-connect{
    height:334px;
    background: url('../../assets/img/trade-map/map.jpg') 0 0 no-repeat;
    background-size: cover;
    position:relative;
    .connectBtn{
      cursor: pointer;
      width:365px;
      height:63px;
      background:#4285e7 ;
      color:#f8f8f8;
      font-size:18px;
      text-align: center;
      line-height: 63px;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
      a{
        display: inline-block;
        width:100%;
        height:100%;
        text-decoration: none;
        color:#fff;
      }
    }
  }
  @media(max-width:768px){
    .px-university .bannerArea{
      background: url('../../assets/img-phone/phone-pxdx.jpg') center center no-repeat;
      background-size: cover;
    }
    .zs-prob-con-item{
      margin-top:20px;
    }
    .zs-problems{
      padding-top:50px;
      padding-bottom:50px;
    }
    .training-benefit{
      padding-top:50px;
      padding-bottom:20px;
    }
    .benefit-box{
      margin-top:50px;
    }
    .benefit-box-ul li{
     width:33.3%;
      margin-bottom:20px;
    }
    .training-project{
      padding:50px 0;
    }
    .training-advantage-box-item{
      margin-bottom:20px;
    }
    .training-advantage{
      padding-top:50px;
      padding-bottom:50px;
    }
    .training-advantage-box{
      margin-top:50px;
    }
    .quick-connect{
      height:200px;
    }
    .quick-connect .connectBtn{
      width:250px;
      height:40px;
      line-height: 40px;
      font-size:16px;
    }
  }

</style>

