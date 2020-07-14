<template>
    <div id='content'>
         <router-link class='itemarticle-content'  :to="{path:'/archives',query:{id:item.id}}" v-for="(item,index) in docsList" :key='index'>
            <div class='itemarticle-img' >
                 <el-image 
                    fit="cover"
                    :lazy="true"
                    :src="item.banner">
                </el-image>
            </div>
            <div class='itemarticle-card'>
                <el-row>
                    <el-col :span="10"><h3 class='itemarticle-title'>{{item.title}} </h3></el-col>
                    <el-col :span="12">
                        <div class='r'>
                            <div class='itemarticle-extra'>
                                <span><i class="el-icon-date"></i> {{item.date}}</span>
                                <span><i class='el-icon-view'></i> {{item.views}}</span>
                            </div>
                            <div class='itemarticle-tags'>
                                <el-tag
                                    v-for="item in item.tags"
                                    :key="item">
                                    {{ item }}
                                </el-tag>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </router-link>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size='5'
            :hide-on-single-page='true'
            @current-change='getDocs'
            :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
import * as docsApi from '@/api/docs.ts'

export default {
    name:"contents",
    data(){
        return {
            docsList:[],
            totalCount:0,
            sendData:{
                pageNum:1,
                pageSize:5
            }
        }
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
    mounted:function(){
       this.getDocs();
    }
}
</script>

<style lang="scss" scoped>
#content{
    text-align: center;
    .itemarticle-content{
        display: block;
        min-width: 600px;
        background: #fff;
        border-radius: 10px;
        margin-bottom: 15px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) ;
        .itemarticle-img{
            position: relative;
            height: 380px;
            border-radius: 10px 10px 0 0;
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
            .el-image{
                height: 100%;
                width: 100%;
                border-radius: 10px 10px 0 0;
            }
        }
        .itemarticle-card{
            padding: 1.5rem;
            box-sizing: border-box;
            background: #fff;
            border-radius: 0 0 10px 10px;       
            .itemarticle-title{
                font-size: 1.6275rem;
                font-weight: 600;
            }
            .el-row{
                height: 100%;
                display: flex;
                align-items: center;
                text-align: center;
                font-size: 14px;
                .r{
                    display: flex;
                    align-items: center;
                    .itemarticle-extra{
                        width: 50%;
                        span{
                            margin-right: 10px;
                        }
                    }
                    .itemarticle-tags{
                        .el-tag{
                            margin:0 5px;
                        }
                    }
                } 
            }
        }
    }
}
.el-pagination{
    padding-top: 30px;
}   

@keyframes sss {
    form{
        transform: scale(1);
    }
    to{
        transform: scale(1.25);
    }
}
</style>