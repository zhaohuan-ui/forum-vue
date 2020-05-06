<template>
  <div class="login-container" :style="{backgroundImage:'url('+login_one+')'}">
    <div class="form-sty">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
               label-position="left">
        <div class="title-container">
          <h3 class="title">论 坛</h3>
        </div>

        <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
          <el-input
            :key="passwordType"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="登陆密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="'eye-open'"/>
          </span>
        </el-form-item>

        <el-button :loading="loading" type="primary" plain
                   style="width:90%;margin-bottom:20px;margin-left:20px"
                   @click.native.prevent="handleLogin">登陆
        </el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate'
  import login_one from '@/assets/dashboard/denglu01.jpg'

  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 1) {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined,
        login_one: login_one
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = 'password'
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then((response) => {
              this.$router.push({path: this.redirect || '/'})
              this.loading = false
              this.$message.success('登录成功')
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

    }
  }
</script>

<style lang="scss">
$bg: #000000;
/* 登录框 */
.form-sty {
  margin-top: 120px;
  margin-left: 670px;
  height: 350px;
  width: 500px;
}
/* 设置input框 */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $bg;
      height: 30px;
      caret-color: $bg;

    }
  }
}
</style>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 360px;
      max-width: 100%;
      padding: 30px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: $dark_gray;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 22px;
        color: #b0d2d2;
        /*color: #80f0f0;*/
        margin: 0px auto 35px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
