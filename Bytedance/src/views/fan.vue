<template>
    <div>
        <div class="includeimgtext">
            <div class="img">
                <img src="../assets/加入字节跳动/ia_200000038.png" alt="" width="865.94px" height="473.09px">
            </div>
            <div class="text">
                <p class="p1">{{text1}}</p>
                <div class="includep2">
                    <p class="p2">{{text2}}</p>
                    <p class="p2">{{text3}}</p>
                    <p class="p2">{{text4}}</p>              
                </div>
                <p class="p3">{{text5}}</p>
                <p class="p3">{{text6}}</p>
                <p class="p3">{{text7}}</p>
                <p class="p3">{{text8}}</p>
                <p class="p3">{{text9}}</p>
            </div>
      
        </div>
        <p class="life">字节生活</p>
    </div>
</template>

<script scoped>
export default {
    props :['img','text1','text2','text3','text4','text5','text6','text7','text8','text9'],

}
</script>

<style>
div{
    /* border:1px solid #646A73; */
}
.includeimgtext{
    display: flex;
    
}
.img{
    width: 865.94px;
    height: 473.09px;
}
.text{
    width: 336px;
    height: 450px;
    margin-left: 120px;

}
.p1{
    font-size: 28px;
    margin-bottom:20px;

}
.p2{
    font-size: 16px;
    color: #646A73;

}
.includep2{
    margin-bottom: 15px;
}
.p3{
    font-size: 20px;
    color: #646A73;
    margin-bottom: 10px;
    margin-top: 10px;
}
img{
    width: 865.94px;
    height: 473.09px;
}
.life{
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 120px;
    margin-left: 80px;
}
</style>