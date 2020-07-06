<template>
    <div id='contents'>
         <router-link class='docs-item'  :to="{path:'/archives',query:{id:item.id}}" v-for="(item,index) in docsList" :key='index'>
            <img src='https://img.sssyao.cn/images/img2.jpg'/>
            <div  class='docs-item-card' >
                <el-row >
                    <el-col :span="10"><h3 class='card-title'>{{item.title}} </h3></el-col>
                    <el-col :span="10">
                        <div class='info'>
                            <span><i class="el-icon-date"></i> {{item.date}}</span>
                            <span><i class='el-icon-view'></i> {{item.views}}</span>
                        </div>
                        <p>随时更新，请不要频繁刷新接口</p>
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
#contents{
    text-align: center;
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

</style>