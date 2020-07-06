<template>
    <div id='archives'>
        <div class='archives-main'>
            <div class='archives-container'>
               <div class='card'>
                   <div class='card-title'>
                        <h2>{{docs.title}}</h2>
                        <p class='author'>
                            <span><i class="el-icon-date"></i> {{docs.date}}</span>
                            <span><i class='el-icon-view'></i> {{docs.views}}</span>
                        </p>
                   </div>
                   <el-divider></el-divider>
                   <div class='content' v-html="docs.html" ></div>
                   <el-divider></el-divider>
               </div>
            </div>
            <div class='comment-container'>
                <div class='comment-submit comment-sharing'>
                    <el-row>
                        <el-input class='name' v-model="form.name" size='mini' placeholder="昵称"></el-input>
                    </el-row>
                    <el-row>
                        <el-input
                            class='content'
                            type="textarea"
                            size='mini'
                            placeholder="随便填"
                            resize='none'
                            v-model="form.content">
                        </el-input>
                    </el-row>
                    <el-row>
                        <el-button type="primary" size='mini' @click="submitComment">发表评论</el-button>
                    </el-row>
                </div>
                <div class='comment-item comment-sharing' v-for='(item,index) in comments' :key='index'>
                    <div class='head'>
                        <div class='img'><img src='https://raindays.cn/image/comment/10.jpg' /></div>
                        <div class='name'>
                            <a href='javascript:void(0);'>{{item.name}}</a>
                            <div class='r'>
                                <div class='reply'>回复</div>
                                <span>{{item.date}}</span>  
                            </div>
                        </div>
                    </div>
                    <div class='comment-content'>
                        {{item.content}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as docsApi from "@/api/docs.ts"
import {formatDate} from "@/utils/common.ts"
import * as commentApi from "@/api/comment.ts"

export default {
    name:'archives',
    data(){
        return{
            docs:{},
            form:{
                id:this.$route.query.id,
                name:'',
                content:''
            },
            comments:[]
        }
    },
    methods:{
        getDocsDetails(){
            docsApi.getDocsDetails({id:this.$route.query.id}).then(res=>{
                res.data.html = unescape(res.data.html);
                this.docs = res.data;
            })
        },
        getComments(){
            commentApi.commentsList({id:this.$route.query.id}).then(res=>{
                this.comments = res.data;
            })
        },
        submitComment(){
            let sendData = this.form;
            if(!this.form.name){
                this.$message.error('难道阁下就是佚名！');
                return
            }
            if(!this.form.content){
                this.$message.error('一个字起步！');
                return
            }
            this.form.date = formatDate(new Date().getTime());
            commentApi.addComment(this.form).then(res=>{
                this.$message.success(res.msg);
                this.form.name = '';
                this.form.content = '';
                this.getComments();
            })
        },
    },
    created:function(){
        this.getDocsDetails();
        this.getComments();
    }

}
</script>

<style lang="scss" >
#archives{
    width: 100%;
    .archives-main{  
        position: relative;
        padding-top: 4rem;
        padding-bottom: 4rem;
        .archives-container{
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            .card{
                margin-top: -150px;
                padding: 30px 50px;
                box-sizing: border-box;
                min-width: 600px;
                width: 100%;
                background: #fff;
                position: relative;
                z-index: 2;
                border-radius: 10px;
                box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) ;   
                .content{
                    h1,h2,h3,h4,h5,h6{
                        margin-bottom: 16px;
                        color: #000;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    li,p{
                        margin-bottom: 16px;
                        word-wrap:break-word ;  
                        font-size: 16px;
                    }
                    a{
                        word-break: break-all;
                        outline: 0;
                        background-color: transparent;
                        color: #51aded;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                    pre{
                        padding: 16px;
                        overflow: auto;
                        font-size: 12px;
                        line-height: 1.45;
                        background-color: #f6f8fa;
                        border-radius: 6px;
                        margin-bottom: 16px;
                        code{
                            display: inline;
                            max-width: auto;
                            padding: 0;
                            margin: 0;
                            overflow: visible;
                            line-height: inherit;
                            word-wrap: normal;
                            background-color: initial;
                            border: 0;
                        }
                    }
                }
                .card-title{
                    margin: 50px auto;
                    text-align: center;
                    color: #333;
                    h2{
                        font-size: 2.75rem;
                        font-weight: 600;
                        line-height: 1.3;
                        margin-bottom: 20px;
                    }
                    .author{
                        font-size: 16px;
                        margin-bottom: 10px;
                        span{
                            margin:0 10px;
                        }
                    }
                } 
                .comments{
                    padding-top:70px;
                    .zero{
                        text-align: center;
                        font-size: 1.75rem;
                        font-family: inherit;
                        font-weight: 400;
                        line-height: 1.5;
                        margin-bottom: .5rem;
                        color: #32325d;
                    }
                }
            }
        } 
        .comment-container{
            .comment-sharing{
                background: #fff;
                padding: 20px;
                box-sizing: border-box;
                border-radius: 10px;
                margin-bottom: 20px;
                box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
            }
            .comment-submit{
                .name{
                    width: 30%;
                }
                .el-row{
                    margin-bottom: 10px;
                }
                textarea{
                    height: 100px;
                }
            }
            .comment-item{
                position: relative ;
                &:hover{
                    .reply{
                        opacity: 1 !important;
                    }
                }
                .head{
                    display: flex;
                    img{
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        margin-right: 15px;
                    }
                    .name{
                        flex:1;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        a{
                            font-weight: 400;
                            color: #ef6d57;
                            font-size: 16px;
                            height: 20px;
                            transition: all .3s;
                            text-decoration: none;
                            position: relative;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        .r{
                            display: flex;
                            .reply{
                                opacity: 0;
                                font-size: 13px;
                                color: #ef6d57;
                                margin-right: 12px;
                                cursor: pointer;
                                transition: all .2s;
                                text-decoration: underline;
                                text-transform: capitalize;
                            }
                            span{
                                color: #999;
                                font-size: 13px;
                                letter-spacing: 0;
                            }
                        }  
                    }
                }
                .comment-content{
                    color: #303030;
                    font-size: 13px;
                    padding-left: 63px;
                }
            }
        }
    }  
}


</style>