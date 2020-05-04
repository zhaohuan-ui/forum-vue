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
      <el-input placeholder="Vue如何学习?" class="input-with-select">
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
    },
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink() {
      // const { redirect, path } = item
      // if (redirect) {
      //   this.$router.push(redirect)
      //   return
      // }
      this.$router.push(this.pathCompile('/user'))
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  margin-top: 8px;
  margin-bottom: 8px;
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
  .left-menu{
    margin-top: 0px;
    float: left;
    height: 100%;
    width: 160px;
    line-height: 50px;
    margin-left: 180px;
  }
  .shou-menu{
    margin-top: 1px;
    float: left;
    height: 100%;
    width: 80px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .input-menu{
    margin-left: 40px;
    float: left;
    height: 100%;
    width: 380px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .right-menu {
    margin-right: 180px;
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
