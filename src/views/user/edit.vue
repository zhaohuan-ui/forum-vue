<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">
    <!--  资料卡片  -->
    <el-card :body-style="{ padding: '0px' }">
      <img :src="user_two" style="height: 240px; width: 100%">
      <div class="sty-user">
        <el-row style="margin-top: -50px">
          <el-col :span="5">
            <img :src="user_one" class="img_tx">
          </el-col>
          <el-col :span="11" style="padding-top: 45px">
            <span style="font-size: 22px;">{{ nikeName }}</span>
            <div style="padding-top: 10px; font-size: 12px; font-weight:normal;">
              <i class="el-icon-arrow-down"></i>
              请填写下面资料
            </div>
          </el-col>
          <el-col :span="8" style="padding-top: 92px;padding-left: 200px">
            <span style="font-size:14px; font-weight:normal;">
              <router-link to="/user">
                返回个人主页
                <i class="el-icon-arrow-right" style="color: gray"></i>
              </router-link>
            </span>
          </el-col>
        </el-row>
        <!--    编写资料一栏    -->
        <el-row>
          <el-col :span="5"><img></el-col>
          <el-col :span="11" style="padding-top: 10px">
            <el-form ref="form"  label-width="80px">
              <el-form-item label="用户昵称">
                <el-input v-model="form.nickName"></el-input>
              </el-form-item>
              <el-form-item label="用户账号">
                <el-input v-model="form.username" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="用户性别">
                <el-radio-group v-model="form.sex">
                  <el-radio :label="0" >男</el-radio>
                  <el-radio :label="1">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="所在行业">
                <el-input v-model="form.industry"></el-input>
              </el-form-item>
              <el-form-item label="职业经历">
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.career"></el-input>
              </el-form-item>
              <el-form-item label="教育经历">
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.education"></el-input>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.introduction"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8" style="padding-top: 2px;padding-left: 200px">
            <el-button type="primary" @click="updateUser()" plain size="small">保存修改</el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getUser, updateUser} from '@/api/user'
import Pagination from '@/components/Pagination'
import settings from '@/settings'
import waves from '@/directive/waves'
import user_one from '@/assets/dashboard/user_one.jpg'
import user_two from '@/assets/dashboard/user_two.jpg'

export default {
  name: 'User',
  computed: {...mapGetters(['name'])},
  components: {Pagination},
  directives: {waves},
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      user_one: user_one,
      user_two: user_two,
      user: {},
      settings: settings,
      list: [],
      total: 0,
      listLoading: false,
      multipleSelection: [],
      exportLoading: false,
      nikeName: "你丫闭嘴",
      form: {
        nickName:'',
        username: '',
        sex: -1,
        industry: '',
        career: '',
        education: '',
        introduction: ''
      }
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      getUser(this.name).then(response =>{
        this.form = response.data
      })
    },
    updateUser() {
      updateUser(this.form).then(response =>{
        this.$notify({
          title: "成功",
          message: "保存成功",
          type: "success"
        });
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 20px;
      font-weight: bold;
      margin-left: 157px;
      margin-right: 145px;
      line-height: 46px;
    }
  }

  .sty-user {
    height: 620px;
    width: 100%;
  }

  .img_tx {
    margin-bottom: 20px;
    margin-left: 40px;
    -webkit-box-shadow: 0px 0px 30px #DCDCDC;
    height: 120px;
    width: 120px;
  }
</style>
