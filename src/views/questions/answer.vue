<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">
    <div>
      <!--    整行卡片: 头    -->
      <el-card class="box-card">
        <!--        -->
        <el-row>
          <el-col :span="17">
            <div style="font-size: 22px;">
              如果可以对以前的自己说一句话，你会和她（他）说什么？
            </div>
            <div style="margin-top: 12px; color: #99a9bf;">
              <el-button type="primary" size="medium">关注问题</el-button>
              <span style="margin-left: 12px">
                <el-button @click="answerStatus = 1" type="primary" icon="el-icon-edit" size="medium" plain>写回答</el-button>
              </span>
              <span style="margin-left: 12px">
                <el-button type="info" icon="el-icon-user-solid" size="medium" plain>邀请回答</el-button>
              </span>
              <a style="margin-left:12px">
                  <i class="el-icon-s-comment"></i>
                  <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                    添加评论
                  </span>
              </a>
              <a style="margin-left:12px">
                <i class="el-icon-s-promotion"></i>
                <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                  分享
                </span>
              </a>
              <a style="margin-left:12px">
                <i class="el-icon-s-flag"></i>
                <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                  举报
                </span>
              </a>
              <i class="el-icon-more" style="margin-left: 12px;"></i>
            </div>
          </el-col>
          <el-col :span="7" style="">
            <div style="float: right">
              <span style="font-size: 14px;">
                {{ attentionNumber }}
                <span style="margin-left: 2px; font-size: 14px; font-weight:normal;color: #99a9bf;" >
                  关注者
                </span>
              </span>
              <span >
                  <el-divider direction="vertical"></el-divider>
                </span>
              <span style="font-size: 14px;">
                {{ volumeNumber }}
                <span style="margin-left: 2px; font-size: 14px; font-weight:normal;color: #99a9bf;" >
                  被浏览
                </span>
              </span>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <!--  评论区  -->
    <div>
      <el-row>
        <!--  左侧展示栏  -->
        <el-col :span="16">
          <el-card class="box-card" style="margin-top: 8px" v-if="answerStatus == 1">
            <div slot="header" style="height: 30px;margin-top: 0px">
              <el-row>
                <el-col :span="2">
                  <img :src="user_one" class="img_tx">
                </el-col>
                <el-col :span="20" style="margin-top: -8px;margin-left: 10px;">
                  <span >你丫闭嘴</span>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-input
                type="textarea"
                placeholder="请输入问题"
                :autosize="{ minRows: 10, maxRows: 20}"
                v-model="AnswerVO.answerName"
                maxlength="300"
                show-word-limit
              >
              </el-input>
              <div slot="footer" class="dialog-footer" style="float: right">
                <el-button type="info" @click="answerStatus = 0" size="mini" plain>收起回答</el-button>
                <el-button type="primary" @click="createAnswer(0)" size="mini" plain>提交回答</el-button>
              </div>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 8px">
            <div slot="header" style="height: 30px;margin-top: -14px">
              {{ answerNumber }} 个回答
              <a>
                <span style="float: right;font-size: 13px; font-weight:normal;color: #99a9bf;">
                  默认排序
                  <i class="el-icon-d-caret"></i>
                </span>
              </a>
            </div>
            <div v-for="row in list" :key="row.index" class="text item">
              <div>
                <el-row>
                  <el-col :span="2" style="height: 50px">
                    <img :src="user_one" class="img_tx">
                  </el-col>
                  <el-col :span="20" style="margin-top: -8px;margin-left: 10px;">
                    <span >{{ row.nickName }}</span>
                  </el-col>
                </el-row>
              </div>
              <div style="margin-top: -5px;">
                <span style="font-size: 14px; font-weight:normal;margin-left: -53px">
                  {{ row.answerName }}
                </span>
              </div>
              <div style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                  发布于 2020-02-02
              </div>
              <div style="color: #99a9bf;">
                <el-button type="primary" icon="el-icon-caret-top" size="mini" plain>赞同 10</el-button>
                <a style="margin-left:12px">
                  <i class="el-icon-s-comment"></i>
                  <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                    100条评论
                  </span>
                </a>
                <a style="margin-left:12px">
                  <i class="el-icon-s-promotion"></i>
                  <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                  分享
                </span>
                </a>
                <a style="margin-left:12px">
                  <i class="el-icon-star-off"></i>
                  <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                  收藏
                </span>
                </a>
                <i class="el-icon-more" style="margin-left: 12px;"></i>
              </div>
              <div style="margin-top: -17px">
                <el-divider></el-divider>
              </div>
            </div>
          </el-card>
        </el-col>
        <!--    右侧推荐 10条问答 10条文章   -->
        <el-col :span="8">
          <el-card class="box-card" style="margin-top: 8px;margin-left: 7px">
            <div slot="header" style="height: 30px;margin-top: -14px">
              <span>相关问题</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item" style="font-size: 14px; font-weight:normal;">
              <a>{{'可以留一句话给我吗 什么都可以 好吗？ '}}</a>
              <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                {{ o }}个回答
              </span>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 8px;margin-left: 7px">
            <div slot="header" style="height: 30px;margin-top: -14px">
              <span>相关文章</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item" style="font-size: 14px; font-weight:normal;">
              <a>{{'可以留一句话给我吗 什么都可以 好吗？ '}}</a>
              <span style="font-size: 14px; font-weight:normal;color: #99a9bf;">
                {{ o }}个评论
              </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {
  getList, createAnswer
} from '@/api/questions/answer'
import user_one from '@/assets/dashboard/user_one.jpg'

export default {
  name: 'Comment',
  computed: {...mapGetters(['name'])},
  data() {
    return {
      list: [],
      multipleSelection: [],
      user_one: user_one,
      answerStatus: this.$route.query.answerStatus,
      attentionNumber: 0,
      volumeNumber: 0,
      answerNumber: 0,
      AnswerVO:{}
    }
  },
  created() {
    /* 调用起始方法 */
    this.fetchList()
  },
  methods: {
    fetchList() {
      let id = this.$route.query.id;
      getList(id).then(response => {
        this.list = response.data.answers
        this.attentionNumber = response.data.attentionNumber
        this.volumeNumber = response.data.volumeNumber
        this.answerNumber = response.data.answerNumber
      })
    },
    createAnswer(commentId){
      let querstionId = this.$route.query.id;
      createAnswer(this.AnswerVO, querstionId, commentId, this.name).then(response => {
        this.answerStatus = 0
        this.AnswerVO = {}
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
    font-weight: bold;
    margin-left: 157px;
    margin-right: 145px;
    line-height: 46px;
  }
}
.img_tx {
  margin-top: -8px;
  margin-bottom: 0px;
  -webkit-box-shadow: 0px 0px 8px #DCDCDC;
  height: 50px;
  width: 50px;
}
</style>
