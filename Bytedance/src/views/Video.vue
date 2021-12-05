<template>
  <div>
    <div>
        <video autoplay loop muted>
            <source src="https://lf3-cdn-tos.bytescm.com/obj/ttfe/ATSX/mainland/gongquhunjian_1080.min.mp4"/>
    
    
        </video>
        <ul>
            
            <li>主页</li>
            <li>职位</li>
            <li>产品与服务</li>
            <li>校园招聘</li>
            <li>登录</li>
        </ul>
        <div class="center includesearch">
            <h1 class="white ">和优秀的人  做有挑战的事</h1>
            <h3 class="white join " >JOIN BYTEDANCE</h3>
            <form action="//jobs.bytedance.com/experienced/position" target="_blank">
                <input class="search" placeholder="  .输入职位或城市进行搜索">
                <button class="search2"></button>
            </form>
        </div>                
    </div>
    <p class="weight32 top">探索你感兴趣的职位</p>
    <div id="cirpicture">
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000030.png" alt="" ></div>
            <div class="child2 weight24  center2">研发</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000031.png" alt=""  ></div>
            <div class="child2 weight24 center2">产品</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000032.png" alt="" ></div>
            <div class="child2 weight24 center2">运营</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000033.png" alt="" ></div>
            <div class="child2 weight24 center2">设计</div>
        </div>
    </div>
    <div id="cirpicture">
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000034.png" alt="" ></div>
            <div class="child2 weight24 center2">市场</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000035.png" alt="" ></div>
            <div class="child2 weight24 center2">销售</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="../assets/加入字节跳动/ia_200000036.png" alt="" ></div>
            <div class="child2 weight24 center2">职能/支持</div>
        </div>
        <div class="fa">
            <div class="child1"><img src="..//assets/加入字节跳动/ia_200000037.png" alt="" ></div>
            <div class="child2 weight24 center2">全部职位</div>
        </div>
    </div>
    <div class="zijfan">
        <p class=" weight32">字节范</p>>

        <p class="">字节范是字节跳动企业文化的重要组成部分，是我们共同认可的行为准则</p>
    
    </div>
  </div>
</template>

<script>
export default {
   name:'MyVideo',
   date(){
       return{
            
       }
   },
}
</script>

<style scoped>
*{  
    margin: 0px;  
    padding: 0px;  
}  
source{  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
}
video{  
    position: absolute;  
    right: 0px;  
    bottom: 0px;  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
            /*加滤镜*/
    /* filter: blur(15px); //背景模糊设置 */
    /* -webkit-filter: grayscale(20%);   */
    /*filter:grayscale(100%); //背景灰度设置*/  
    z-index:-11
}
li{
    color: white;
    display: inline;
    padding: 10px;
    margin-top: 10px;
    
}  
ul{
    margin-left: 650px;
}
.center{
    margin: 0 auto;

}
.includesearch{
    width: 1000px;
    margin-left: 200px;
    position: relative;
    margin-top: 200px;
    text-align: center;
    padding: 60px;
}
.search{
	/* border:1px solid #c8c8c8; */
	border-radius:30px;
	margin-left: 2px;
	margin-top: 5px;
	padding:0px;
	width: 445px;
	height: 50px;
	color:#ededf1;
    
}
.search2{
    
    background: #3370ff;
    border: none;
    color: #fff;
    border-radius: 24px;
    font-size: 20px;
    line-height: 46px;
    height: 48px;
    width: 48px;
    min-width: auto;
    position: absolute;
    top: 218px;
    right: 340px;
    display: inline-block;
    
}

/* :hover{
    background-color:rgb(122, 122, 233) ;
} */
.white{
    color: white;
}
.join{
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
}
h1{
    font-size: 50px;
}
.top{
    margin-top: 300px;
    margin-left: 600px;
    margin-bottom: 20px;
}
#cirpicture{
    width: 80%;
    display: flex;
    margin-bottom: 50px;
    margin-left: 30px;
    margin: auto;
    justify-content: space-between;
    
}
div{
    /* border:1px solid brown; */
}
.child1{
    height: 216px;
}

.fa{
    width: 216px;
    height: 388px;
}
.weight32{
    font-size: 32px;
}
.weight24{
    font-size: 24px;
}
.zijfan{
    margin-bottom: 40px;
}
.center2{
    text-align: center;
}
img{
    width: 210px;
    height: 210px;
}
</style>