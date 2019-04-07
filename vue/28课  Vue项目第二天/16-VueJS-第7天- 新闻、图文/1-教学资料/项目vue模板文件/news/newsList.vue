<template>
    <div class="tmpl">
      <div class="cms-s-header">
        <h1 >&nbsp<</h1>
        <h1 class="page-title">Pull up</h1>
      </div> 

    
    <div class="demo">
      <ul >
            <li >
                <a href="#">
                    <img class="" src="http://vue.studyit.io/upload/201504/16/201504161229442885.jpg">
                    <div >
                        <span>我爱你中国</span>
                        <div class="news-desc">
                            <p>点击数:222222</p>
                            <p>发表时间:333333</p>
                        </div>
                    </div>
                </a>
            </li>
            <li class="line"></li>
        </ul>
    </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding: 10px 15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}


.cms-s-header{
        background-color: #f7f7f7;
}
.tmpl h1{
   display: inline-block;
}
.page-title{
    margin-left: 25%;
}
.line {
    margin-left: 16px;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
}




</style>