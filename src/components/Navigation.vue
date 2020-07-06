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
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
export default {
    name:'navigation',
    data(){
        return{
           
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
}



</style>