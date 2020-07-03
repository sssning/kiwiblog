<template>
    <div id='home'>
        <div class='section-banner'>
            <div class='banner'></div>
        </div>
        <div class='section-content'>
            <div class='container'>
                <router-link class='docs-item'  :to="{path:'/archives',query:{id:item._id}}" v-for="(item,index) in docsList" :key='index'>
                    <img src='https://img.sssyao.cn/images/img2.jpg'/>
                    <div  class='docs-item-card' >
                        <el-row >
                            <el-col :span="10"><h3 class='card-title'>{{item.title}} </h3></el-col>
                            <el-col :span="10">
                                <div class='info'>
                                    <span><i class="el-icon-date"></i>{{item.date}}</span>
                                </div>
                                <p>随时更新，请不要频繁刷新接口</p>
                            </el-col>
                        </el-row>
                    </div>
                </router-link>
            </div>
             <div class='toolbar'>
                <div class='toolbar-musicbox toolbar-item'>
                    <h4>音乐盒</h4>
                    <div class='toolbar-content' >
                         <APlayer v-loading='loading'/>
                    </div>
                </div>
            </div>
             <el-pagination
                background
                layout="prev, pager, next"
                :page-size='5'
                :hide-on-single-page='true'
                @current-change='getDocs'
                :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>


<script>

import * as settingApi from '@/api/setting.ts'
import * as docsApi from '@/api/docs.ts'
import APlayer from "@/components/APlayer"


export default {
    name:'home',
    data(){
        return{
            loading:true,
            docsList:[],
            totalCount:0,
            sendData:{
                pageNum:1,
                pageSize:5
            }
        }
    },
    components:{APlayer},
    computed:{

    },
    methods:{
        getDocs(num = 1){
            this.sendData.pageNum = num;
            docsApi.getDocslist(this.sendData).then(res=>{
                this.docsList = res.data;
                this.totalCount = res.totalCount;
            })
        }
    },
    created:function(){

    },
    mounted:function(){
       this.getDocs()
        
    }
}
</script>

<style lang="scss" >
#home{
    width: 100%;
    min-height: 700px;
    .section-banner{
        height: 100vh;
        position: relative;
        .banner{
            width: 100%;
            height: 100%;
            background: url('https://img.sssyao.cn/images/img2.jpg')  no-repeat center/cover;
            background-attachment: fixed;
            position: absolute;
            z-index: -1;
            top: 0;
        }
    }
    .section-content{
        width: 100%;
        padding: 50px 0;
        background: #f4f5f7;
        display: flex;
        justify-content: center;
        .toolbar{
            width: 20%;
            margin-left: 15px;
            .toolbar-item{
                background: #fff;
                padding: 10px;
                border-radius: 5px;
                h4{
                    font-size: 16px;
                    color: #000;
                    padding: 10px 5px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #c3c3c3;
                }
            }
        }
        .container{
            width: 55%;
            .docs-item{
                display: block;
                min-width: 600px;
                background: #fff;
                border-radius: 10px;
                margin-bottom: 30px;
                box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) ;
                img{
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    display: block;
                }
                .docs-item-card{
                    height: 120px;
                    padding: 1.5rem;
                    box-sizing: border-box;
                    background: #fff;
                    border-radius: 0 0 10px 10px;       
                    .card-title{
                        font-size: 1.6275rem;
                        font-weight: 600;
                    }
                    .el-row{
                        height: 100%;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        font-size: 14px;
                        .info{
                            margin-bottom: 5px;
                            span{
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
        
    }
}



</style>