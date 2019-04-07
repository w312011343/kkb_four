<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a @click="goback">返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea style="width:100%" v-model="content"></textarea>
                </li>
                <li>
                    <mt-button type="primary" size="large" @click="sendMsg">发表评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="(msg,index) in msgs" :key="index">
                    {{msg.user_name}}： {{msg.content }} {{ msg.add_time | relTime}}
                </li>
            </ul>
            <mt-button size="large" type="danger" plain @click="loadMsgByPage" :disabled="disabled">加载更多按钮{{page}}</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'comment',
        props:['cid'],
        data() {    
            return {
                content:'',//发表的评论信息
                msgs:[],// 评论信息
                page:1,
                disabled:false
            }
        },
        methods: {
            goback() {
                this.$router.go(-1);
            },
            init() {
                this.page = 1;
            },
            sendMsg() {
                this.$axios.post(`postcomment/${this.cid}`,`content=${this.content}`)
                .then(res=>{
                    // 页码归1
                    this.init();
                    // 加载最新的数据
                    this.loadMsgByPage();
                    
                })
                .catch(console.log)
            },
            loadMsgByPage () {
                 this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
                .then(res=>{

                    // 判断响应数据是否不足10条，如果是，禁止按钮并给与提示
                    if (res.data.message.length < 10 && this.page !== 1) {
                        // 给与提示
                        this.$toast({
                          message: '没有数据了',
                          iconClass: 'icon icon-success'
                        });
                        // 禁止按钮再次点击
                        this.disabled = true;
                        return ;
                    }


                    // 有时赋值，有时追加( this.page === 1)
                    if(this.page === 1) {
                        this.msgs = res.data.message;
                    } else {
                        this.msgs = this.msgs.concat(res.data.message);
                    }
                    this.page ++;
                })
                .catch(console.log)
                }
        },
        created() {
            this.loadMsgByPage();
        }
    }

</script>
<style scoped>
.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 5px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>
