<template>
  <div class="navbar">
    <div :class="{'has-logo':showLogo}" class="left-menu">
      <Logo v-if="showLogo" :collapse="isCollapse" />
    </div>
    <!-- 菜单栏开关 -->
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <!-- 左侧菜单点击 -->
    <!-- <Breadcrumb class="breadcrumb-container" /> -->
    <div class="shou-menu">
      <router-link to="/">
        <a>{{ homePage }}</a>
      </router-link>
    </div>
    <div class="shou-menu">
       <router-link to="/article">
         <a>{{ article }}</a>
       </router-link>
    </div>
    <div class="shou-menu">
      <router-link :to="{ path: 'questions'}">
        <a>{{ questions }}</a>
      </router-link>
    </div>
    <div class="shou-menu">
      <router-link :to="{ path: 'activity'}">
        <a> {{ activity }} </a>
      </router-link>
    </div>
    <div class="shou-menu">
      <router-link :to="{ path: 'topic'}">
        <a > {{ topic }} </a>
      </router-link>
    </div>
    <div class="shou-menu">
      <router-link :to="{ path: 'recruit'}">
        <a > {{ recruit }} </a>
      </router-link>
    </div>
    <div class="shou-menu">
      <router-link :to="{ path: 'download'}">
        <a > {{ download }} </a>
      </router-link>
    </div>
    <div class="input-menu">
      <el-input placeholder="Vue如何学习?" class="input-with-select" size="small">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <router-link to="/user">
            <el-dropdown-item>
              用户
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Logo from '@/layout/components/Sidebar/Logo'
import pathToRegexp from 'path-to-regexp'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Logo
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      homePage: "首页",
      article: "文章",
      questions: "问答",
      activity: "活动",
      topic: "专题",
      recruit: "招聘",
      download: "下载"
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 52px;
  margin-top: 0px;
  margin-bottom: 0px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }
  /*  logo与左侧边栏  */
  .left-menu{
    margin-top: 0px;
    float: left;
    height: 100%;
    width: 160px;
    line-height: 50px;
    margin-left: 120px;
  }
  /* 文字大小 */
  .shou-menu{
    margin-top: 1px;
    float: left;
    height: 100%;
    width: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
  }
  /* 搜索框设计 */
  .input-menu{
    margin-left: 45px;
    float: left;
    height: 100%;
    width: 280px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  /* 首页和退出登录设计 */
  .right-menu {
    margin-right: 130px;
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
