<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">
    <div>
      <el-row>
        <!--    左侧卡片    -->
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="height: 75px">
              <el-row>
                <el-col :span="6">
                  <div style="padding-left: 6px">
                    <el-button @click="createDialogVisible = true" type="primary" icon="el-icon-tickets" circle plain></el-button>
                  </div>
                  <div style="margin-left: 7px; font-size: 12px; font-weight:normal;">
                    写问题
                  </div>
                </el-col>
                <el-col :span="6">
                  <div style="padding-left: 8px">
                    <el-button type="warning" icon="el-icon-reading" circle plain></el-button>
                  </div>
                  <div style="margin-left: 11px; font-size: 12px; font-weight:normal;">
                    写文章
                  </div>
                </el-col>
                <el-col :span="6">
                  <div style="padding-left: 12px">
                    <el-button type="success" icon="el-icon-connection" size="" circle plain></el-button>
                  </div>
                  <div style="margin-left: 14px; font-size: 12px; font-weight:normal;">
                    写想法
                  </div>
                </el-col>
                <el-col :span="6">
                  <div style="padding-left: 14px">
                    <el-button type="danger" icon="el-icon-document-copy" size="" circle plain></el-button>
                  </div>
                  <div style="margin-left: 15px; font-size: 12px; font-weight:normal;">
                    写活动
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--  稍后答  草稿箱  -->
            <div style="height: 10px">
              <el-row>
                <el-col :span="10">
                  <a @click="laterDialogVisible = true">
                    <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
                      稍后答
                      <span >
                        <el-badge :value="laterList.length" class="item" type="warning" style="padding-left: 6px;padding-top: 8px"></el-badge>
                      </span>
                    </div>
                  </a>
                </el-col>
                <el-col :span="2" style="margin-top: -15px;margin-left: 8px;">
                  <el-divider direction="vertical"></el-divider>
                </el-col>
                <el-col :span="10">
                  <a @click="draftsDialogVisible = true">
                    <div style="margin-top: -15px;margin-left: 22px; font-size: 14px; font-weight:normal;color: #99a9bf">
                      草稿箱
                      <span >
                        <el-badge :value="draftsList.length" class="item" type="primary" style="padding-left: 6px;padding-top: 8px"></el-badge>
                      </span>
                    </div>
                  </a>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <!--     第二张卡片     -->
          <el-card style="font-size: 14px;height: 52px;margin-top: 6px" :body-style="{ padding: '3px' }">
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
          <!--     第三张卡片     -->
          <el-card class="box-card" style="font-size: 14px; font-weight:normal;color: #99a9bf;margin-top: 6px">
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <i class="el-icon-star-off"></i>
              我的收藏
              <span >
                <el-badge :value="0" class="item" type="info" style="padding-left: 116px;padding-top: 8px"></el-badge>
              </span>
            </div>
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <i class="el-icon-user-solid"></i>
              我的邀请
              <span >
                <el-badge :value="0" class="item" type="info" style="padding-left: 116px;padding-top: 8px"></el-badge>
              </span>
            </div>
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <i class="el-icon-shopping-bag-1"></i>
              我的余额
              <span >
                <el-badge :value="0" class="item" type="info" style="padding-left: 116px;padding-top: 8px"></el-badge>
              </span>
            </div>
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <a @click="to_User()">
                <i class="el-icon-s-claim"></i>
                我关注的问题
                <span >
                  <el-badge :value="attentionList.length" class="item" type="info" style="padding-left: 88px;padding-top: 8px"></el-badge>
                </span>
              </a>
            </div>
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <i class="el-icon-s-comment"></i>
              服务中心
              <span >
                <el-badge class="item" type="info" style="padding-left: 116px;padding-top: 8px"></el-badge>
              </span>
            </div>
            <div style="margin-top: -15px;margin-left: 10px; font-size: 14px; font-weight:normal;color: #99a9bf">
              <i class="el-icon-headset"></i>
              帮助中心
              <span >
                <el-badge class="item" type="info" style="padding-left: 116px;padding-top: 8px"></el-badge>
              </span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="17">
          <el-card class="box-card" style="margin-left: 7px">
            <div v-for="row in list" :key="row.index" >
              <div>
                <a @click="updatePageView(row,1),to_Answer(row,0)">
                  <div style="margin-top: -10px">
                    <span style="font-size: 15px;">
                      {{ row.questionName }}
                    </span>
                  </div>
                </a>
                <div>
                  <el-row>
                    <el-col :span="4">
                      <el-button @click="updatePageView(row,1),to_Answer(row,1)" type="primary" icon="el-icon-edit" size="mini" plain>
                        写回答
                      </el-button>
                    </el-col>
                    <el-col :span="4" style="font-size: 14px; font-weight:normal;color: #99a9bf; text-align:center;">
                      <a v-if="row.attentionStatus == 0" @click="createAttention(row)">
                        <i class="el-icon-plus"></i>
                        关注问题
                      </a>
                      <a v-if="row.attentionStatus == 1" @click="deleteAttention(row)">
                        <i class="el-icon-circle-check"></i>
                        已关注
                      </a>
                    </el-col>
                    <el-col :span="4" style="font-size: 14px; font-weight:normal;color: #99a9bf;margin-left: 10px;">
                      <span>
                        <a v-if="row.laterStatus == 0" @click="createLater(row)">
                          <i class="el-icon-refresh-left"></i>
                          稍后答
                        </a>
                        <a v-if="row.laterStatus == 1" @click="deleteLater(row)">
                          <i class="el-icon-circle-check"></i>
                          已添加
                        </a>
                      </span>
                    </el-col>
                    <el-col :span="11">
                      <div style="float: right">
                        <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                          {{ row.answerNumber }}
                          <span style="margin-left: 2px">
                            个回答
                          </span>
                          <span >
                            <el-divider direction="vertical"></el-divider>
                          </span>
                        </span>
                        <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                          {{ row.volumeNumber }}
                          <span style="margin-left: 2px" >
                            个浏览
                          </span>
                        </span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div style="margin-top: -20px">
                <el-divider></el-divider>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!--  写问题Dialog  -->
    <el-dialog
      title="写问题"
      :visible.sync="createDialogVisible"
      width="45%"
      center>
      <el-input
        type="textarea"
        placeholder="请输入问题"
        :autosize="{ minRows: 10, maxRows: 20}"
        v-model="questionVO.questionName"
        maxlength="300"
        show-word-limit
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="create(1)" size="mini" plain>稍后发布</el-button>
        <el-button type="primary" @click="create(0)" size="mini" plain>立即发布</el-button>
      </span>
    </el-dialog>

    <!--  草稿箱Dialog -->
    <el-dialog title="草稿箱" :visible.sync="draftsDialogVisible" center width="45%">
      <el-table :data="draftsList" style="font-size: 14px; font-weight:normal;margin-top: -20px; ">
        <el-table-column property="questionName" label="问答名称" width="400" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="updateStatus(scope.row)" type="text" size="small">发布</el-button>
            <el-button @click="deleteStatus(scope.row)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--  草稿箱Dialog -->
    <el-dialog title="稍后答" :visible.sync="laterDialogVisible" center width="45%">
      <el-table :data="laterList" style="font-size: 14px; font-weight:normal;margin-top: -20px; ">
        <el-table-column property="questionName" label="问答名称" width="400" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="to_Answer(scope.row,1)" type="text" size="small">写回答</el-button>
            <el-button @click="deleteLater(scope.row)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {
getList, create, update, deleteStatus,
drafts, later, deleteLater, createLater,
attention, createAttention, deleteAttention } from '@/api/questions/questions'
import user_three from '@/assets/dashboard/user_three.jpg'

export default {
  name: 'Questions',
  computed: {...mapGetters(['name'])},
  data() {
    return {
      questionVO: {},
      list: [],
      draftsList: [],
      laterList: [],
      attentionList: [],
      multipleSelection: [],
      user_three: user_three,
      createDialogVisible: false,
      draftsDialogVisible: false,
      laterDialogVisible: false,
      pageView: 0
    }
  },
  created() {
    /* 调用起始方法 */
    this.fetchList()
    this.drafts()
    this.later()
    this.attention()
  },
  methods: {
    fetchList() {
      getList().then(response => {
        this.list = response.data
      })
    },
    updatePageView(row,value) {
      this.pageView = row.volumeNumber
      row.volumeNumber = this.pageView + value
      update(row).then(response => {
        this.pageView = 0
      })
    },
    create(status){
      this.questionVO.publishStatus = status
      create(this.questionVO).then(response => {
        this.createDialogVisible = false
        this.questionVO = {}
        if(status == 0){
          this.fetchList()
          this.$message({
            message: response.message,
            type: response.code==200 ? "success" : "error"
          })
        }else{
          this.drafts()
          this.$message({
            message: "稍后发布",
            type: response.code==200 ? "success" : "error"
          })
        }

      })
    },
    to_Answer(row,answerStatus){
      let router = this.$router.resolve({ path: '/answer', query: {id: row.id, answerStatus: answerStatus}});
      window.open(router.href,'_blank')
    },
    to_User(){
      let router = this.$router.resolve({ path: '/user'});
      window.open(router.href,'_blank')
    },
    updateStatus(row){
      row.publishStatus = '0'
      update(row).then(response => {
        this.drafts()
        if(this.draftsList.length == 0){
          this.draftsDialogVisible = false
        }
        if(this.draftsDialogVisible == false){
          this.fetchList()
        }
      })
    },
    deleteStatus(row){
      deleteStatus(row).then(response => {
        this.drafts()
        if(this.draftsList.length == 1){
          this.draftsDialogVisible = false
        }
      })
    },
    drafts(){
      drafts().then(response=>{
        this.draftsList = response.data
      })
    },
    later(){
      later().then(response=>{
        this.laterList = response.data
      })
    },
    createLater(row){
      createLater(row).then(response => {
        row.laterStatus = 1
        this.later()
      })
    },
    deleteLater(row){
      deleteLater(row).then(response => {
        row.laterStatus = 0
        this.later()
        if(this.laterList.length == 1){
          this.laterDialogVisible = false
        }
        this.fetchList()
      })
    },
    attention(){
      attention().then(response=>{
        this.attentionList = response.data
      })
    },
    createAttention(row){
      createAttention(row).then(response => {
        row.attentionStatus = 1
        this.attention()
      })
    },
    deleteAttention(row){
      deleteAttention(row).then(response => {
        row.attentionStatus = 0
        this.attention()
        this.fetchList()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 12px;
    font-weight:bold;
    margin-left: 157px;
    margin-right: 145px;
    //font-size: 30px;
    line-height: 46px;
   }
}
</style>
