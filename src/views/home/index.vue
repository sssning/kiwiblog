<template>
    <div id='home'>
        <div class='section-banner'>
            <div class='banner'></div>
        </div>
        <div class='section-content'>
            <div class='container'>
                <router-view></router-view>
            </div>
             <div class='toolbar'>
                <div class='toolbar-user toolbar-item'>
                    <UserCard />
                </div>
                <div class='toolbar-weather toolbar-item' style="padding:0">
                    <Weather  v-loading='weaterLoding' />
                </div>
                <div class='toolbar-musicbox toolbar-item'>
                    <h4>音乐盒</h4>
                    <div class='toolbar-content'>
                         <APlayer v-loading='aPlayerloading'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import APlayer from "@/components/APlayer"
import Weather from '@/components/Weather'
import UserCard from '@/components/UserCard'

export default {
    name:'home',
    data(){
        return{
            weaterLoding:true,
            aPlayerloading:true,
            docsList:[],
            totalCount:0,
            sendData:{
                pageNum:1,
                pageSize:5
            }
        }
    },
    components:{APlayer,Weather,UserCard},
}
</script>

<style lang="scss"  scoped>
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
                margin-bottom: 15px;
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
        }      
    }
}

@media screen and (max-width: 1100px) {
    #home .section-content .container{
        width: 80%;
    }
    .toolbar {
       display: none;
    }
}

</style>