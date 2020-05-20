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
            <span style="font-size: 22px;">{{ nickName }}</span>
            <div style="padding-top: 10px; font-size: 12px; font-weight:normal;">
              <i class="el-icon-arrow-down"></i>
              查看详细资料
            </div>
          </el-col>
          <el-col :span="8" style="padding-top: 92px;padding-left: 200px">
            <span style="font-size: 24px;">
              <router-link to="/edit">
                <el-button type="primary" plain size="small">编辑个人资料</el-button>
              </router-link>
            </span>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <div style="margin-top: 6px; height: 500px">
      <el-row>
        <!--    左侧整列    -->
        <el-col :span="7">
          <!--  第一行卡片  -->
          <el-card style="font-size: 14px;height: 52px" :body-style="{ padding: '3px' }">
            <el-row>
              <el-col :span="8">
                <img :src="user_three" style="height: 40px; width: 80px;padding-top: 2px">
              </el-col>
              <el-col :span="8">
                创作者中心
              </el-col>
              <el-col :span="8">
                <router-link :to="{ path: 'article'}">
                  <a><span style="float: right;color: #0084FF">
                    去创作
                    <i class="el-icon-arrow-right" style="color: gray"></i>
                  </span></a>
                </router-link>
              </el-col>
            </el-row>
          </el-card>
          <!--     第二行卡片     -->
          <div style="margin-top: 6px;">
            <el-row>
              <el-col :span="12">
                <el-card style="height: 85px; " :body-style="{ padding: '6px' }">
                  <el-row>
                    <el-col :span="24">
                      <span style="font-size:14px; font-weight:normal; margin-left: 47px;">
                        已关注
                      </span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="margin-left: 64px;margin-top: -22px">
                      {{ yetFocus }}
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card style="height: 85px; " :body-style="{ padding: '6px' }">
                  <el-row>
                    <el-col :span="24">
                      <span style="font-size:14px; font-weight:normal; margin-left: 47px;">
                        被关注
                      </span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="margin-left: 64px;margin-top: -22px">
                      {{ byFocus }}
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <!--     第三行标题    -->
          <div style="margin-top: 10px">
            <div style="margin-top: -10px"><el-divider></el-divider></div>
            <el-row style="margin-top: -25px; font-size:14px; font-weight:normal;">
              <el-col :span="20">关注的文章</el-col>
              <el-col :span="4">
                <span style="float: right;">{{ yetFocus }} </span>
              </el-col>
            </el-row>
            <div style="margin-top: -25px"><el-divider></el-divider></div>
            <el-row style="margin-top: -25px; font-size:14px; font-weight:normal;">
              <el-col :span="20">关注的问答</el-col>
              <el-col :span="4">
                <span style="float: right;">{{ yetFocus }} </span>
              </el-col>
            </el-row>
            <div style="margin-top: -25px"><el-divider></el-divider></div>
            <el-row style="margin-top: -25px; font-size:14px; font-weight:normal;">
              <el-col :span="20">关注的活动</el-col>
              <el-col :span="4">
                <span style="float: right;">{{ yetFocus }} </span>
              </el-col>
            </el-row>
            <div style="margin-top: -25px"><el-divider></el-divider></div>
            <el-row style="margin-top: -25px; font-size:14px; font-weight:normal;">
              <el-col :span="20">关注的专题</el-col>
              <el-col :span="4">
                <span style="float: right;">{{ yetFocus }} </span>
              </el-col>
            </el-row>
            <div style="margin-top: -25px"><el-divider></el-divider></div>
            <el-row style="margin-top: -25px; font-size:14px; font-weight:normal;">
              <el-col :span="20">个人主页被访问</el-col>
              <el-col :span="4">
                <span style="float: right;">{{ yetFocus }} </span>
              </el-col>
            </el-row>
            <div style="margin-top: -25px"><el-divider></el-divider></div>
          </div>
        </el-col>

        <el-col :span="17">
          <el-card style="height: 390px; margin-left: 8px " :body-style="{ padding: '6px' }">
            <el-tabs v-model="activeName" @tab-click="">
              <el-tab-pane label="动态" name="dynamic">
                <div style="margin-top: -12px">我的动态</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="文章" name="article">
                <div style="margin-top: -12px">我的文章</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="问答" name="questions">
                <div style="margin-top: -12px">我的问答</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="活动" name="activity">
                <div style="margin-top: -12px">我的活动</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="专题" name="topic">
                <div style="margin-top: -12px">我的专题</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="招聘" name="recruit">
                <div style="margin-top: -12px">我的招聘</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="提问" name="put">
                <div style="margin-top: -12px">我的提问</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="想法" name="idea">
                <div style="margin-top: -12px">我的想法</div>
                <div style="margin-top: -25px"><el-divider></el-divider></div>
              </el-tab-pane>
              <el-tab-pane label="关注" name="focus">
                <el-tabs v-model="focus" @tab-click="">
                    <el-tab-pane label="我的关注" name="yetFocus">

                  </el-tab-pane>
                  <el-tab-pane label="关注我的" name="byFocus">

                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="收藏" name="enshrine">
                <el-tabs v-model="enshrine" @tab-click="">
                  <el-tab-pane label="我关注的收藏" name="yetEnshrine">

                  </el-tab-pane>
                  <el-tab-pane label="我创建的收藏" name="byEnshrine">

                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getUser} from '@/api/user/user'
import Pagination from '@/components/Pagination'
import settings from '@/settings'
import waves from '@/directive/waves'
import user_one from '@/assets/dashboard/user_one.jpg'
import user_two from '@/assets/dashboard/user_two.jpg'
import user_three from '@/assets/dashboard/user_three.jpg'

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
      user_three: user_three,
      activeName: "dynamic",
      focus: "yetFocus",
      enshrine: "yetEnshrine",
      user: {},
      yetFocus: 0,
      byFocus: 0,
      settings: settings,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        searchData: {}
      },
      listLoading: false,
      multipleSelection: [],
      exportLoading: false,
      nickName: '',
      ids: [0,1]
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getUser(this.name).then(response =>{
        this.nickName = response.data.nickName
      })
    },
    onSelectionChange(val) {
      this.multipleSelection = val
    },
    /**
     * 下载Excel示例
     */
    /*onDownload(){
      window.location.href = process.env.VUE_APP_BASE_API + '/user/export';
    }*/
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 12px;
      font-weight: bold;
      margin-left: 157px;
      margin-right: 145px;
      line-height: 46px;
    }
  }

  .sty-user {
    height: 120px;
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
