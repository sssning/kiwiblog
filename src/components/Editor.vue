<template>
    <div id="editor">
        <div id='div1' class="toolbar"></div>
        <div style="padding: 5px 0; color: #ccc"></div>
        <div id='div2' class="text"></div>
    </div>
</template>

<script>
import E from "wangeditor"
export default {
    name:'editor',
    data(){
        return{
            editor:{}
        }
    },
    mounted:function(){
        this.editor = new E('#div1','#div2')
        this.editor.customConfig.zIndex = 90;
        this.editor.create();
    }
}
</script>

<style lang="scss">
#editor{
    .toolbar,.text{
        width: 860px;
        border:solid 1px #fff;
        background: #fff;
    }
    .text{
        height: 300px;
    }
}
</style>