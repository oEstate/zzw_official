<template>
    <div class="gov-zs">
      <head-area>
        <template slot="banner">
          <div class="bannerArea" ></div>
        </template>
      </head-area>
      <div class="gov-zs-misunderstanding">
        <h3 class="info-title">招商引资误区</h3>
        <div class="zs-misD">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-xs-12 col-xs-offset-0 col-md-offset-1"  >
                  <div class="b-lazy misDList misDList1" :data-src="require('../../../static/img/zs-md/md1.png')">
                    <div class="misDCon">
                      <i class="misIcon misIcon1"></i>
                      <p class="md-title">误区一</p>
                      <p class="md-desc">招商引资只能在线下开展</p>
                    </div>
                  </div>
                  <div class="b-lazy misDList misDList2" :data-src="require('../../../static/img/zs-md/md2.png')" >
                    <div class="misDCon">
                      <i class="misIcon misIcon2"></i>
                      <p class="md-title">误区二</p>
                      <p class="md-desc">政府网站=园区网站=招商网站</p>
                    </div>
                  </div>
                  <div class="b-lazy misDList misDList3" :data-src="require('../../../static/img/zs-md/md3.png')">
                    <div class="misDCon">
                      <i class="misIcon misIcon3"></i>
                      <p class="md-title">误区三</p>
                      <p class="md-desc"> 招商局/园区+互联网=<br> 互联网+招商引资</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zs-reUnderstanding">
        <h3 class="info-title">重新认识招商引资</h3>
        <div class="zs-reUS-area">
          <div class="container">
            <div class="row">
            <div class="col-md-1 hidden-xs" ></div>
              <div :class="[index===3 ? 'phone_reUS' : '','col-md-2','col-xs-4','reUsItem']"  v-for="(item,index) in reUdList" :key="index">
                <div class="zs-re-list">
                  <div class="re-index">{{index+1}}</div>
                  <div class="re-desc">
                    {{item.title}}
                  </div>
                </div>
              </div></div>
          </div>
        </div>
      </div>
      <div class="zs-3Steps">
        <h3 class="info-title">招商引资 “三步曲”</h3>
        <div class="zs-3Steps-box">
          <div class="container">
            <div class="row">
              <div class="col-md-4" v-for="(item,index) in stepInfo" :key="index">
                <div class="zs-step-detail"  :style="{background:'url('+item.backImg+')center center no-repeat',backgroundSize:' cover'}">
                  <p class="step-info">{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-lazy zs-new-mode" :data-src="require('../../../static/img/zs-md/zsNewMode.jpg')">
        <h3 class="info-title">创新招商引资模式</h3>
        <p class="zzw-info-desc">
          招商引智：招商引资+招才引智，简称“双招双引”。招商引资是地方经济发展的重要途径，起到“输血强身”的作用；<br>招才引智是地方经济发展的动力保障，起到“造血强体”的功效 。利用互联网、大数据、云计算等高科技，实现信息的精准匹配，资源高效对接。
        </p>
        <div class="zs-new-modeBox">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-xs-6 zs-new-modeBox-item"  v-for="(item,index) in newModes" :key="index">
                <div class="modeList">
                  <i class="modeIcon" :style="{background:'url('+item.backImg+')',backgroundSize:'100%'}"></i>
                  <p class="modeTitle">{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zs-new-solution">
        <h3 class="info-title">招商引资整体解决方案</h3>
        <div class="new-solution-wrapper">
          <div class="new-solution-box  " :class="[index%2===0?'solution-type1':'solution-type2']" v-for="(item,index) in solutionList" :key="index">
            <div class="solution-left">
              <img class="b-lazy"
                   src="http://pic.zhizhaowang.cn/loding.gif"
                   :data-src="item.img"
                   alt="智招网-招商引资整体解决方案">
            </div>
            <div class="solution-right ">
              <div class="solution-wrapper">
                <h3 class="solution-title">{{item.title}}</h3>
                <h3 class="solution-tip">{{item.tip}}</h3>
                <p class="solution-con">{{item.con}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="zs-service">
        <h3 class="info-title">相关招商服务产品</h3>
        <div class="zzw-zs-box">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-xs-6" v-for="(item,index) in zs_serviceList" :key="index">
                <div class="zzw-zs-list">
                  <img  :src='item.imgUrl' alt="">
                  <p class="service-title">{{item.title}}</p>
                  <p class="service-desc">{{item.desc}}</p>
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
          stepInfo:[
            {title:'第一步曲：招商信息推广与客户信息获取',backImg:require('../../assets/img/zs-md/step1.jpg')},
            {title:'第二步曲：投资客户对接与商务考察洽谈',backImg:require('../../assets/img/zs-md/step2.jpg')},
            {title:'第三步曲：促成项目落地与提供增值服务',backImg:require('../../assets/img/zs-md/step3.jpg')},
          ],
          solutionList:[
            {title:'建设“政府招商引资数据中心”',tip:'突破潜在客商数据枯竭的瓶颈',con:'帮助地方政府量身定做，建设适合本地的“招商引资数据中心”，内容包括：招商项目库、客商数据库、投资意向库、项目选址库、专家人才库、高新技术库、政策数据库、产业报告、行业动态等。使招商人员有潜在目标客商可联系、可考察、可推介、可洽谈，从“盲扫”到精准招商引资。',img:require('../../assets/img/zs-md/solution1.jpg')},
            {title:'建设“城市智慧招商引资平台”',tip:'完善物理空间与虚拟空间双配套  修通招商引资的“高速公路”',con:'全球城市和园区逐渐向着科技化、创新化、智慧化转变。DT互联网时代，城市的发展需要创新模式，打破线下的物理空间限制，利用高科技，加强城市虚拟空间的配套，修通招商引资的高速公路——建设“城市智慧招商引资平台”，提升城市对信息的精准传播与获取、大数据的共享与计算、客商的匹配与智慧对接等整体服务能力。用数字技术、信息技术帮助城市提升竞争力，将成为城市经济发展的新引擎。',img:require('../../assets/img/zs-md/solution2.jpg')},
            {title:'建设“VR孪生智慧园区”',tip:'推动园区数字化、智慧化发展',con:'把物理空间的园区拍成VR，并植入实时数据，建成数字化孪生园区，让千里之外的客商通过智能设备（如手机、平板电脑、VR眼镜等终端）实现VR全景漫游，就可以远程720°直观考察园区全貌，了解园区的整体规划、基础设施、产业布局、项目地块、企业产品等相关信息，犹如身临其境，使考察变得方便快捷，大大节省“招、投”双方的时间及经济成本，促进客商去实地调研，实现远程精准招商。是园区宣传推广、塑造品牌、吸引客商投资的有效工具。',img:require('../../assets/img/zs-md/solution3.jpg')},
            {title:'VR项目库+项目投递+客商匹配',tip:'量身定制，从‘盲扫’到精准',con:'帮助城市/园区建设自己的“VR项目库”，发布各类招商引资项目，并通过智招网独有的“VR招商云”技术和海量的客商数据库，把招商项目定向推送给目标客户群；同时，把潜在客商匹配给招商部门，便于招商人员主动联系潜在投资客商。意向客商可以远程720°直观地考察，犹如就在现场，吸引客商实地考察，尽快达成投资意向，节约双方时间及经费等。',img:require('../../assets/img/zs-md/solution4.jpg')},
            {title:'产业链诊断+产业招商地图',tip:'',con:'根据全球产业格局、未来行业趋势、我国经济发展，结合本地资源禀赋，相对比较优势，通过智招网“产业模型”，梳理“主导产业”是否合理、“产业链”是否健全，实行“缺链招商、补链招商、强链招商”。\n' +
                '      产业招商地图对招商引资具有直接的指导作用，可以实现快速精准招商，提高招商资源配置效率，节约大量时间和经费。\n' +
                '      根据不同城市的产业链，利用智招网海量的数据库和先进的数据模型，帮助政府建设“产业招商地图”，快速匹配“产业链”上的相关企业，锁定目标客商，实现“产业链网”招商。',img:require('../../assets/img/zs-md/solution5.jpg')},
            {title:'招商培训+招商宝典',tip:'打造专业招商引资队伍',con:'帮助政府招商队伍学习科学的招商引资知识、先进的招商引资方法，结合智招网的招商能力、招商方法、先进工具、产业布局分析、行业趋势分析、政策解读等来打造专业的招商引资铁军。团队成员已为全国各地政府/园区提供招商引资培训及各种专题讲座800多场。',img:require('../../assets/img/zs-md/solution6.jpg')},
            {title:'线上+线下招商引资活动',tip:'连续成功承办五届“商务部投资促进局重点项目推介会”',con:'成功推介的城市/园区有：\n' +
                '      山东省济南市、浙江省桐乡市、四川省都江堰市、浙江丽缙科技产业园、新疆库尔勒国家级经开区、四川眉山机械产业园、泸州国家高新区等。',img:require('../../assets/img/zs-md/solution7.jpg')},
            {title:'招商策划  战略及产业规划  营商环境评估及提升',tip:'',con:'智招网与国家部委机关、中外知名科研咨询机构合作，为城市/园区提供战略及产业发展规划、招商引资策划、营商环境评估、城市营销等咨询顾问服务。\n' +
                '      已参与中国社科院城环所、商务部投促局等课题项目，为浙江丽水市、山西大同市、四川眉山机械产业园制定战略/产业发展规划、营商环境提升计划、产业招商地图、城市品牌营销等课题。',img:require('../../assets/img/zs-md/solution8.jpg')},
          ],
          reUdList:[
            {title:'招商引资的实质是营销城市。'},
            {title:'招商局/开发区就是政府的营销部。'},
            {title:'招商引资首要工作是解决信息不对称。'},
            {title:'高科技是实现信息对称的最好工具。'},
            {title:'招商引资要完善虚实空间双配套。'}
          ],
          zs_serviceList:[

            {title:'全网招商宣传',desc:'专属招商平台，强化对外宣传和推介',imgUrl:require('../../assets/img/zs-service/3.png')},
            {title:'精准招商',desc:'企业项目对接、解决招商经济指标',imgUrl:require('../../assets/img/zs-service/4.png')},
            {title:'委托招商',desc:'全方位招商引资代理服务',imgUrl:require('../../assets/img/zs-service/5.png')},
            {title:'营商环境评估',desc:'常态化评估机制，持续优化营商环境',imgUrl:require('../../assets/img/zs-service/6.png')},
            {title:'招商考察对接服务',desc:'驻点招商，项目精准对接',imgUrl:require('../../assets/img/zs-service/7.png')},
            {title:'网络推介会解决方案',desc:'企业邀约、项目输送',imgUrl:require('../../assets/img/zs-service/9.png')},
            {title:'招商品牌营销策略',desc:'精准触达目标群体，助力招商资源整合',imgUrl:require('../../assets/img/zs-service/10.png')},
            {title:'全景招商',desc:'VR全景漫游，远程考察投资环境',imgUrl:require('../../assets/img/zs-service/12.png')},
          ],
          newModes:[
            {title:'首创招商引资方式',backImg:require('../../assets/img/zs-md/mode1.png')},
            {title:'精准信息发布渠道',backImg:require('../../assets/img/zs-md/mode2.png')},
            {title:'权威顶级专家智库',backImg:require('../../assets/img/zs-md/mode3.png')},
            {title:'前沿核心能力技术',backImg:require('../../assets/img/zs-md/mode4.png')},
            {title:'海量企业机构资源',backImg:require('../../assets/img/zs-md/mode5.png')},
            {title:'优秀线上线下团队',backImg:require('../../assets/img/zs-md/mode6.png')},
          ]
        }
      },
      mounted(){
        this.Blazy();
      }
    }
</script>

<style scoped lang="scss">
  .zzw-zs-box{
    margin-top:30px;
  }
  .new-solution-wrapper{
    margin-top:130px;
    .new-solution-box{
      width:1040px;
      overflow: hidden;
      margin:0 auto 82px auto;
    }
    .solution-title{
      font-size:22px;
      color:#0641ad;
      margin-top:34px;
    }
    .solution-tip{
      font-size:16px;
      font-weight: bold;
      margin-top:20px;
    }
    .solution-con{
      font-size:16px;
      margin-top:10px;
      text-indent: 32px;
      text-align: left;
    }
  }
  .solution-type1{
    text-align: left;
    .solution-left,.solution-right{
      width:50%;
      float:left;
    }
    .solution-right{
      padding-left:49px;
    }
  }
  .solution-type2{
    text-align: right;
    .solution-left,.solution-right{
      width:50%;
      float:right;
    }
    .solution-right{
      padding-right:49px;
    }
  }
  .zs-3Steps{
    padding-top:136px;
    padding-bottom:142px;
    .zs-3Steps-box{
      margin-top:84px;
    }
    .zs-step-detail{
      padding-bottom:56.25%;
      position:relative;

      background-size: cover;
    }
    .step-info{
      width:100%;
      height:46px;
      line-height: 46px;
      text-align: left;
      color:#fff;
      padding:0 15px;
      font-size: 14px;
      background: rgba(0,0,0,0.5);
      position:absolute;
      left:0;
      bottom:0;
    }
  }
  .gov-zs .bannerArea{
    background: url('../../assets/img/commonImg/zfzs.jpg') center center no-repeat;
    background-size: cover;
  }
  .info-title{
    text-align: center;
    font-size: $title-size;
    color:#333;
  }
  .gov-zs-misunderstanding{
    padding-top:110px;
    padding-bottom:104px;
    .zs-misD{
      margin-top:100px;
    }
  }
  .misDList{
    width:266px;
    height:307px;
    color:#fff;
    display: inline-block;
    position:relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    .md-title{
      font-size: 18px;
      margin-top:27px;
      font-weight: 700;
    }
    .md-desc{
      font-size: 16px;
      margin-top:17px;
    }
    .misDCon{
      width:100%;
      height:170px;
      position:absolute;
      margin:auto;
      top:0;
      left:0;
      right:0;
      bottom:0;

    }
  }
  .misDList1{

    /*background: url('../../assets/img/zs-md/md1.png') 0 0 no-repeat;*/

  }
  .misDList2{
    width:301px;
    height:364px;
    margin-top: -30px;
    margin-left:20px;
    margin-right:20px;
    /*background: url('../../assets/img/zs-md/md2.png') 0 0 no-repeat;*/
    background-size: 100%;
  }
  .misDList3{
    /*background: url('../../assets/img/zs-md/md3.png') 0 0 no-repeat;*/
    background-size: 100%;
  }
  .misIcon{
    width:40px;
    height:40px;
    display: inline-block;
  }
  .misIcon1{
    background: url('../../assets/img/zs-md/mdicon1.png') 0 0 no-repeat;
    background-size: 100%;
  }
  .misIcon2{
    background: url('../../assets/img/zs-md/mdicon2.png') 0 0 no-repeat;
    background-size: 100%;
  }
  .misIcon3{
    background: url('../../assets/img/zs-md/mdicon3.png') 0 0 no-repeat;
    background-size: 100%;
  }
  .zs-reUnderstanding{
    padding-top:84px;
    padding-bottom:84px;
    background-color: #f8f8f8;
    text-align: center;
  }
  .zs-reUS-area{
    margin-top:66px;
    text-align: center;
  }
  .zs-re-list{
    display: inline-block;
    width:100%;
    height:310px;
    border:2px solid #3d7eff;
    border-radius: 100px;
    text-align: center;
    .re-index{
      display: inline-block;
      width:85px;
      height:85px;
      line-height: 85px;
      background-color:#3d7eff;
      border-radius: 50%;
      margin-top:35px;
      color:#fff;
      font-size:25px;
      font-weight: 700;
    }
  }
  .re-desc{
    padding:0 25px;
    margin-top:44px;
    font-size:16px;

  }
  .zs-service{
    padding-top:120px;
    padding-bottom:139px;
    .info-desc{
      margin-top:29px;
      font-size:16px;

    }
    .zs-service-box{
      margin-top:53px ;
    }
  }
  .zzw-zs-list{
    margin-top: 56px;
    letter-spacing: 1px;
    .service-title{
      font-size:15px;
      color:#333;
      font-weight: bold;
      margin-top:25px;
      margin-bottom: 20px;
    }
    .service-desc{
      font-size:14px;
      color:#999;
    }
  }
  .zs-new-mode{
    padding-top:66px;
    padding-bottom:77px;
    margin-bottom: 150px;
    /*background: url('../../assets/img/zs-md/zsNewMode.jpg') 0 0 no-repeat;*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .info-title{
      color:#fff;
    }
    .zzw-info-desc{
      color:#fff;
      font-size:16px;
      margin-top:58px;
      line-height: 28px;
    }
  }
  .modeList{
    width:100%;
  }
  .zs-new-modeBox{
    margin-top:108px;
    .modeIcon{
      width:106px;
      height:106px;
      display: inline-block;
      background:url('../../assets/img/zs-md/mode1.png') 0 0 no-repeat;
      background-size:100% 100% ;
    }
    .modeTitle{
      margin-top:35px;
      color:#fff;
      font-size:16px;
    }
  }
  .zzw-success-demo{
    padding:60px 0;
    margin-top:100px;
    background-color: #f8f8f8;
  }
  .success-demo-img{
    max-width:100%;
    margin-bottom: 40px;
  }
  .zzw-success-list{
    margin-top:79px;
  }
  @media(max-width:768px){
    .zzw-zs-list{
      min-height: 170px;
    }
    .new-solution-wrapper .new-solution-box{
      width:100%;
      margin-bottom:34px;
      .solution-left , .solution-right{
        width:100%;
        img{
          max-width: 100%;
        }
      }
    }
    .solution-type1 .solution-right{
      padding:0 15px;
    }
    .solution-type2 .solution-right{
      padding:0 15px;
      .solution-title,.solution-tip{
        text-align: left;
      }
    }
    .zs-3Steps{
      padding-top:50px;
      padding-bottom:50px;
      .zs-3Steps-box{
        margin-top: 50px;
      }
    }
    .zs-step-detail{
      margin-bottom: 20px;
    }
    .new-solution-wrapper{
      margin-top:50px;
    }
    .gov-zs .bannerArea{
      background: url('../../assets/img-phone/phone-zfzs.jpg') center center no-repeat;
      background-size: cover;
    }
    .gov-zs-misunderstanding{
      padding-top:50px;
      padding-bottom:50px;
    }
    .gov-zs-misunderstanding .zs-misD{
      margin-top:50px;
    }
    .misDList2{
      margin-top:20px;
    }
    .zs-reUnderstanding{
      padding-top:50px;
      padding-bottom:50px;
    }
    .zs-reUS-area{
      margin-top:50px;
    }
    .zs-re-list .re-index{
      width:60px;
      height:60px;
      line-height: 60px;
      margin-top:20px;
    }
    .zs-re-list{
      height:270px;
    }
    .re-desc{
      padding:0 16px;
      margin-top:26px;
    }
    .reUsItem{
      margin-bottom: 20px;
    }
    .phone_reUS{
      margin-left:68px;
    }
    .zs-service{
      padding-top:50px;
      padding-bottom:50px;
    }
    .zs-new-mode{
      padding-top:50px;
      padding-bottom:50px;
      margin-bottom:50px;
    }
    .zzw-info-desc{
      margin-top:50px;
      padding:0 15px;
    }
    .zs-new-modeBox{
      margin-top:50px;
      .modeTitle{
        margin-top:20px;
      }
    }
    .zs-new-modeBox-item{
      margin-bottom:30px;
    }


  }
</style>
