<template>
  <div >

    <My-video></My-video>
    <My-fan   :text1 = "info.text1"  :text2 = "info.text2" :text3 = "info.text3" :text4 = "info.text4" :text5 = "info.text5" :text6 = "info.text6" :text7 = "info.text7" :text8 = "info.text8" :text9 = "info.text9"></My-fan>
    <My-life :text1 = "life.text1" :text2 = "life.text2" :text3 = "life.text3" :text4 = "life.text4" :text5 = "life.text5" :text6 = "life.text6" :text7 = "life.text7"> </My-life>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <!-- <router-view /> -->
</template>

<script>

export default ({
  data(){
    return{
      info:{
          
          text1: "追求极致",
          text2: '不断提高要求，延迟满足感',
          text3: '在更大范围里找最优解，不放过问题，思考本质',
          text4: '持续学习和成长',
          text5: '务实敢为',
          text6: '开放谦逊',
          text7: '坦诚清晰',
          text8: '始终创业',
          text9: '多元兼容',
      },
      life:{
          text1: "在平等开放的氛围里工作",
          text2: '务实平等的工作氛围',
          text3: '不讲 title 和层级，敢于授权新人，专注完成业务目标，没有领地意识',
          text4: '弹性灵活的工作时间',
          text5: '上下班无需打卡，效率为先，你的工作节奏，由你自己来掌控',
          text6: '高效开放的办公环境',
          text7: '开放式工位，即时讨论，让灵感碰撞不受空间约束',
          // num:'39',
          // nul:'../assets/加入字节跳动/ia_2000000'

      }
      







    }

  },


})
</script>

<style scoped>

</style>
