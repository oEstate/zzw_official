<template>
  <div class="head-wrap">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <div class="navbar-logo">
              <img
                src="../../assets/img/home/logoHead.png"
                class="logo-head-img"
                alt=""
              />
            </div>
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav columns">
            <li>
              <!-- <router-link to="/"> -->
                <a href="http://data.zhizhaowang.cn" target="_blank" :title="$t('nav.Home')">{{$t("nav.Home")}}</a>
                <!-- </router-link> -->
            </li>
            <!-- <li ><router-link to="/"><a href="#" :title="$t('nav.Home')">{{$t('nav.Home')}}</a></router-link></li> -->
            
            <li>
              <router-link to="/gov-zs"
                ><a href="#" :title="$t('nav.gip')">{{
                  $t("nav.gip")
                }}</a></router-link
              >
            </li>
            <li>
              <router-link to="/company-tr"
                ><a href="#" :title="$t('nav.ba')">{{
                  $t("nav.ba")
                }}</a></router-link
              >
            </li>
            <li>
              <router-link to="/elite"
                ><a href="#" :title="$t('nav.ei')">{{
                  $t("nav.ei")
                }}</a></router-link
              >
            </li>
            <li>
              <router-link to="/demand-done"
                ><a href="#" :title="$t('nav.sd')">{{
                  $t("nav.sd")
                }}</a></router-link
              >
            </li>
            <li>
              <router-link to="/trade-map"
                ><a href="#" :title="$t('nav.lm')">{{
                  $t("nav.lm")
                }}</a></router-link
              >
            </li>
            <li>
              <router-link to="/zs-university"
                ><a href="#" :title="$t('nav.tu')">{{
                  $t("nav.tu")
                }}</a></router-link
              >
            </li>
            <!--<li><router-link to="/news"><a href="#" :title="$t('nav.ni')">{{$t('nav.ni')}}</a></router-link></li>-->
            <li>
              <router-link to="/about-us"
                ><a href="#" :title="$t('nav.au')">{{
                  $t("nav.au")
                }}</a></router-link
              >
            </li>
          </ul>
          <ul
            class="nav navbar-nav navbar-right lang"
            v-if="langs && langs.length > 0"
          >
            <li @click="langChange('zh')">中文</li>
            <li>&nbsp;|&nbsp;</li>
            <li @click="langChange('en')">English</li>
            <!--<el-dropdown trigger="click" @command="langChange" v-if="currentLang">-->
            <!--<span class="el-dropdown-link">-->
            <!--{{currentLang.label}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <!--</span>-->
            <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item  v-for="l in langs" :command="l.lang" :key="l.lang">{{l.label}}</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
          </ul>
          <!--<ul class="nav navbar-nav navbar-right">-->
          <!--&lt;!&ndash;<li><a href="javascript:;"  class="appDownload hidden-xs">APP<div class="appCode"></div></a></li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li><a href="javascript:;" class="appDownload visible-xs ">APP下载<div class="appCode"></div></a></li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li><a href="tel:010-6298-4189" class="hot-phone-head hidden-xs">010-6298-4189</a></li>&ndash;&gt;-->
          <!--<li><a href="tel:010-6298-4189" class="hot-phone-head hidden-xs">{{$t('nav.Home')}}</a></li>-->
          <!--&lt;!&ndash;<li><a href="tel:010-6298-4189" class="hot-phone-head visible-xs">热线电话: 010-6298-4189</a></li>&ndash;&gt;-->
          <!--</ul>-->
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "app-head",
  data() {
    return {
      local: "zh",
      currentLang: null,
    };
  },
  computed: {
    langs() {
      return this.$store.getters.langs;
    },
  },
  mounted() {
    if (this.langs && this.langs.length > 0) {
      this.currentLang = this.langs.filter(
        (l) => l.lang == this.$i18n.locale
      )[0];
    }
    // this.currentLang = this.langs && this.langs.length > 0 ? this.langs[0] : null
  },
  methods: {
    ...mapMutations({
      setLang: "setLang",
    }),
    langChange(e) {
      this.currentLang = this.langs.filter((l) => l.lang == e)[0];
      this.setLang(this.currentLang.lang);
      this.$i18n.locale = this.currentLang.lang;
      localStorage.setItem("locale", this.currentLang.lang);
    },
  },
};
</script>


<style scoped lang="scss">
.appDownload {
  font-size: 16px;
  display: block;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 20px;
    background: url("../../assets/img/home/appDownloadIcon.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 14px;
    left: -18px;
  }
  &:hover {
    .appCode {
      display: block;
    }
  }
  .appCode {
    display: none;
    position: absolute;
    width: 80px;
    height: 80px;
    background: url("../../assets/img/home/zzw_app.jpg") center center no-repeat;
    background-size: 100%;
    z-index: 10000;
    margin-top: 20px;
    margin-left: -31px;
    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-width: 0 10px 10px;
      border-style: solid;
      border-color: transparent transparent #fff;
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.navbar {
  z-index: 10000;
}
.navbar-collapse.in {
  background-color: #3d3d3f;
  border-color: #3d3d3f;
}
.navbar-nav a {
  text-decoration: none;
}
.head-wrap {
  /*position:absolute;*/
  /*left:0;*/
  /*top:0;*/
  z-index: 100;
  font-size: 16px;
  padding: 0 10px;
}
.hot-phone-head {
  display: block;
  position: relative;
  margin-left: 10px;
  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    left: -10px;
    background: url("../../assets/img/home/phone-head.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
}
.navbar-brand .navbar-logo {
  width: 70px;
  height: 26px;
  margin-top: -3px;
}
.navbar-logo {
  .logo-head-img {
    width: 70px;
    height: auto;
    display: inline-block;
  }
}
.head-wrap {
  width: 100%;
  background: #222836;
  color: #fff;
  border-bottom: 1px solid #8b92a5;
  &:hover {
    background: #3d3d3f;
  }
  .navbar-collapse .navbar-nav a {
    color: #fff;
  }
}
.columns {
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.navbar {
  margin-bottom: 0;
  .navbar-nav li {
    max-width: 200px;
    &:hover {
      cursor: pointer;

      a {
        color: #3d7eff;
      }
    }
  }
}
.navbar-default {
  background: transparent;
  border: none;
}
.lang {
  height: 50px;
  line-height: 50px;
  .el-dropdown {
    color: #ffffff;
  }
}
@media (max-width: 768px) {
  .head-wrap {
    padding: 0;
  }
  .appDownload {
    &:hover .appCode {
      display: block;
    }
    &:before {
      display: none;
    }
    .appCode {
      margin-left: 0;
      left: 50%;
      top: -100px;
      transform: translateX(-50%);
      &:before {
        display: none;
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        border-color: #fff transparent transparent transparent;
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .hot-phone-head {
    &:before {
      display: none;
    }
  }
}
</style>
