<template>
  <div class="dashboard-container">
    <div>
      <span style="font-size: 24px">最新专题</span>
    </div>
    <div class="img">
      <el-row>
        <el-col :span="12">
          <div class="img-one">
            <img :src="logo_one" class="verification-code">
          </div>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="logo_two" class="verification-code">
            <div style="padding: 0px 14px 14px 30px;">
              <a href="https://www.zhihu.com/special/19591186" target="_blank">
                <span style="font-size: 18px">有奖征集 | 五一Vlog计划</span>
                <span style="padding-left: 140px">
                  <el-button type="primary" plain size="mini">关注专题</el-button>
                </span>
              </a>
              <a href="https://www.zhihu.com/question/391643464" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">我的五一Vlog</el-button>
                  <span style="padding-left: 8px">2020年五一假期,你拍了那些好看或者有趣的视频?</span>
                </div>
              </a>
              <a href="https://www.zhihu.com/question/391720947" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">我的五一Vlog</el-button>
                  <span style="padding-left: 8px">能否通过一段视频，分享你或家人拿手的劳动技能？</span>
                </div>
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import logo_one from '@/assets/dashboard/shouye02.jpg'
import logo_two from '@/assets/dashboard/shouye03.jpg'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
      logo_one: logo_one,
      logo_two: logo_two
    }
  }
}
</script>

<style lang="scss" scoped>
.img{
  margin-top: 15px;
}
.img-one{
  width: 472px;
  height: 375px;
}
.img-two{
  margin-top: 20px;
  width: 479px;
  height: 200px;
}
.card{
  width: 480px;
  height: 200px;
}
.verification-code {
  height: 100%;
  width: 100%;
}
.verification-code2 {
  height: 100%;
  width: 100%;
}
.dashboard {
  &-container {
    margin: 20px;
    font-weight:bold;
    margin-left: 157px;
    margin-right: 145px;
    line-height: 46px;
  }
}
</style>
