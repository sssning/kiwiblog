<template>
    <div id='navigation'>
        <div class='tools-nav'>
            <el-dropdown class='tools-nav-page' placement='bottom-start'>
                <span class="el-dropdown-link menu-item" >
                    <router-link to='/'>
                        <img class='logo' src='@/assets/logo.png' /> 
                    </router-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link  to='/'>
                         <el-dropdown-item icon='el-icon-s-home'>
                            <span>首页</span>
                        </el-dropdown-item>
                    </router-link>
                    <router-link  to='/setting'>
                         <el-dropdown-item icon='el-icon-setting'>
                            <span>文章管理</span>
                        </el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class='tools-link'>
            <el-tooltip v-for='item in linkUrl' :key='item.svg' class="item" effect="dark" :content="item.text" placement="bottom">
                <a :href='item.src' target="_blank">
                    <svg aria-hidden="true" class='icon svg'>
                        <use :xlink:href='item.svg'></use>
                    </svg>
                </a>
            </el-tooltip>
        </div>
    </div>
</template>


<script>
export default {
    name:'navigation',
    data(){
        return{
            linkUrl:[
                {src:'https://github.com/sssning',svg:'#icon-github',text:'gihub'},
                {src:'https://steamcommunity.com/profiles/76561198104671233/',svg:'#icon-steam',text:'steam'},
                {src:'https://www.zhihu.com/people/xing-yuan-95-98',svg:'#icon-zhihu',text:'知乎'},
                {src:'https://space.bilibili.com/8089279',svg:'#icon-bilibili-fill',text:'bilibili'},
                {src:'https://weibo.com/u/5022389255',svg:'#icon-weibo',text:'weibo'},
            ]
        }
    }
}
</script>

<style lang="scss">
#navigation{
    height: 72px;
    width: 100%;
    min-width: 600px;
    padding: 0 10%;
    box-sizing: border-box;;
    position: fixed;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    background: #fff;
    .tools-nav{
        display: flex;
        align-items: center;
        .logo{
            width: 32px;
            height: 32px;
        }
        .tools-nav-page{
            color: #fff;
            padding: 0 10px;
            cursor: pointer;
        }
    }
    .tools-link{
        display: flex;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 42px;
            height: 42px;
            border-radius: 42px;
            color: rgba(0,0,0,.5);
            margin: 0 4px;
            &:hover{
                .svg{
                    transform: scale(1.5);
                }
            }
            .svg{
                width: 60%;
                height: 60%;
            }
        }
    }
}



</style>