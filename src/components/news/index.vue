<template>
    <div class="news">
      <head-area>
        <template slot="banner">
          <div class="bannerArea"></div>
        </template>
      </head-area>
      <div class="news-wrapper">
        <div class="news-nav">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-xs-4">
                <p  :class="{ active: currentType==='zzw_news' }" @click="switchType('zzw_news')">智招网动态</p>
              </div>
              <div class="col-md-2 col-xs-4">
                <p :class="{ active: currentType==='zfzx' }" @click="switchType('zfzx')">政府资讯</p>
              </div>
              <div class="col-md-2 col-xs-4" >
                <p :class="{ active: currentType==='jryw' }" @click="switchType('jryw')">今日要闻</p>
              </div>
              <div class="col-md-2 col-xs-4">
                <p :class="{ active: currentType==='yhzc' }" @click="switchType('yhzc')">优惠政策</p>
              </div>
              <div class="col-md-2 col-xs-4">
                <p :class="{ active: currentType==='hydt' }" @click="switchType('hydt')">行业动态</p>
              </div>
              <div class="col-md-2 col-xs-4">
                <p :class="{ active: currentType==='pxdx' }" @click="switchType('pxdx')">培训大学</p>
              </div>
            </div>
          </div>
        </div>
        <div class="news-con" v-if="!ifNewsConDetail">
          <div class="container">
            <div class="row">
              <div class="col-md-12" v-for="(item,index) in newsList" :key="index">
                <div class="news-list" @click="goToDetailInfo(item.id)">
                  <div class="news-con-info">
                    <h3>
                      {{item.title}}
                    </h3>
                    <p class="publish-time">{{filterTime(item.releaseTime?item.releaseTime:item.createTime)}}</p>
                  </div>
                  <div class="img-wrapper">
                    <img class="news-img" v-if="item.coverUrl" :src='"http://cdn.zhizhaowang.cn/"+item.coverUrl' alt="智招网新闻">
                    <img class="news-img" v-if="item.imgUrl" :src='"http://cdn.zhizhaowang.cn/"+item.imgUrl' alt="智招网新闻">
                    <img class="news-img" v-if="(!item.imgUrl)&&(!item.coverUrl)" :src="(randomImg[Math.floor(Math.random()*9)]).imgUrl" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="paginationWrapper" >
                  <el-pagination
                    background
                    :current-page="pageNo"
                    @current-change="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="allCount">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="news-con-detail" v-if="ifNewsConDetail">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1" v-if="newsCon">
                <div class="news-con-detailInfo">
                  <h3 class="news-con-title">{{newsCon.title}}</h3>
                  <p class="time" v-if="newsCon.releaseTime">{{filterTime(newsCon.releaseTime)}}</p>
                  <p class="time" v-if="newsCon.createTime">{{filterTime(newsCon.createTime)}}</p>
                  <div v-if="newsCon.panoramaNews" class="news-con-box" v-html="newsCon.panoramaNews.content"></div>
                  <div v-if="newsCon.content" class="news-con-box" v-html="newsCon.content"></div>
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
          title:'',
          newsList:[],
          pageSize:8,
          pageNo:1,
          allCount:0,
          columnId:'',
          currentType:'zzw_news',
          randomImg:[
            {imgUrl:require('../../assets/img/commonImg/1.jpg')},
            {imgUrl:require('../../assets/img/commonImg/2.jpg')},
            {imgUrl:require('../../assets/img/commonImg/3.jpg')},
            {imgUrl:require('../../assets/img/commonImg/4.jpg')},
            {imgUrl:require('../../assets/img/commonImg/5.jpg')},
            {imgUrl:require('../../assets/img/commonImg/6.jpg')},
            {imgUrl:require('../../assets/img/commonImg/7.jpg')},
            {imgUrl:require('../../assets/img/commonImg/8.jpg')},
            {imgUrl:require('../../assets/img/commonImg/9.jpg')}
          ],
          ifNewsConDetail:false,
          newsCon:'', //新闻内容
          currentAjaxType:'hotNews', // hotNews  zzw_dt zzw_columnNews
          ifPaginationShow:true
        }
      },
      created(){
        let newsId=this.$route.query.id;
        let currentType=this.$route.query.type;
        if(newsId&&currentType){
          this.ifNewsConDetail=true;
          this.currentType=currentType;
          this.currentAjaxType=this.getAjaxType(currentType);
          this.getNewsDetail(newsId)


        }
        else{
          this.switchType();
        }
      },
      methods:{
        fetchWXParams(url){
          let self = this;
          return new Promise(function (resolve,reject) {
            axios.get('http://www.zhizhaowang.cn:8088/index/token?url='+encodeURIComponent(location.href.split('#')[0])).then((_data)=>{
              if(_data.data.code===200){
                resolve(_data.data.result);
              }else{
                reject();
              }
            },()=>{
              reject(null);
            })
          });
        },
        wxShare(data){
          let desc = '智招网——首家政府、企业、人才、智慧招商大数据VR云平台';
          this.fetchWXParams().then(res => {
            if (res) {
              wx.config({
                debug: false,
                appId: res.appid,
                timestamp: res.timestamp,
                nonceStr: res.nonceStr,
                signature:res.signature,
                jsApiList: [
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage',
                  'onMenuShareQQ',
                  'onMenuShareWeibo',
                  'onMenuShareQZone'
                ]
              });
              wx.ready(function(){
                wx.checkJsApi({
                  jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                  ]
                });
                /*分享到朋友圈*/
                wx.onMenuShareTimeline({
                  title: data ? data.title : '智招网1',
                  desc: data.newsAbstract ? data.newsAbstract : desc,
                  link: location.href,
                  imgUrl: 'http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg',
                  success: function () {
                  },
                  cancel: function () {
                  }
                });
                /*分享给朋友*/
                wx.onMenuShareAppMessage({
                  title: data ? data.title : '智招网1',
                  desc: data.newsAbstract ? data.newsAbstract : desc,
                  link: location.href,
                  imgUrl: 'http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg',
                  type: 'link', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function () {
                  },
                  cancel: function () {
                  }
                });
                wx.onMenuShareQQ({
                  title: data ? data.title : '智招网1',
                  desc: data.newsAbstract ? data.newsAbstract : desc,
                  link: location.href,
                  imgUrl: 'http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg',
                  success: function () {
                  },
                  cancel: function () {
                  }
                });

                wx.onMenuShareWeibo({
                  title: data ? data.title : '智招网1',
                  desc: data.newsAbstract ? data.newsAbstract : desc,
                  link: location.href,
                  imgUrl: 'http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg',
                  success: function () {
                  },
                  cancel: function () {
                  }
                });

                wx.onMenuShareQZone({
                  title: data ? data.title : '智招网1',
                  desc: data.newsAbstract ? data.newsAbstract : desc,
                  link: location.href,
                  imgUrl: 'http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg',
                  success: function () {
                  },
                  cancel: function () {
                  }
                });
              });
            }
          });
        },

        goToDetailInfo(id){
          let prefix=location.origin+location.pathname
          this.newWin(prefix+'?id='+id+'&type='+this.currentType);
        },
        getAjaxType(value){
          switch (value) {
            case 'zzw_news':
              return 'zzw_dt';
            case 'jryw':
              return 'hotNews';
            default:
              return 'zzw_columnNews'
          }
        },
        filterTime(value){
          if(value){
            value=value.split(' ')[0]
          }
          return value;
        },
        getNewsDetail(id){
          switch(this.currentAjaxType){
            case 'hotNews':
              this.ajaxHotNewsDetail(id);
              break;
            case 'zzw_dt':
              this.ajaxNewsDetail(id);
              break;
            case 'zzw_columnNews':
              this.ajaxColumnNewsDetail(id);
              break;
            default:
              break;
          }
        },
        handleCurrentChange(val) {
          this.pageNo=val;
          this.switchType('',val);
        },
        zzw_news(){
          this.currentAjaxType='zzw_dt'
          let prefix='http://www.zhizhaowang.cn:8088/index/pano/rama/content/bycolumnid?'
          axios.get(prefix+`columnId=DsgdobqySY7zdTCSrVELnOfsH&pageNo=${this.pageNo}&pageSize=${this.pageSize}`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsList=result.data.Panoramacontent;
              this.allCount=result.allCount;
            }
          })
        },
        get_zzw_newsDetail(id){
          this.newWin(location.href+'/?id='+id+'&type='+this.currentType);
        },
        ajaxNewsDetail(id){
          this.ifNewsConDetail=true;
          axios.get(`http://www.zhizhaowang.cn:8088/index/pano/rama/content/byid?id=${id}`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsCon=result;
              this.wxShare(result)
            }
          })
        },
        zzw_columnNews(){
          this.currentAjaxType='zzw_columnNews';
          let prefix='http://www.zhizhaowang.cn:8088/index/news/column/page?'
          axios.get(prefix+`pageNo=${this.pageNo}&pageSize=${this.pageSize}&columnId=${this.columnId}`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsList=result.data;
              this.allCount=result.allCount;
            }
          })
        },
        get_columnNewsDetail(id){
          this.newWin(location.href+'/?id='+id+'&type='+this.currentType);

        },
        ajaxColumnNewsDetail(id){
          this.ifNewsConDetail=true;
          axios.get(`http://www.zhizhaowang.cn:8088/index/news/detail?id=${id}`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsCon=result;
              this.wxShare(result)
            }
          })
        },
        zzw_hotNews(){
          this.currentAjaxType='hotNews';
          let prefix='http://www.zhizhaowang.cn:8088/init/headlines/page?'
          axios.get(prefix+`pageNo=${this.pageNo}&pageSize=${this.pageSize}&keywords=`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsList=result.data;
              this.allCount=result.allCount;
            }
          })
        },
        get_hotNewsDetail(id){
          this.newWin(location.href+'/?id='+id+'&type='+this.currentType);
        },
        ajaxHotNewsDetail(id){
          this.ifNewsConDetail=true;
          axios.get(`http://www.zhizhaowang.cn:8088/init/headlines?id=${id}`).then((res)=>{
            if(res.data.code===200){
              let result=res.data.result;
              this.newsCon=result;
              this.wxShare(result)
            }
          })
        },
        switchType(type,pageNo){
          this.ifPaginationShow=false;
          if(pageNo){
            this.pageNo=pageNo;
          }else{
            this.pageNo=1;
          }
          this.ifNewsConDetail=false;
          type?this.currentType=type:null;
          switch(this.currentType){
            case 'zzw_news':
              this.zzw_news();
              break;
            case 'zfzx':
              this.columnId='Xsmpaqpo2BFaF6aBdK71zT'
              this.zzw_columnNews();
              break;
            case'jryw':
              this.zzw_hotNews();
              break;
            case 'yhzc':
              this.columnId='HW3QYRRnj5HuSweWspR6LQ';
              this.zzw_columnNews();
              break;
            case 'hydt':
              this.columnId='3YSACCgNjPWxJzsVp26fWS';
              this.zzw_columnNews();
              break;
            case 'pxdx':
              this.columnId='4k1syhgtcXBpC2sPHqmdHw'
              this.zzw_columnNews();
              break;
            default:
              break;
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .news .bannerArea{
    background: url('../../assets/img/commonImg/xwzx.jpg') center center no-repeat;
    background-size: cover;
  }
  .paginationWrapper{
    margin-top:30px;
  }
.news-wrapper{
  width:100%;
}
  .news-nav{
    width:100%;
    height:60px;
    background: #f8f8f8;
    font-size:16px;
    line-height: 60px;
    p{
      width:100%;
      height:100%;
      cursor: pointer;
      &:hover{
        color:#619fed;
      }

    }
    .active{
      color:#619fed;
      &:after{
        content: '';
        display: inline-block;
        width:35%;
        height:2px;
        background-color:#3d7eff ;
        position:absolute;
        bottom:10px;
        left:50%;
        transform: translateX(-50%);
      }
    }
  }

  .news-con{
    margin-top:30px;
    margin-bottom:30px;
  }
  .news-list{
    padding:16px 0;
    text-align: left;
    border-bottom:2px solid #eff0f0;
    overflow: hidden;
    cursor:pointer;
    &:hover{
      .news-con-info h3{
        color:#619fed;
      }
    }
    .news-con-info {
      width:80%;
      float:left;
      font-size:22px;
      color:#4d4e4e;
      padding-right:30px;


      h3{
        margin-bottom:30px;
        margin-top:20px;
        width:100%;
        line-height: 32px;
      }

    }
    .publish-time{
      width:100%;
      font-size:16px;
      color:#a2a2a2;
    }
    .img-wrapper{
      width:20%;
      float:left;
    }
    .news-img{
      max-width: 100%;
      height:auto;
    }
  }
  .news-con-detailInfo{
    width:100%;
    padding-top:120px;
    padding-bottom: 50px;
    text-align: center;
    font-size: 14px;
    .news-con-title{
      width:100%;
      font-size:22px;
      text-align: center;
      color:#292929;
    }
    .time{
      margin-top:40px;
      margin-bottom:56px;
      font-size:14px;

    }
    .news-con-box{
      text-align: left;
      img{
        max-width:100%;
      }
    }

  }
  @media(max-width:768px){
    .news-con-detailInfo{
      padding-top:40px;
    }
    .news-con-detailInfo .time{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .news .bannerArea{
      background: url('../../assets/img-phone/phone-xwzx.jpg') center center no-repeat;
      background-size: cover;
    }
    .news-nav{
      height:120px;
    }
    .news-con-info{
      padding-right:15px;
    }
    .news-con{
      margin-top:0;
    }
    .news-list .news-con-info h3{
      margin-bottom:15px;
      margin-top:15px;
      line-height: 28px;
    }
    .news-list .news-con-info{
      font-size:16px;
      padding-right:10px;
      width:70%;
    }
    .news-list .publish-time{
      font-size:14px;
    }
    .news-list{
      padding:0;
    }
    .news-list .img-wrapper{
      margin-top:20px;
      width:30%;
    }
    .paginationWrapper{
      overflow: auto;
    }

  }

</style>
