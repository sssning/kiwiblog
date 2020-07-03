<template>
    <div id='footer'>
        <p>©2020kiwiBlog. ALL RIGHTS RESERVED. </p>
        <p>{{setting.record}}</p>
    </div>
</template>

<script>
export default {
    name:'footerBar',
    props:['setting']
}
</script>

<style lang="scss">
#footer{
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        margin: 5px 0;
        font-size: 13px;
        color: #B9B9B9;
        font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
    }
}
</style>