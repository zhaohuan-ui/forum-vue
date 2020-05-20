<template>
  <div class="dashboard-container">
    <div>
      <span style="font-size: 24px">最新专题</span>
    </div>
    <!--  第一行页面  -->
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
            <div style="padding: 0px 14px 14px 28px;">
              <a href="https://www.zhihu.com/special/19591186" target="_blank">
                <span style="font-size: 18px">有奖征集 | 五一Vlog计划</span>
                <span style="padding-left: 140px">
                  <el-button type="primary" plain size="mini">关注专题</el-button>
                </span>
              </a>
              <a href="https://www.zhihu.com/question/391643464" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">我的五一Vlog</el-button>
                  <span style="padding-left: 6px">2020年五一假期,你拍了那些好看或者有趣的视频?</span>
                </div>
              </a>
              <a href="https://www.zhihu.com/question/391720947" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">我的五一Vlog</el-button>
                  <span style="padding-left: 6px">能否通过一段视频,分享你或家人拿手的劳动技能?</span>
                </div>
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--  第二行页面  -->
    <div class="img">
      <el-row>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }" class="img-one">
            <img :src="logo_four" class="verification-code">
            <div style="padding: 0px 14px 14px 28px;">
              <a href="https://www.zhihu.com/special/21221019" target="_blank">
                <span style="font-size: 18px">武汉 | 见字如面</span>
                <span style="padding-left: 215px">
                  <el-button type="primary" plain size="mini">关注专题</el-button>
                </span>
              </a>
              <a href="https://www.zhihu.com/special/21221019" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">与你·见字如面</el-button>
                  <span style="padding-left: 6px">愿你今日所获,能解明日所获!</span>
                </div>
              </a>
              <a href="https://www.zhihu.com/special/21221019" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">致年轻人的「不迷茫」</el-button>
                  <span style="padding-left: 6px">为梦想而动!</span>
                </div>
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="logo_five" class="verification-code">
            <div style="padding: 0px 14px 14px 28px;">
              <a href="https://www.zhihu.com/special/19641599" target="_blank">
                <span style="font-size: 18px">垃圾分类 | 我们一起行动</span>
                <span style="padding-left: 151px">
                  <el-button type="primary" plain size="mini">关注专题</el-button>
                </span>
              </a>
              <a href="https://www.zhihu.com/question/391643464" target="_blank">
                <div style="font-size: 14px">
                  <el-button type="info" plain size="mini">精选议题</el-button>
                  <span style="padding-left: 8px">垃圾分类从我做起!</span>
                </div>
              </a>
              <a href="https://www.zhihu.com/question/391720947" target="_blank">
                <div style="font-size: 14px">
                  <!--  <el-button type="info" plain size="mini"></el-button>-->
                  <span style="padding-left: 6px"></span>
                </div>
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--  专栏  -->
    <div style="margin-top: 15px">
      <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
      <span style="font-size: 24px">专栏</span>
    </div>
    <div>
      <el-row>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <a href="https://zhuanlan.zhihu.com/testdaily" target="_blank">
            <img :src="logo_six" class="verification-code">
              <div style="padding: 0px 14px 0px 58px;">
                <span style="font-size: 18px">学习 | 大学生涯</span>
                <div>
                  <span style="padding-left: 18px">
                    <el-button type="primary" plain size="mini">进入专栏</el-button>
                  </span>
                </div>
              </div>
            </a>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <a href="https://zhuanlan.zhihu.com/newsilkroad" target="_blank">
            <img :src="logo_seven" class="verification-code">
              <div style="padding: 0px 14px 0px 58px;">
                <span style="font-size: 18px">故事 | 一带一路</span>
              </div>
              <div>
                <span style="padding-left: 78px">
                  <el-button type="primary" plain size="mini">进入专栏</el-button>
                </span>
              </div>
            </a>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <a href="https://zhuanlan.zhihu.com/yuanye" target="_blank">
              <img :src="logo_eight" class="verification-code">
              <div style="padding: 0px 14px 0px 58px;">
                <span style="font-size: 18px">原创 | 动漫评论</span>
                <div>
                  <span style="padding-left: 22px">
                    <el-button type="primary" plain size="mini">进入专栏</el-button>
                  </span>
                </div>
              </div>
            </a>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <a href="https://zhuanlan.zhihu.com/c_136968229" target="_blank">
              <img :src="logo_nine" class="verification-code">
              <div style="padding: 0px 14px 0px 58px;">
                <span style="font-size: 18px">生活 | 摇摆电影</span>
              </div>
              <div>
                <span style="padding-left: 82px">
                  <el-button type="primary" plain size="mini">进入专栏</el-button>
                </span>
              </div>
            </a>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--  更多专栏  -->
    <div style="margin-top: 30px;margin-left: 418px;">
      <el-button type="info" round>查看更多专栏</el-button>
    </div>

    <!--  论坛首页结束  -->
    <div style="margin-top: 20px;margin-left: 385px; font-size: 12px" >
      论坛·应用·工作·联系我们 @ 2020 论坛
    </div>
  </div>
</template>

<script>
import logo_one from '@/assets/dashboard/shouye02.jpg'
import logo_two from '@/assets/dashboard/shouye03.jpg'
import logo_four from '@/assets/dashboard/shouye04.jpg'
import logo_five from '@/assets/dashboard/shouye05.jpg'
import logo_six from '@/assets/dashboard/shouye06.jpg'
import logo_seven from '@/assets/dashboard/shouye07.jpg'
import logo_eight from '@/assets/dashboard/shouye08.jpg'
import logo_nine from '@/assets/dashboard/shouye09.jpg'
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
      logo_two: logo_two,
      logo_four: logo_four,
      logo_five: logo_five,
      logo_six:logo_six,
      logo_seven:logo_seven,
      logo_eight:logo_eight,
      logo_nine:logo_nine
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
  height: 371px;
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
    margin: 12px;
    font-weight:bold;
    margin-left: 157px;
    margin-right: 145px;
    line-height: 46px;
  }
}
</style>
