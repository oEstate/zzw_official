<template>
    <div class="news-wrapper">
<!--      //媒体宣传-->
      <div class="news-banner">

      </div>
      <div class="news-nav">
        <div class="container">
              <ul class="nav-list">
                <li><router-link to="/"><a href="javascript:;">首页</a></router-link></li>
                <li class="active"><router-link to="/blh-11"><a href="javascript:;" >媒体宣传</a></router-link></li>
                <li><a href="http://data.zhizhaowang.cn/dc/xmtqh20.html" target="_blank">往期回顾</a></li>
              </ul>
        </div>
      </div>

      <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="news-con">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12" v-for="(item,index) in newsList" :key="index">
                      <div class="news-list" @click="getNewsDetail(item.link)">
                        <div class="news-con-info">
                          <h3>
                            {{item.title}}
                          </h3>
                          <p class="publish-time">来源:  {{item.source}}</p>
                        </div>
                        <div class="img-wrapper">
                          <img class="news-img" v-if="item.img" :src='item.img' alt="智招网新闻">
                        </div>
                      </div>
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
      name: "nc.vue",
      components:{headArea,appFoot},
      data(){
        return {
          newsList:[
            {title:'商务部投资促进事务局重点项目推介会暨外资并购工作委员会成立仪式在南昌召开',link:'http://jj.hkstv.com.cn/m/movieread.asp?id=575&from=timeline&isappinstalled=0',source:'香港卫视',img:require('../../assets/img/pastReview/1.jpg')},
            {title:'商务部投资促进事务局重点项目推介会暨外资并购工作委员会成立仪式在南昌召开',link:'http://expocentralchina.mofcom.gov.cn/1800000608_3_12224_0_7.html',source:'商务部投资促进事务局',img:require('../../assets/img/pastReview/2.jpg')},
            {title:'商务部投资促进事务局重点项目推介会暨外资并购工作委员会成立仪式在南昌召开',link:'http://jx.people.com.cn/n2/2019/0521/c186330-32962823.html',source:'人民网',img:require('../../assets/img/pastReview/3.jpg')},
            {title:'商务部投资促进事务局重点项目推介会昨日举行',link:'http://www.sohu.com/a/314954011_120044716',source:'搜狐',img:require('../../assets/img/pastReview/4.jpg')},
            {title:'商务部投资促进事务局重点项目推介会18日举行外资并购工作委员会正式成立',link:'http://jx.people.com.cn/n2/2019/0520/c391748-32959066.html',source:'南昌晚报',img:require('../../assets/img/pastReview/5.jpg')},
            {title:'商务部在昌推介重点项目',link:'http://www.jiangxi.gov.cn/art/2019/5/19/art_393_692735.html',source:'江西省人民政府',img:require('../../assets/img/pastReview/6.jpg')},
            // {title:'商务部投资促进事务局重点项目推介会在南昌召开',link:'http://www.jinyinyouhui.com/cjxw/gushi/59482.html',source:'金银油汇网',img:require('../../assets/img/pastReview/7.jpg')},
            {title:'商务部投资促进事务局重点项目推介会昨日举行',link:'http://www.szyujun.com/2/29104.html',source:'铁岭资讯网',img:require('../../assets/img/pastReview/8.jpg')},
            {title:'商务部投资促进事务局重点项目推介会在南昌召开',link:'http://www.chinadevelopment.com.cn/news/zj/2019/05/1513126.shtml',source:'中国发展网',img:require('../../assets/img/pastReview/9.jpg')},
            {title:'商务部投资促进事务局重点项目推介会昨日举行',link:'http://www.ncnews.com.cn/xwzx/ncxw/jrnc/201905/t20190519_1431921.html',source:'南昌新闻网',img:require('../../assets/img/pastReview/10.jpg')},
            {title:'商务部投资促进事务局重点项目推介会在南昌召开',link:'http://finance.eastmoney.com/a/201905201127693337.html',source:'中国发展网',img:require('../../assets/img/pastReview/3.jpg')},
            {title:'商务部投资促进事务局重点项目推介会在南昌举行',link:'http://news.jxntv.cn/2019/0518/9167778.shtml',source:'江西网络广播电视台',img:require('../../assets/img/pastReview/2.jpg')},
            {title:'商务部投资促进事务局重点项目推介会暨外资并购工作委员会成立仪式在南昌召开',link:'http://www.jxxl.gov.cn/5523.html',source:'南昌小蓝经济技术开发区',img:require('../../assets/img/pastReview/1.jpg')},
            {title:'商务部投资促进事务局重点项目推介会暨外资并购工作委员会成立仪式在昌举行',link:'https://www.ncnews.com.cn/xwzx/ncxw/szxw/201905/t20190520_1432214.html',source:'南昌新闻网',img:require('../../assets/img/pastReview/7.jpg')},
            {title:'商务部投资促进事务局重点项目推介会在南昌召开',link:'http://finance.qiantion.com/n3374138c2.aspx',source:'钱讯网',img:require('../../assets/img/pastReview/9.jpg')}
            ],
        }
      },
      methods:{
        getNewsDetail(link){
          this.newWin(link)
        }
      },
      mounted(){

        function fetchWXParams(url){
          var xhr= new XMLHttpRequest();
          xhr.open('GET','http://www.zhizhaowang.cn:8088/index/token?url='+url);
          xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
              var _result=xhr.responseText;
              var data=JSON.parse(_result).result
              wxShare(data)
            }
          };
          xhr.send(null)
        }
        var locationUrl=encodeURIComponent(location.href.split('#')[0]);
        fetchWXParams(locationUrl);
        function wxShare(res){
          var desc = '中国中部投资贸易博览会（简称中部博览会）经国务院批准，自2006年起在中国中部6省轮流举办。';
          var title='智招网成功承办第十一届中国中部投资贸易博览会商务部投资促进事务局重点项目推介会';
          document.title=title;
          var ncShareImg='http://cdn.zhizhaowang.cn/dWw72vBTwT4o3dY.jpg'
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
                title: title,
                desc: desc,
                link: location.href,
                imgUrl: ncShareImg,
                success: function () {

                },
                cancel: function () {

                }
              });

              /*分享给朋友*/
              wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: location.href,
                imgUrl: ncShareImg,
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {

                },
                cancel: function () {

                }
              });

              wx.onMenuShareQQ({
                title:title,
                desc: desc,
                link: location.href,
                imgUrl: ncShareImg,
                success: function () {

                },
                cancel: function () {

                }
              });

              wx.onMenuShareWeibo({
                title: title,
                desc: desc,
                link: location.href,
                imgUrl: ncShareImg,
                success: function () {

                },
                cancel: function () {

                }
              });

              wx.onMenuShareQZone({
                title: title,
                desc: desc,
                link: location.href,
                imgUrl:ncShareImg,
                success: function () {

                },
                cancel: function () {

                }
              });
            });
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .news-banner{
    width:100%;
    height:540px;
    background: url('../../assets/img/commonImg/home-blh.jpg') center center no-repeat;
    background-size: cover;
  }
  .news-nav{
    width: 100%;
    height: 58px;
    background-color: rgba(12,39,156,1);
    font-size: 18px;
    color: #fff;
  }
  .nav-list{
    width:100%;
    height:100%;
    overflow: hidden;
    li{
      float: left;
      width: 170px;
      height: 100%;
      line-height: 58px;
      text-align: center;
      position: relative;
      cursor: pointer;
      transition: all 1s;
      &:hover{
         background-color: rgba(255,255,255,0.3);
      }
      a{
        display: inline-block;
        color: #fff;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0);
        transition: all 0.5s;
        text-decoration: none;
      }
      &::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 38px;
        background: #fff;
        top: 10px;
        right: 0;
      }
      &:last-child{
        &::after{
          content: '';
          display: none;
        }
      }
    }
    .active{
      background-color: rgba(255,255,255,0.3);
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
  @media(max-width: 768px){
    .news-banner{

      background: url('../../assets/img/blh/phone-blh1.jpg') center center no-repeat;
      background-size: cover;
    }
    .news-banner{
      height:200px;
    }
    .news-nav{
      height: 40px;
      font-size: 15px;
      .container{
        padding:0;
      }
    }
    .nav-list li{
      width:33.33%;
      line-height: 40px;
      &::after{
        top: 1px;
      }
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
  }
</style>
