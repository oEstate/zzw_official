<template>
    <div class="homePage">
      <headArea>
        <template slot="tradeAndArea">
          <div class="tradeAndArea">
            <div class="func">
              <p  :class="{active:currentAT==='area'}" @click="toggleAT('area')">{{$t('nav.region')}}</p>
              <p :class="{active:currentAT==='trade'}" @click="toggleAT('trade')">{{$t('nav.trade')}}</p>
            </div>
            <div class="conListBox">
              <div class="conListInner">
                <div class="swiper-container" id="area-swiper" v-show="areaShow">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide " v-for="(item,index) in areaList" :key="index"    :style="{background:'url('+item.img+') center no-repeat '}" >
                      <p class="infoWrapper" @click="areaDetail(item.id,item.title,item.areaCode)">{{item.title}}</p>
                    </div>
                  </div>
                </div>
                <div class=" trade-swiper-wrapper">
                  <div class="swiper-container" id="trade-swiper" v-show="!areaShow">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(item,index) in tradeList" :key="index"  :style="{background:'url('+item.img+') center no-repeat ' }">
                        <p class="infoWrapper" @click="tradeDetail(item.tradeCode,item.nickName)">{{item.title}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev" v-show="areaShow" id="area-prev"></div>
                <div class="swiper-button-prev" v-show="!areaShow" id="trade-prev"></div>
                <div class="swiper-button-next" v-show="areaShow" id="area-next"></div>
                <div class="swiper-button-next" v-show="!areaShow" id="trade-next"></div>
              </div>
            </div>
          </div>
        </template>
        <template slot="banner">
          <div class="home-banner-Area">
            <div class="swiper-container banner-swiper " id="banner-swiper">
              <div class="swiper-wrapper"  >
                <div class="swiper-slide swiper-slide4" v-bind:style="{backgroundImage:$i18n.locale == 'zh' ? 'url(.../../../static/img/home/home-blh.jpg)' : 'url(.../../../static/img/home/home-blh-en.png)'}" url-link="blh-11">

                </div>
                <div class="swiper-slide swiper-slide5" v-bind:style="{backgroundImage:$i18n.locale == 'zh' ? 'url(.../../../static/img/home/home-ms.jpg)' : 'url(.../../../static/img/home/home-ms-en.jpg)'}">
                </div>
                <div class="swiper-slide swiper-slide1  swiper-animate">
                  <div class="info-box">
                    <h1 class="title ">{{$t('nav.top_banner_1')}}</h1>
                    <p class="desc">{{$t('nav.top_banner_1_1')}}</p>
                  </div>
                  <div class="info-img info-img1"></div>
                </div>
                <div class="swiper-slide swiper-slide2 swiper-animate"  >
                  <div class="info-box">
                    <h1 class="title ">{{$t('nav.top_banner_2')}}</h1>
                    <p class="desc">{{$t('nav.top_banner_2_1')}}</p>
                  </div>
                  <div class="info-img info-img2"></div>
                </div>
                <div class="swiper-slide swiper-slide3 swiper-animate"  >
                  <div class="info-box">
                    <h1 class="title ">{{$t('nav.top_banner_3')}}</h1>
                    <p class="desc">{{$t('nav.top_banner_3_1')}}</p>
                  </div>
                  <div class="info-img info-img3"></div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div  class="swiper-pagination " id="banner-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev hidden-xs"  id="banner-prev"></div>
              <div class="swiper-button-next hidden-xs" id="banner-next"></div>
            </div>
          </div>
        </template>
      </headArea>
      <div class="index-box-container">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-4 zzw-project-desc">
              <div >
                <h3 class="pro-desc-title" :title="$t('nav.zfzs')">{{$t('nav.zfzs')}}</h3>
                <p class="hidden-xs one-line" :title="$t('nav.zfzs_1')">{{$t('nav.zfzs_1')}}</p>
                <p class="hidden-xs one-line" :title="$t('nav.zfzs_2')">{{$t('nav.zfzs_2')}}</p>
              </div>
            </div>
            <div class="col-md-4 col-xs-4 zzw-project-desc">
              <div>
                <h3 class="pro-desc-title" :title="$t('nav.zsxqdj')">{{$t('nav.zsxqdj')}}</h3>
                <p class="hidden-xs one-line" :title="$t('nav.zsxqdj_1')">{{$t('nav.zsxqdj_1')}}</p>
                <p class="hidden-xs one-line" :title="$t('nav.zsxqdj_2')">{{$t('nav.zsxqdj_2')}}</p>
              </div>
            </div>
            <div class="col-md-4 col-xs-4 zzw-project-desc zzw-pro-desc-last">
              <div >
                <h3 class="pro-desc-title" :title="$t('nav.pxdx')">{{$t('nav.pxdx')}}</h3>
                <p class="hidden-xs one-line" :title="$t('nav.pxdx_1')">{{$t('nav.pxdx_1')}}</p>
                <p class="hidden-xs one-line" :title="$t('nav.pxdx_2')">{{$t('nav.pxdx_2')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zzw-zs-service">
        <div class="zzw-info-wrapper">
          <h3>{{$t('nav.zfzsfw')}}</h3>
        </div>
        <div class="zzw-zs-box">
          <div class="container">
            <div class="row">
              <div class="col-md-12 phone-col-set">
                <div class="govSwiperWrapper">
                  <div class="swiper-container" id="govSwiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(item,index) in govList" :key="index">
                        <div class="swiperImgWrapper">
                          <img :src="item.img" alt="">
                        </div>
                        <div class="swiperInfoWrapper">
                          <h2 :title="item.title">{{item.title}}</h2>
                          <p class="desc" :title="item.des">{{item.desc}}</p>
                          <p class="conInfo" :title="item.con">{{item.con}}</p>
                        </div>
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination" id="govPagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zzw-tr-service">
        <div class="zzw-info-wrapper">
          <h3 :title="$t('nav.qysjfw')">{{$t('nav.qysjfw')}}</h3>
        </div>
        <div class="zzw-tr-box ">
          <div class="container">
            <div class="row visible-xs" >
              <div class="col-md-3 col-xs-6"   v-for="(item,index) in tr_serviceList">
                <div class="zzw-tr-list">
                  <img  :src='item.imgUrl' alt="">
                  <p class="service-title">{{item.title}}</p>
                </div>
              </div>
            </div>
            <div class="row hidden-xs">
              <div class="col-md-12">
                <img v-if="$i18n.locale == 'en'" class="companyUpdates" src="../../assets/img/home/companyUpdate-en.png" alt="">
                <img v-if="$i18n.locale == 'zh'" class="companyUpdates" src="../../assets/img/home/companyUpdate.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zzw-developer-help">
        <div class="zzw-info-wrapper">
          <h3 :title="$t('nav.rccyjy')">{{$t('nav.rccyjy')}}</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img  class="rc-startingUp hidden-xs"
                    v-if="$i18n.locale == 'en'"
                    src="../../../static/img/home/rc-startingup-en.png"
                    alt="智招网人才创业就业"
              >
              <img  class="rc-startingUp hidden-xs"
                    v-if="$i18n.locale == 'zh'"
                    src="../../../static/img/home/rc-startingup.png"
                    alt="智招网人才创业就业"
              >
              <img  class="b-lazy rc-startingUp visible-xs"
                    src="http://pic.zhizhaowang.cn/loding.gif"
                    data-src="../../../static/img/home/rc-startUpPhone.png"
                    alt="智招网人才创业就业"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="zzw-data-field">
        <div class="zzw-info-wrapper">
          <h3 :title="$t('nav.wdsjwd')">{{$t('nav.wdsjwd')}}</h3>
          <p class="zzw-info-tips" >
            {{$t('nav.wdsjwd_f_1')}}<br>
            {{$t('nav.wdsjwd_f_2')}}
          </p>
        </div>
        <div class="zzw-data-box">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul class="zzw-data-ul">
                  <li class="zzw-data-li" v-for="(item,index) in data_fields" :key="index">
<!--                    :style="{background:'url('+item.backImg+')',backgroundSize:'100% 100%'}"-->
                    <div class="b-lazy zzw-data-filed-detail"  :data-src="item.backImg" >
                      <div class="zzw-data-filed-wrapper">
                        <p class="zzw-data-title">
                          <i class="field-icon" ><img :src="item.icon" alt=""></i><span class="field-name">{{item.title}}</span>
                        </p>
                        <p class="data-field-desc" v-html="item.desc"></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="zzw-zs-map">
        <div class="zzw-info-wrapper">
          <h3 :title="$t('nav.cydt')">{{$t('nav.cydt')}}</h3>
        </div>
        <div class="container zzw-zsMap-wrapper">
          <div class="row">
            <div class="col-md-7 ">
              <div class="zzw-zsMap-box">
                <img
                  class="b-lazy"
                  src="http://pic.zhizhaowang.cn/loding.gif"
                  :data-src="require('../../assets/img/home/home-map.jpg')"
                  alt="智招网产业招商地图/企业客户地图"
                >
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <ul class="zzw-zsMap-infoList">
                <li :title="$t('nav.cydt_1')">{{$t('nav.cydt_1')}}</li>
                <li :title="$t('nav.cydt_2')">{{$t('nav.cydt_2')}}</li>
                <li :title="$t('nav.cydt_3')">{{$t('nav.cydt_3')}}</li>
                <li :title="$t('nav.cydt_4')">{{$t('nav.cydt_4')}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="b-lazy zzw-quanjing hidden-xs" :data-src="quanjingImg">
      </div>
      <div class="b-lazy zzw-quanjingPhone visible-xs" :data-src="quanjingImgPhone">
      </div>
      <div class="zzw-news">
        <div class="zzw-info-wrapper">
          <h3 :title="$t('nav.zzwdt')">{{$t('nav.zzwdt')}}</h3>
          <div class="zzw-news-box">
            <div class="container">
              <div class="row">
                <div class="col-md-4 zzw-news-box-item" v-for="(item,index) in newsList" :key="index" @click="getDetailNews(item.id)" >
                  <div class="zzw-news-list">
                    <div  class=" zzw-news-img "  :style="{backgroundImage:'url('+item.coverUrl+')'}" >
                    </div>
                    <p class="news-title">
                      {{item.title}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="readMore" @click="moreNews">{{$t('nav.viewMore')}}</div>
        </div>
      </div>
      <backOldVersion></backOldVersion>
      <app-foot></app-foot>
    </div>
</template>

<script>
  import headArea from 'components/common/banner.vue'
  import backOldVersion from 'components/common/returnOld.vue'
  import appFoot from 'components/common/foot'
    export default {
      name: "index",
      components:{headArea,backOldVersion,appFoot},
      data(){
        return{
          ifMove:false,
          infoBoxList:'',
          infoImgList:'',
          zs_serviceList:[
            {title:'建设“政府招商引资数据中心”',desc:'突破潜在客商数据枯竭的瓶颈'},
            {title:'建设“城市智慧招商引资平台”',desc:'完善物理空间与虚拟空间双配套，修通招商引资的“高速公路”'},
            {title:'建设“VR孪生智慧园区”',desc:'推动园区数字化、智慧化发展'},
            {title:'VR项目库+项目投递+客商匹配',desc:'量身定制，从‘盲扫’到精准'},
            {title:'产业链诊断+产业招商地图',desc:'提高招商资源配置效率'},
            {title:'招商培训+招商宝典',desc:'打造专业招商引资队伍'},
            {title:'线上+线下招商引资活动',desc:'连续成功承办五届“商务部投资促进局重点项目推介会”'},
            {title:'招商策划+战略及产业规划+营商环境评估及提升',desc:'专业招商咨询策划服务，让招商更专业、更系统'},
          ],
          tr_serviceList:[
            {title:'企业选址',imgUrl:require('../../assets/img/tr-service/tr1.png')},
            {title:'产业链诊断',imgUrl:require('../../assets/img/tr-service/tr2.png')},
            {title:'政策导览',imgUrl:require('../../assets/img/tr-service/tr3.png')},
            {title:'园区库',imgUrl:require('../../assets/img/tr-service/tr4.png')},
            {title:'产业招商地图',imgUrl:require('../../assets/img/tr-service/tr5.png')},
            {title:'企业体检',imgUrl:require('../../assets/img/tr-service/tr6.png')},
            {title:'客户挖掘',imgUrl:require('../../assets/img/tr-service/tr7.png')},
            {title:'VR孪生企业',imgUrl:require('../../assets/img/tr-service/tr8.png')},
          ],
          data_fields:[
            {title:this.$t('nav.wdsjwd_1'),desc:this.$t('nav.wdsjwd_1_1'),icon:require('../../assets/img/data-field/field1.png'),backImg:require('../../assets/img/data-field/data-field1.jpg')},
            {title:this.$t('nav.wdsjwd_2'),desc:this.$t('nav.wdsjwd_2_1'),icon:require('../../assets/img/data-field/field2.png'),backImg:require('../../assets/img/data-field/data-field2.jpg')},
            {title:this.$t('nav.wdsjwd_3'),desc:this.$t('nav.wdsjwd_3_1'),icon:require('../../assets/img/data-field/field3.png'),backImg:require('../../assets/img/data-field/data-field3.jpg')},
            {title:this.$t('nav.wdsjwd_4'),desc:this.$t('nav.wdsjwd_4_1'),icon:require('../../assets/img/data-field/field4.png'),backImg:require('../../assets/img/data-field/data-field4.jpg')},
            {title:this.$t('nav.wdsjwd_5'),desc:this.$t('nav.wdsjwd_5_1'),icon:require('../../assets/img/data-field/field5.png'),backImg:require('../../assets/img/data-field/data-field5.jpg')}
          ],
          newsList:[],
          areaList:[
            {id:'AcSY3j7ueNpV61GfupZJLu',areaCode:'110000000000',title:this.$t('nav.BeiJing'),img:require('../../assets/img/area/北京.png')},
            {id:'Rwm4yDpKxyShN6oAav8hcn',areaCode:'120000000000',title:this.$t('nav.TianJin'),img:require('../../assets/img/area/天津1.png')},
            {id:'T3jumaEr79294wiS3J1yp7',areaCode:'130000000000',title:this.$t('nav.HeBei'),img:require('../../assets/img/area/河北.png')},
            {id:'3vtjYtbGUxLhPnescW6Ddt',areaCode:'140000000000',title:this.$t('nav.ShanXi'),img:require('../../assets/img/area/山西.png')},
            {id:'P4r1Km4eWhdFhnYR61Ut8q',areaCode:'150000000000',title:this.$t('nav.NeiMengGu'),img:require('../../assets/img/area/内蒙古.png')},
            {id:'Tzr88ZVShR7fFEwZtPJmF9',areaCode:'210000000000',title:this.$t('nav.LiaoNing'),img:require('../../assets/img/area/辽宁.png')},
            {id:'Esv9Lf74EnoDWghJQ4bF8M',areaCode:'220000000000',title:this.$t('nav.JiLin'),img:require('../../assets/img/area/吉林.png')},
            {id:'JH1rnj93nmNhVEbVC6mAeU',areaCode:'230000000000',title:this.$t('nav.HeiLongJiang'),img:require('../../assets/img/area/黑龙江.png')},
            {id:'6gJ5s4PLEn4irEkYG7iF7W',areaCode:'310000000000',title:this.$t('nav.ShangHai'),img:require('../../assets/img/area/上海.png')},
            {id:'JJL6tLvnxWEXgHuKjx1D6A',areaCode:'320000000000',title:this.$t('nav.JiangSu'),img:require('../../assets/img/area/江苏.png')},
            {id:'8fmQMNKY4GYDQgArxoFN5K',areaCode:'330000000000',title:this.$t('nav.ZheJiang'),img:require('../../assets/img/area/浙江.png')},
            {id:'81rVSJP6yL7V6EBLECgauz',areaCode:'340000000000',title:this.$t('nav.AnHui'),img:require('../../assets/img/area/安徽.png')},
            {id:'6D4onurKTL4dhyG9jtvkL6',areaCode:'350000000000',title:this.$t('nav.FuJian'),img:require('../../assets/img/area/福建.png')},
            {id:'4rjMThzJ5kd7jSddpewcXs',areaCode:'360000000000',title:this.$t('nav.JiangXi'),img:require('../../assets/img/area/江西.png')},
            {id:'GTwcQ3Tw7138h652ycuVjb',areaCode:'370000000000',title:this.$t('nav.ShanDong'),img:require('../../assets/img/area/山东.png')},
            {id:'6m1pi49QXMo4CYyLyjLmiP',areaCode:'410000000000',title:this.$t('nav.HeNan'),img:require('../../assets/img/area/河南.png')},
            {id:'LkP71G43E3Dtsgg696Wiwy',areaCode:'420000000000',title:this.$t('nav.HuBei'),img:require('../../assets/img/area/湖北.png')},
            {id:'Fx12qbJp86kuLGUtJXXc1',areaCode:'430000000000',title:this.$t('nav.HuNan'),img:require('../../assets/img/area/湖南1.png')},
            {id:'Gv2Vb6HbXEhxYyJf6JDSAB',areaCode:'440000000000',title:this.$t('nav.GuangDong'),img:require('../../assets/img/area/广东.png')},
            {id:'UJz3swQRRYKvefRpNMnoUY',areaCode:'450000000000',title:this.$t('nav.GuangXi'),img:require('../../assets/img/area/广西.png')},
            {id:'Vtesd1RbUHViaVTDKVS2vr',areaCode:'460000000000',title:this.$t('nav.HaiNan'),img:require('../../assets/img/area/海南.png')},
            {id:'8Tyhaz9kmYWYuHZxKKg2Lr',areaCode:'500000000000',title:this.$t('nav.ChongQing'),img:require('../../assets/img/area/重庆.png')},
            {id:'5J7NfTR5VXxace3UZYKXgc',areaCode:'510000000000',title:this.$t('nav.SiChuan'),img:require('../../assets/img/area/四川.png')},
            {id:'XapCWjD47HhYEwSXwpQDxV',areaCode:'520000000000',title:this.$t('nav.GuiZhou'),img:require('../../assets/img/area/贵州1.png')},
            {id:'EbZ98HbVvGaH2NSAZa1UEm',areaCode:'530000000000',title:this.$t('nav.YunNan'),img:require('../../assets/img/area/云南.png')},
            {id:'8Z3S6K8xBqUSXg91VaBhVr',areaCode:'540000000000',title:this.$t('nav.XiZang'),img:require('../../assets/img/area/西藏1.png')},
            {id:'Xna1TwMgYAWzoPjjkSabeg',areaCode:'610000000000',title:this.$t('nav.ShanXi_2'),img:require('../../assets/img/area/陕西.png')},
            {id:'QL87sR5PLY9Zy7scJyTpDr',areaCode:'620000000000',title:this.$t('nav.GanSu'),img:require('../../assets/img/area/甘肃.png')},
            {id:'6xU1CEP3k2uhL2UWSK3PxL',areaCode:'630000000000',title:this.$t('nav.QingHai'),img:require('../../assets/img/area/青海.png')},
            {id:'45eUwnwoEuqK8aGaSk5LLU',areaCode:'640000000000',title:this.$t('nav.NingXia'),img:require('../../assets/img/area/宁夏.png')},
            {id:'9vnEypL86sorc3qX1pZjmu',areaCode:'650000000000',title:this.$t('nav.XinJiang'),img:require('../../assets/img/area/新疆.png')},
            {id:'uFPPVvgqW7g8bVzpyeUiL',areaCode:'710000000000',title:this.$t('nav.TaiWan'),img:require('../../assets/img/area/台湾.png')},
            {id:'D3txAwRojJLXkKYnxq5Ufa',areaCode:'810000000000',title:this.$t('nav.XiangGang'),img:require('../../assets/img/area/香港.png')},
            {id:'4dYGvEnJnYB8MCYz9Xpckb',areaCode:'820000000000',title:this.$t('nav.Aomen'),img:require('../../assets/img/area/澳门.png')}
          ],
          tradeList:[
            {title:'农林牧渔',nickName:'农、林、牧、渔业',tradeCode:'A',img:require('../../assets/img/trade/农林牧渔.png')},
            {title:'采矿业',nickName:'采矿业',tradeCode:'B',img:require('../../assets/img/trade/采矿业.png')},
            {title:'制造业',nickName:'制造业',tradeCode:'C',img:require('../../assets/img/trade/制造业.png')},
            {title:'供应业',nickName:'电力、热力、燃气及水生产和供应业',tradeCode:'D',img:require('../../assets/img/trade/供应业.png')},
            {title:'建筑业',nickName:'建筑业',tradeCode:'E',img:require('../../assets/img/trade/建筑业.png')},
            {title:'批发零售',nickName:'批发和零售业',tradeCode:'F',img:require('../../assets/img/trade/批发零售.png')},
            {title:'交通运输',nickName:'交通运输、仓储和邮政业',tradeCode:'G',img:require('../../assets/img/trade/交通运输.png')},
            {title:'住宿餐饮',nickName:'住宿和餐饮业',tradeCode:'H',img:require('../../assets/img/trade/住宿餐饮.png')},
            {title:'信息技术',nickName:'信息传输、软件和信息技术服务业',tradeCode:'I',img:require('../../assets/img/trade/信息技术.png')},
            {title:'金融',nickName:'金融业',tradeCode:'J',img:require('../../assets/img/trade/金融.png')},
            {title:'房地产业',nickName:'房地产业',tradeCode:'K',img:require('../../assets/img/trade/房地产业.png')},
            {title:'租赁服务',nickName:'租赁和商务服务业',tradeCode:'L',img:require('../../assets/img/trade/租赁服务.png')},
            {title:'信息技术',nickName:'科学研究和技术服务业',tradeCode:'M',img:require('../../assets/img/trade/信息技术.png')},
            {title:'水利环境',nickName:'水利、环境和公共设施管理业',tradeCode:'N',img:require('../../assets/img/trade/水利环境.png')},
            {title:'居民服务',nickName:'居民服务、修理和其他服务业',tradeCode:'O',img:require('../../assets/img/trade/居民服务.png')},
            {title:'教育',nickName:'教育',tradeCode:'P',img:require('../../assets/img/trade/教育.png')},
            {title:'卫生社会',nickName:'卫生和社会工作',tradeCode:'Q',img:require('../../assets/img/trade/卫生社会.png')},
            {title:'文体娱乐',nickName:'文化、体育和娱乐业',tradeCode:'R',img:require('../../assets/img/trade/文体娱乐.png')},
            {title:'公共管理',nickName:'公共管理、社会保障和社会组织',tradeCode:'S',img:require('../../assets/img/trade/公共管理.png')},
            {title:'国际组织',nickName:'国际组织',tradeCode:'T',img:require('../../assets/img/trade/国际组织.png')},

          ],
          govList:[
            {title:this.$t('nav.zfzsfw_1'),desc:this.$t('nav.zfzsfw_1_1'),con:this.$t('nav.zfzsfw_1_2'),img:require('../../assets/img/home/gov-gov.jpg')},
            {title:this.$t('nav.zfzsfw_2'),desc:this.$t('nav.zfzsfw_2_1'),con:this.$t('nav.zfzsfw_2_2'),img:require('../../assets/img/home/gov-area.jpg')},
            {title:this.$t('nav.zfzsfw_3'),desc:this.$t('nav.zfzsfw_3_1'),con:this.$t('nav.zfzsfw_3_2'),img:require('../../assets/img/home/gov-park.jpg')},
          ],
          currentAT:'area', //区域 行业的切换
          areaShow:true,
          quanjingImg:require('../../../static/img/home/vr_qj.jpg'),
          quanjingImgPhone:require('../../../static/img/home/quanjing-phone.jpg'),
        }
      },
      mounted() {
        this.Blazy();
        this.initSwiper();
        this.zzw_news();

      },
      watch: {    //侦听器
        '$i18n.locale': function (val) {       //侦听单选按钮的变化，从而进行切换语言
          let _arr = [
            {title:this.$t('nav.zfzsfw_1'),desc:this.$t('nav.zfzsfw_1_1'),con:this.$t('nav.zfzsfw_1_2'),img:require('../../assets/img/home/gov-gov.jpg')},
            {title:this.$t('nav.zfzsfw_2'),desc:this.$t('nav.zfzsfw_2_1'),con:this.$t('nav.zfzsfw_2_2'),img:require('../../assets/img/home/gov-area.jpg')},
            {title:this.$t('nav.zfzsfw_3'),desc:this.$t('nav.zfzsfw_3_1'),con:this.$t('nav.zfzsfw_3_2'),img:require('../../assets/img/home/gov-park.jpg')}
          ]
          let _arr2 = [
            {title:this.$t('nav.wdsjwd_1'),desc:this.$t('nav.wdsjwd_1_1'),icon:require('../../assets/img/data-field/field1.png'),backImg:require('../../assets/img/data-field/data-field1.jpg')},
            {title:this.$t('nav.wdsjwd_2'),desc:this.$t('nav.wdsjwd_2_1'),icon:require('../../assets/img/data-field/field2.png'),backImg:require('../../assets/img/data-field/data-field2.jpg')},
            {title:this.$t('nav.wdsjwd_3'),desc:this.$t('nav.wdsjwd_3_1'),icon:require('../../assets/img/data-field/field3.png'),backImg:require('../../assets/img/data-field/data-field3.jpg')},
            {title:this.$t('nav.wdsjwd_4'),desc:this.$t('nav.wdsjwd_4_1'),icon:require('../../assets/img/data-field/field4.png'),backImg:require('../../assets/img/data-field/data-field4.jpg')},
            {title:this.$t('nav.wdsjwd_5'),desc:this.$t('nav.wdsjwd_5_1'),icon:require('../../assets/img/data-field/field5.png'),backImg:require('../../assets/img/data-field/data-field5.jpg')}
          ]
          let _arr3 = [
            {id:'AcSY3j7ueNpV61GfupZJLu',areaCode:'110000000000',title:this.$t('nav.BeiJing'),img:require('../../assets/img/area/北京.png')},
            {id:'Rwm4yDpKxyShN6oAav8hcn',areaCode:'120000000000',title:this.$t('nav.TianJin'),img:require('../../assets/img/area/天津1.png')},
            {id:'T3jumaEr79294wiS3J1yp7',areaCode:'130000000000',title:this.$t('nav.HeBei'),img:require('../../assets/img/area/河北.png')},
            {id:'3vtjYtbGUxLhPnescW6Ddt',areaCode:'140000000000',title:this.$t('nav.ShanXi'),img:require('../../assets/img/area/山西.png')},
            {id:'P4r1Km4eWhdFhnYR61Ut8q',areaCode:'150000000000',title:this.$t('nav.NeiMengGu'),img:require('../../assets/img/area/内蒙古.png')},
            {id:'Tzr88ZVShR7fFEwZtPJmF9',areaCode:'210000000000',title:this.$t('nav.LiaoNing'),img:require('../../assets/img/area/辽宁.png')},
            {id:'Esv9Lf74EnoDWghJQ4bF8M',areaCode:'220000000000',title:this.$t('nav.JiLin'),img:require('../../assets/img/area/吉林.png')},
            {id:'JH1rnj93nmNhVEbVC6mAeU',areaCode:'230000000000',title:this.$t('nav.HeiLongJiang'),img:require('../../assets/img/area/黑龙江.png')},
            {id:'6gJ5s4PLEn4irEkYG7iF7W',areaCode:'310000000000',title:this.$t('nav.ShangHai'),img:require('../../assets/img/area/上海.png')},
            {id:'JJL6tLvnxWEXgHuKjx1D6A',areaCode:'320000000000',title:this.$t('nav.JiangSu'),img:require('../../assets/img/area/江苏.png')},
            {id:'8fmQMNKY4GYDQgArxoFN5K',areaCode:'330000000000',title:this.$t('nav.ZheJiang'),img:require('../../assets/img/area/浙江.png')},
            {id:'81rVSJP6yL7V6EBLECgauz',areaCode:'340000000000',title:this.$t('nav.AnHui'),img:require('../../assets/img/area/安徽.png')},
            {id:'6D4onurKTL4dhyG9jtvkL6',areaCode:'350000000000',title:this.$t('nav.FuJian'),img:require('../../assets/img/area/福建.png')},
            {id:'4rjMThzJ5kd7jSddpewcXs',areaCode:'360000000000',title:this.$t('nav.JiangXi'),img:require('../../assets/img/area/江西.png')},
            {id:'GTwcQ3Tw7138h652ycuVjb',areaCode:'370000000000',title:this.$t('nav.ShanDong'),img:require('../../assets/img/area/山东.png')},
            {id:'6m1pi49QXMo4CYyLyjLmiP',areaCode:'410000000000',title:this.$t('nav.HeNan'),img:require('../../assets/img/area/河南.png')},
            {id:'LkP71G43E3Dtsgg696Wiwy',areaCode:'420000000000',title:this.$t('nav.HuBei'),img:require('../../assets/img/area/湖北.png')},
            {id:'Fx12qbJp86kuLGUtJXXc1',areaCode:'430000000000',title:this.$t('nav.HuNan'),img:require('../../assets/img/area/湖南1.png')},
            {id:'Gv2Vb6HbXEhxYyJf6JDSAB',areaCode:'440000000000',title:this.$t('nav.GuangDong'),img:require('../../assets/img/area/广东.png')},
            {id:'UJz3swQRRYKvefRpNMnoUY',areaCode:'450000000000',title:this.$t('nav.GuangXi'),img:require('../../assets/img/area/广西.png')},
            {id:'Vtesd1RbUHViaVTDKVS2vr',areaCode:'460000000000',title:this.$t('nav.HaiNan'),img:require('../../assets/img/area/海南.png')},
            {id:'8Tyhaz9kmYWYuHZxKKg2Lr',areaCode:'500000000000',title:this.$t('nav.ChongQing'),img:require('../../assets/img/area/重庆.png')},
            {id:'5J7NfTR5VXxace3UZYKXgc',areaCode:'510000000000',title:this.$t('nav.SiChuan'),img:require('../../assets/img/area/四川.png')},
            {id:'XapCWjD47HhYEwSXwpQDxV',areaCode:'520000000000',title:this.$t('nav.GuiZhou'),img:require('../../assets/img/area/贵州1.png')},
            {id:'EbZ98HbVvGaH2NSAZa1UEm',areaCode:'530000000000',title:this.$t('nav.YunNan'),img:require('../../assets/img/area/云南.png')},
            {id:'8Z3S6K8xBqUSXg91VaBhVr',areaCode:'540000000000',title:this.$t('nav.XiZang'),img:require('../../assets/img/area/西藏1.png')},
            {id:'Xna1TwMgYAWzoPjjkSabeg',areaCode:'610000000000',title:this.$t('nav.ShanXi_2'),img:require('../../assets/img/area/陕西.png')},
            {id:'QL87sR5PLY9Zy7scJyTpDr',areaCode:'620000000000',title:this.$t('nav.GanSu'),img:require('../../assets/img/area/甘肃.png')},
            {id:'6xU1CEP3k2uhL2UWSK3PxL',areaCode:'630000000000',title:this.$t('nav.QingHai'),img:require('../../assets/img/area/青海.png')},
            {id:'45eUwnwoEuqK8aGaSk5LLU',areaCode:'640000000000',title:this.$t('nav.NingXia'),img:require('../../assets/img/area/宁夏.png')},
            {id:'9vnEypL86sorc3qX1pZjmu',areaCode:'650000000000',title:this.$t('nav.XinJiang'),img:require('../../assets/img/area/新疆.png')},
            {id:'uFPPVvgqW7g8bVzpyeUiL',areaCode:'710000000000',title:this.$t('nav.TaiWan'),img:require('../../assets/img/area/台湾.png')},
            {id:'D3txAwRojJLXkKYnxq5Ufa',areaCode:'810000000000',title:this.$t('nav.XiangGang'),img:require('../../assets/img/area/香港.png')},
            {id:'4dYGvEnJnYB8MCYz9Xpckb',areaCode:'820000000000',title:this.$t('nav.Aomen'),img:require('../../assets/img/area/澳门.png')}
          ]
          this.govList = [..._arr];
          this.data_fields = [..._arr2];
          this.areaList = [..._arr3]
        }
      },
      methods:{
      animateCSS(element, animationName, callback) {
        let self=this;
        self.ifMove=false;
        const node = document.querySelectorAll(element);
         for(let i=0;i<node.length;i++){
           node[i].classList.add('animated','delay-0.5s',animationName);
           node[i].addEventListener('animationend', handleAnimationEnd)
         }
        function handleAnimationEnd() {
          this.classList.remove('animated','delay-0.5s', animationName)
          this.removeEventListener('animationend', handleAnimationEnd)
          self.ifMove=true;
          self.cleanTransform();
          if (typeof callback === 'function') callback()
        }
      },
        moreNews(){
          this.$router.push({path: '/news'});
        },
        toggleAT(type){
          if(type==='area'){
            this.areaShow=true;
          }else{
            this.areaShow=false;
            setTimeout(()=>{
              this.initTradeSwiper();
            },0)
          }
          this.currentAT=type
        },
        areaDetail(id,title,areaCode){
          console.log(areaCode)
          this.newWin(`http://data.zhizhaowang.cn/index/cityList/${id}/${title}?areaCode=${areaCode}`)
        },
        tradeDetail(tradeCode,tradeName){
          this.newWin(`http://data.zhizhaowang.cn/index/vrInfo?tradeCode=${tradeCode}&tradeName=${tradeName}`)
        },
        initSwiper(){
          let self= this;
          let mySwiper = new Swiper ('#banner-swiper', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '#banner-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '#banner-next',
              prevEl: '#banner-prev',
            },
            on:{
              click:function(e){
                let url=e.srcElement.attributes['url-link']
                if(url){
                  let _url=url.nodeValue;
                  self.newWin(location.href+_url)
                }
              },
              transitionStart: function(){
                self.animateCSS('.info-box','fadeInUp');
                self.animateCSS('.info-img','fadeInUp');
              }
            }
          });
          mySwiper.el.onmousemove = function(e){
            if(self.ifMove){
              e=e||window.event;
              let movex,movey;
              if(e.pageX||e.pageY){
                movex=e.pageX;
                movey=e.pageY;
              }
             anime({
                targets: '.info-img',
                translateX: parseInt(movex / 25),
                translateY:parseInt( movey / 25),
                rotateX:parseInt( -movey / 150),
                rotateY: parseInt(movex / 150),
                duration: 1000,
                easing: 'easeOutCirc'
              });
              anime({
                targets: '.info-box',
                translateX: parseInt(movex / 50),
                translateY:parseInt( movey / 50),
                rotateX:parseInt( -movey / 300),
                rotateY: parseInt(movex / 300),
                duration: 1000,
                easing: 'easeOutCirc'
              });
            }
          }
          mySwiper.params.pagination.clickable = true ;
//此外还需要重新初始化pagination
          mySwiper.pagination.destroy()
          mySwiper.pagination.init()
          mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
          let ATSwiper = new Swiper('#area-swiper',{
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView:'auto',
            spaceBetween: 20,
            autoplay: false,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '#area-next',
              prevEl: '#area-prev',
            }
          })
          let govSwiper = new Swiper('#govSwiper', {
            direction: 'vertical',
            autoplay: true,
            pagination: {
              el: '#govPagination',
              clickable: true,
            }
          });

        },
        initTradeSwiper(){
          let ATSwiper = new Swiper('#trade-swiper',{
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView:'auto',
            spaceBetween: 20,
            autoplay: false,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '#trade-next',
              prevEl: '#trade-prev',
            }
          })
        },
        cleanTransform(){
          let infoBoxList=document.querySelectorAll('.info-box');
          let infoImgList=document.querySelectorAll('.info-img');
          infoBoxList.forEach(function(item){
            item.style.transform='translateX(0) translateY(0) rotateX(0deg) rotateY(0deg)';
          })
          infoImgList.forEach(function(item){
            item.style.transform='translateX(0) translateY(0) rotateX(0deg) rotateY(0deg)';
          })

        },
        zzw_news(){
          let prefix='http://www.zhizhaowang.cn:8088/index/pano/rama/content/bycolumnid?'
          axios.get(prefix+`columnId=DsgdobqySY7zdTCSrVELnOfsH&pageNo=1&pageSize=3`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              let _result=result.data.Panoramacontent;
              for(let i=0;i<_result.length;i++){
                _result[i].coverUrl='http://cdn.zhizhaowang.cn/'+_result[i].coverUrl
              }
              this.newsList=_result;
            }
          })
        },
        getDetailNews(id){
          this.$router.push({path: '/news?id='+id+'&type=zzw_news'});
        },
      }
    }
</script>
<style lang="scss">
  .home-banner-Area .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    width:44px;
    height:6px;
    background: #fff;
    border-radius:0;
  }
   .govSwiperWrapper .swiper-container-vertical>.swiper-pagination-bullets  .swiper-pagination-bullet{
    width:12px;
    height:12px;
     margin:11px 0;
  }
  .govSwiperWrapper .swiper-pagination-bullet-active{
    background-color: #222836;
  }
</style>
<style scoped lang="scss">
  .swiper-animate{
    position:relative;
    width:100%;
    height:100%;
    padding:0 200px;
    text-align: left;
    overflow:hidden;
    .info-box{
      margin-top: 150px;
      float:left;
      .title{
        font-size: 40px;
        color:#fff;
        max-width: 800px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .desc{
        font-size: 20px;
        color:#aaabad;
        margin-top:20px;
        display: inline-block;
        position:relative;
        &::after{
          content:'';
          display: inline-block;
          width:60px;
          height:4px;
          background-color:#1afef6 ;
          position:absolute;
          bottom:-30px;
          left:0;

        }
      }
    }
    .info-img{
      float:right;
      width:450px;
      height:100%;

    }
    .info-img1{
      background: url('../../assets/img/home/banner1.png') 0 center no-repeat ;
      background-size: 450px 240px;
    }
    .info-img2{
      background: url('../../assets/img/home/banner2.png') 0 center no-repeat ;
      background-size: 310px 350px;
    }
    .info-img3{
      background: url('../../assets/img/home/banner3.png') 0 center no-repeat ;
      background-size: 450px 240px;
    }
  }
  .one-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .zzw-zsMap-wrapper{
    margin-top:80px;
  }
  .companyUpdates{
    margin:0 auto;
  }
  .zzw-tr-box{
    margin-top:100px;
  }
  .govSwiperWrapper{
    height:330px;
    text-align: left;
    .swiperImgWrapper{
      width:450px;
      float:left;
      margin-right:50px;
      img{
        max-width:100%;
      }
    }
    .swiperInfoWrapper{
      width:550px;
      float:left;
      color:#333;
      h2{
        font-size:30px;
        margin-bottom:10px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .desc{
        font-size:22px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .conInfo{
        margin-top:30px;
        font-size:17px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        overflow: hidden;
      }
    }

  }

  .service-index-tag{
    display: inline-block;
    width:70px;
    height:70px;
    background: url('../../../static/img/home/zs-index.png') center center no-repeat;
    background-size: 100% ;
    position:absolute;
    top:-35px;
    left:50%;
    transform: translateX(-50%);
    font-size:24px ;
    line-height: 70px;
    color:#0102ff;

  }
  .zzw-zs-box{
    margin-top:90px;
  }
  .zs-index-list:nth-of-type(8){
    .service-desc{
      margin-top:-27px;
    }
  }
  .service-con-v1{
    position:relative;
    height:219px;
    padding:0 3px;
    border:1px solid #cacaca;
    margin-bottom:58px;
    color:#333;
    .service-title{
      margin-top:79px;
      margin-bottom: 30px;
      font-size: 17px ;
      font-weight:700;
    }
    .service-desc{
      font-size: 16px;
      font-weight:400;
    }
  }
  .zzw-market{
    width:100%;
    padding-bottom:25.6%;
    background-size: cover;
  }
  .zzw-marketPhone{
    width:100%;
    padding-bottom:40%;
    background-size: cover;
  }
  .readMore{
    width:130px;
    height:38px;
    line-height: 38px;
    font-size: 16px;
    border:1px solid #4173f4;
    color:#4173f4;
    margin-left: auto;
    margin-right: auto;
    margin-top:50px;
    cursor:pointer;
  }
  .zzw-source{
    padding-bottom:130px;
    .source-analysis{
      margin:0 auto;
      width:438px;
      height:360px;
      background: url('../../../static/img/home/source3.png') center center no-repeat;
      background-size: cover;
    }
  }
  .zzw-source-box{
    padding-top:50px;
    .source-desc-list{
      width:100%;
      overflow: hidden;
      text-align: left;
      font-size: 24px;
      padding-left:50px;
      li{
        width:100%;
        float:left;
        line-height: 60px;
        margin-top:20px;
        span{
          color:#3d7eff;
          margin-right:15px;
          font-weight: 700;
        }
      }
    }
  }
  .zzw-zs-map{
    padding-top:30px;
    padding-bottom:30px;
    .zzw-zsMap-infoList{
      width:100%;
      margin-top:70px;
      margin-left:70px;
      &::after{
        content:"";
        display:block;
        clear:both;

      }
      li{
        width:100%;
        float:left;
        position:relative;
        text-align: left;
        font-size:24px;
        line-height: 60px;
        color:#333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        &:before{
          content:'' ;
          display: inline-block;
          width:18px;
          height:18px;
          position:absolute;
          left:-28px;
          top:23px;
          background: url('../../../static/img/home/time.png') 0 0 no-repeat ;
          background-size: 100% 100%;
        }
      }
    }
  }
  .swiper-slideInner{
    width:100%;
    height:100%;
  }
  .swiper-slide4{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .swiper-slide5{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .swiper-slide1,.swiper-slide2,.swiper-slide3{
    background: url("../../assets/img/home/bannerBg.jpg") center center no-repeat;
    background-size: cover;
  }
  .banner-swiper{
    img{
      width:100%;
      height:100%;
    }
  }
  .zzw-news-box{
      margin-top:50px;
  }
  .zzw-news-list{
    cursor:pointer;
    width:100%;
    overflow: hidden;
    &:hover{
      .news-title{
        color:#619fed;
      }
      .zzw-news-img{
        background-size: 110% 110%;
      }
    }
    .zzw-news-img{
      float:left;
      width:100%;
      padding-bottom:56.25%;
      background-position: center center;
      background-size: 100% 100%;
      transition: all 0.5s ease-in-out;
    }
    .news-title{
      width:100%;
      float:left;
      height:50px;
      text-align: left;
      padding:0 15px;
      background-color: #fff;
      font-size:16px;
      line-height: 50px;
      color:#333;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      transition: all 0.5s ease-in-out;
    }

  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .zzw-quanjing{
    width:100%;
    padding-bottom: 20%;
    background-position: center center;
    background-size:cover;
  }
  .zzw-quanjingPhone{
    width:100%;
    padding-bottom: 40%;
    background-position: center center;
    background-size:cover;
  }
  .index-box-container{
    height:136px;
    background:#222836 ;
  }
  .zzw-project-desc{
    color:#fff;
    height:136px;
    border-left:1px solid #3a404d;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    &:hover{
      background-color: #2c3343;
    }
    .pro-desc-title{
      font-size: 18px;
      font-weight: 900;
      padding:35px 0 0px 0;
      letter-spacing: 1px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

    }
    p{
      font-size:14px;
      color:#abcedc;
      line-height:26px;
      letter-spacing: 1px;
    }
  }
  .zzw-pro-desc-last{
    border-right:1px solid #3a404d;
  }
  .zzw-info-wrapper{
    text-align: center;
    color:#333;
    h3{
      font-size: $title-size;
      margin-top:85px;
      margin-bottom:30px;
    }
    .zzw-info-tips{
      font-size:16px;
      color:#333;
      line-height: 28px;
    }
    .zzw-tr-tips{
      margin-bottom:70px;
    }
  }
  .zzw-zs-list,.zzw-tr-list{
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
  .zzw-zs-service{
    padding-bottom:78px;
  }
  .zzw-tr-service{
    padding-bottom:60px;
    background-color:#f7f8fa ;
    overflow: hidden;
    .zzw-tr-list{
      background-color: #fff;
      padding:26px 0;
      margin-top:0;
      margin-bottom:30px;
    }
  }
  .rc-startingUp{
    max-width: 100%;
    margin-top:60px;
    margin-bottom:150px;
  }
  .zzw-data-field {
    overflow: hidden;
    background-color:#313131 ;

    .zzw-info-wrapper .zzw-info-tips{
      color:#fff;
    }
    .zzw-info-wrapper h3{
      color:#fff;
    }
  }
  .zzw-data-box{
    margin-top:60px;
    color:#fff;
  }
  .zzw-data-ul{
    width:100%;
    overflow: hidden;
    li{
      width:20%;
      height:366px;
      float:left;
      .zzw-data-filed-wrapper{
        width:100%;
        height:100%;
        transition: background-color 0.3s ease-in-out;
        &:hover{
          background-color:rgba(31,126,186,0.66) ;
          .zzw-data-title{
            margin-top: 100px;
          }
        }
      }
    }
    .zzw-data-filed-detail{
      width:100%;
      height:100%;
      p{
        display: inline-block;
        width:100%;
      }
    }
  }
  .zzw-data-title{
    font-size:18px;
    margin-bottom:26px;
    margin-top:130px;
    transition: margin-top 0.5s ease-in-out;
    .field-icon{
      width:24px;
      height:24px;
      line-height: 24px;
      display: inline-block;
      margin-right: 7px;
      img{
        width:100%;
        height:100%;
        margin-top: -5px;
      }
    }
  }
  .data-field-desc{
    font-size: 15px;
    line-height: 28px;
    padding: 0 15px;
  }
  .zzw-zsMap-box{
    width:100%;
    text-align: center;
    img{
      max-width:100%;
      margin-bottom:100px;
    }
  }
  .zzw-news{
    overflow: hidden;
    background-color:#f7f8fa ;
    padding-bottom:50px;
  }
  .tradeAndArea{
    width:100%;
    height:64px;
    background-color: #222836;
    color:#fff;
    position:relative;
    .func{
      position:absolute;
      top:0;
      left:0;
      width:70px;
      height:100%;
      .active{
        background-color:#2c3343;
      }
      p{
        width:100%;
        height:32px;
        font-size: 16px;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
      }
    }
    .conListBox{
      width:100%;
      height:100%;
      padding-left:70px;
    }
    .conListInner{
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,0.2);
      position:relative;
      padding:8px 40px;

    }
    .swiper-container{
      width:100%;
      height:100%;
      .swiper-wrapper{
        .swiper-slide{
          width:48px;
          height:48px;
          background-color: red;
          border-radius: 5px;
          .infoWrapper{
            width: 100%;
            height: 100%;
            cursor: pointer;
            background-color: rgba(0,0,0,0.3);
            display: flex;
            text-align: center;
            border-radius: 3px;
            word-break: break-all;
            justify-content: center;
            align-items: center;
            &:hover{
              background-color: rgba(0,0,0,0.5);
            }
          }
        }
      }

    }
    .trade-swiper-wrapper .swiper-wrapper{
      .swiper-slide{
        width:80px;
      }
    }
    .swiper-button-prev{
      position:absolute;
      width:10px;
      height:18px;
      left:10px;
      top:45px;
      color:#fff;
      background:url('../../assets/img/home/prev.png') center center no-repeat;
      background-size: contain;
    }
    .swiper-button-next{
      position:absolute;
      width:10px;
      height:18px;
      right:10px;
      top:45px;
      background:url('../../assets/img/home/next.png') center center no-repeat;
      background-size: contain;
    }
  }
  @media(max-width: 768px){
    .swiper-animate{
      width:100%;
       padding:0;
      text-align: center;
      .info-box {
        width:100%;
        margin-top:180px;
        .title{
          width:100%;
          font-size:22px;
        }
        .desc{
          width:100%;
          display: inline-block;
          font-size: 16px;
          color:#fff;
          &::after{
            display: none;
          }
        }
      }
      .info-img{
        position:absolute;
        width:100%;
        height:150px;
        top:10px;
        left:0;
        background-size: contain;
        background-position: center center;
      }
    }
    .govSwiperWrapper{
      height:360px;
      .swiperImgWrapper{
        width:100%;
        height:100%;
        img{
          width:100%;
          height:100%;
        }
      }
      .swiperInfoWrapper{
        padding:15px;
       width:100%;
        height:100%;
        h2{
          font-size: 24px;
        }
        .desc{
          font-size: 18px;
        }
        .conInfo{
          font-size: 16px;
        }
      }
      .swiper-slide{
        position:relative;
        .swiperInfoWrapper{
          position:absolute;
          top:0;
          left:0;
          z-index:500;
          background-color: rgba(0,0,0,0.5);
          color:#fff;
        }
      }
    }

    .zzw-zs-box{
      margin-top:50px;
    }
    .zzw-info-wrapper h3{
      font-size: $title-sizePhone;
    }
    .zzw-source .source-analysis{
      width:100%;
      height:auto;
      padding-bottom: 82.2%;
    }
    .service-con-v1 .service-title{
      margin-top: 50px;
      margin-bottom: 10px;

    }
    .service-con-v1{
      height:230px;
    }
    .zs-index-list:nth-of-type(8){
      .service-desc{
        margin-top:-10px;
      }
    }

    .zzw-zsMap-box img{
      margin-bottom:50px;
    }
    .zzw-zs-map .zzw-zsMap-infoList {
      margin-top:0;
      margin-left: 0;
      padding: 0 30px;
      li{
        font-size: 20px;
        text-align: center;
      }
    }
    .zzw-source{
      padding-bottom:50px;
    }
    .readMore{
      margin-top:30px;
    }
    .zzw-info-wrapper{
      padding:0 15px;
    }
    .zzw-info-wrapper .zzw-info-tips{
      padding:0 15px;
      font-size:14px;

    }
    .zzw-project-desc .pro-desc-title{
      padding:0;
      font-size:14px;
      line-height: 50px;
    }
    .swiper-slide5{
      background: url("../../assets/img-phone/phone-ms.jpg") center center no-repeat;
      background-size: cover;
    }
    .swiper-slide4{
      background: url("../../assets/img-phone/phone-blh.jpg") center center no-repeat;
      background-size:cover ;
    }
    .index-box-container{
      height:50px;
    }
    .zzw-project-desc{
      height:50px;
    }
    .zzw-zsMap-box{
      img{
        max-width: 100%;
      }
    }
    .zzw-info-wrapper h3{
      margin-top:50px;
      margin-bottom:25px;
    }
    .zzw-zs-service{
      padding-bottom: 0;
    }
    .zzw-info-wrapper .zzw-tr-tips{
      margin-bottom:50px;
    }
    .rc-startingUp{
      margin-top:40px;
      margin-bottom:50px;
    }
    .zzw-data-ul li{
      width:50%;
    }
    .zzw-news-box-item{
      margin-bottom:20px;
    }
    .zzw-news-box{
      margin-top:50px;
    }
  }

</style>
