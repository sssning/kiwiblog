<template>
    <div id='setting'>
        <div id='banner'></div>
        <div class='container'>
            <el-form class='form'   :model="form" label-position='top' label-width="80px" size='mini'>
                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <Editor ref='editor' />
                </el-form-item>
                <el-form-item align='center'>
                    <el-button class='publish-btn' @click="saveHtml">发布</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>
import Editor from '@/components/Editor';
import * as docsApi from '@/api/docs.ts'
export default {
    name:'setting',
    data(){
        return{
            form:{
                title:'',
                html:'',
                creattime:'',
                author:'kiwi'
            }
        }
    },
    components:{Editor},
    methods:{
        saveHtml(){
            let date = new Date();
            this.form.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.form.creattime = date.getTime();
            this.form.html = escape(this.$refs.editor.editor.txt.html());
            if(this.form.title.length <= 0){
                 this.$message({
                    message: '不加标题你发布个锤子',
                    type: 'error'
                });
                return
            }
            if(this.$refs.editor.editor.txt.text() <= 0){
                 this.$message({
                    message: '不写内容你发布个锤子',
                    type: 'error'
                });
                return
            }
            docsApi.saveDocs(this.form).then(res=>{
                if(res.code === 0){
                    this.$message({
                        message: '文章发布成功',
                        type: 'success'
                    });
                }
            })
        },
    },
    mounted:function(){
        
    }
}
</script>

<style lang="scss" scoped>

#setting{
    width: 100%;
    min-height: 700px;
    height: 100vh;
    position: relative;
    #banner{
        width: 100%;
        height: 100%;
        background: url('https://img.sssyao.cn/images/img1.jpg')  no-repeat center/cover;
        background-attachment: fixed;
        position: absolute;
        z-index: -1;
        top: 0;
    }
    .container{
        padding-top: 100px;
        width: 60%;
        margin: 0 auto;
        .form{
            width: 860px;
        }
        label{
            color: #fff;
        }
        .publish-btn{
            width: 100px;
        }
    }
}

</style>