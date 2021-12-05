<template>
  <div class="includelife">
      <div class="Font">
          <p class="p1">{{text1}}</p>
          <hr>
          <div>
              <p class="p2">{{text2}}</p>
              <p class="p3">{{text3}}</p>
          </div>
          <div>
              <p class="p2">{{text4}}</p>
              <p class="p3">{{text5}}</p>
          </div>
          <div>
              <p class="p2">{{text6}}</p>
              <p class="p3">{{text7}}</p>
          </div>

      </div>
      <div class="inimg">
          <img src="../assets/加入字节跳动/ia_200000039.png" alt="">
      </div>

  </div>
  
</template>

<script>
export default {
    props:{
        text1:String,
        text2:String,
        text3:String,
        text4:String,
        text5:String,
        text6:String,
        text7:String,
        // nul:String,
        // num:String,

    }
}
</script>

<style>
.includelife{
    width: 1344px;
    height: 448px;
    margin: auto;
    display: flex;
}
.inimg{
    width: 783px;
    height: 448px;
}
.Font{
    width: 463px;
    height: 421px;

}
.p1{
    font-size: 28px;
    margin-bottom: 50px;
}
.p2{
    font-size: 20px;
    color: #646A73;
}
.p3{
    font-size: 14px;
    color: #646A73;
}
</style>