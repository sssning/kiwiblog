<template>
    <div id='archives'>
        <div class='section-banner'>
            <div class='banner'></div>
        </div>
        <div class='section-main'>
            <div class='container'>
               <div class='card'>
                   <div class='card-title'>
                        <h2>{{docs.title}}</h2>
                        <p class='author'>
                            <span><i class="el-icon-date"></i>{{docs.date}}</span>
                        </p>
                   </div>
                   <el-divider></el-divider>
                   <div class='content' v-html="docs.html" ></div>
                   <el-divider></el-divider>
                   <div class='comments'>
                       <div>

                       </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as api from "@/api/docs.ts"

export default {
    name:'archives',
    data(){
        return{
            docs:{},
            comments:[]
        }
    },
    methods:{
        getDocsDetails(){
            api.getDocsDetails({id:this.$route.query.id}).then(res=>{
                res.data.html = unescape(res.data.html);
                this.docs = res.data;
            })
        },

    },
    created:function(){
        this.getDocsDetails()
    }

}
</script>

<style lang="scss">
#archives{
    width: 100%;
    min-height: 700px;
    background: #f4f5f7;
    .section-banner{
        height: 85vh;
        position: relative;
        .banner{
            width: 100%;
            height: 100%;
            background: url('https://img.sssyao.cn/images/img2.jpg')  no-repeat center/cover;
            background-attachment: fixed;
            position: absolute;
            z-index: 1;
            top: 0;
        }
    }
    .section-main{  
        position: relative;
        padding-top: 4rem;
        padding-bottom: 4rem;
        .container{
            display: flex;
            justify-content: center;
            .card{
                margin-top: -150px;
                padding: 30px 50px;
                box-sizing: border-box;
                width: 80vw; 
                min-width: 600px;
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
    }  
}


</style>