<template>
    <div id='container'>
        <div id='banner'></div>
        <div class='container'>
            <div class='toolbar'>
                <div class='toolbar-uploadfile'>
                    <el-button type="primary" size='mini' @click="clickUploadBtn">上传图片</el-button>
                    <input type="file" accept="image/jpeg,image/jpg,image/png,image/svg,image/svg+xml" style="display:none" id="file" value='上传图片' />
                </div>
                <div class='toolbar-preview'>
                    <img :draggable='true' v-for="item in 3" :key='item' :src="'https://img.sssyao.cn/images/img'+item+'.jpg'"
                        @click="clickImg(item)"
                        @dragstart="dragStart($event)"
                     />
                </div>
            </div>
            <div class='canvas-container' @drop="drop($event)">
                <canvas id='mycanvas'></canvas>
            </div>
        </div>
    </div>
</template>


<script>
import { fabric } from 'fabric'

export default {
    name:'canvasDemo',
    data(){
        return {
            mycanvas:{},
            status:false
        }
    },  
    methods:{
        clickUploadBtn:function(){
            var file = document.getElementById('file');
            file.click()
        },
        clickImg:function(index){
            var _this = this;
            let url = `https://img.sssyao.cn/images/img${index}.jpg`
            fabric.Image.fromURL(url,function(oImg){
                oImg.scale(0.1);
                _this.mycanvas.add(oImg);
            });
        },
        dragStart:function(e){
            this.status = true;
            e.dataTransfer.setData("src",e.target.src);
        },
        drop:function(e){
            var _this = this;
            if(this.status){
                var url=e.dataTransfer.getData("src");
                fabric.Image.fromURL(url,function(oImg){
                    oImg.scale(0.1);
                    oImg.top = e.offsetY - (oImg.height * 0.1) / 2;
                    oImg.left = e.offsetX - (oImg.width * 0.1) / 2;
                    _this.mycanvas.add(oImg);
                });
            }
            this.status = false;
        }
    },
    mounted:function(){
        var _this = this;
        var file = document.getElementById('file');
        this.mycanvas = new fabric.Canvas('mycanvas',{
            width:800,
            height:500
        });
        file.onchange = function() {
            var fileData = this.files[0];
            if(fileData.type !== 'image/png' && fileData.type !== 'image/svg+xml' && fileData.type !== 'image/jpeg' && fileData.type !== 'image/svg '){
                _this.$message.error('请上传png,svg,jpg文件');
                return
            } 
            var reader = new FileReader();
            reader.readAsDataURL(fileData);
            reader.onload = function(e) {
                fabric.Image.fromURL(this.result,function(oImg){
                    if(_this.mycanvas.width - oImg.width < 0){
                        oImg.scale(_this.mycanvas.width / oImg.width)
                    }else if(_this.mycanvas.height - oImg.height < 0){
                        oImg.scale(_this.mycanvas.height / oImg.height)
                    }
                    _this.mycanvas.add(oImg);
                });
            }
        };

    }
}
</script>

<style lang="scss" scoped>
#container{
    width: 100%;
    min-height: 700px;
    height: 100vh;
    position: relative;      
    display: flex;
    align-items: center;
    justify-content: center;   
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
        margin-top: 50px;
        .toolbar{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .toolbar-preview{
                margin-left: 20px;
                img{
                    width: 64px;
                    height: 64px;
                    margin-right: 10px;
                    cursor:all-scroll;
                }
            }
        }
        #mycanvas{
            height: 100%;
            width: 100%;
            background: #fff;
        }
    }
}
</style>