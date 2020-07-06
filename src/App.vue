<template>
  <div id="app">
      <section>
        <Navigation />
        <router-view/>
        <FooterBar />
      </section>
       <el-backtop>
      </el-backtop>   
  </div>
</template>


<script>
import Vue from 'vue'
import Navigation from '@/components/Navigation'
import FooterBar from "@/components/Footer"
import {getSideTool} from '@/api/sideTool'
import '@/style/style.css'
import '@/style/iconfont/iconfont.js'
import axios from 'axios'

export default {
    data(){
        return{
        }
    },
    components:{Navigation,FooterBar},
    methods:{
      getSetting(){
        getSideTool().then(res=>{
          this.$store.commit('setSideTool',res.data);
          this.getWeather(res.ip);
        })
      },
      getWeather(ip){
        axios.get('https://free-api.heweather.net/s6/weather/now',{
          params:{
            location:ip,
            key:"36aff7f0dc9744f2a08c81eaa5541ce6"
          }
        }).then(res=>{
          this.$store.commit('setWeather',res.data.HeWeather6[0].now);
        })
      }
    },
    mounted:function(){
      this.getSetting();  
    }
}
</script>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  section{
    flex:1
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#bgm{
  margin-top: 100px;
}
</style>
