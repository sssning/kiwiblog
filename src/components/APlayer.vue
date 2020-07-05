<template>
    <div id='aplayer'></div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import * as Api from '@/api/music.ts'

export default {
    name:'Aplayer',
    data(){
        return {
            musicResult:[]
        }
    },
    methods:{
        initMusic:function(){
            new Promise((resolve,reject)=>{
                Api.getMusic().then(res=>{
                    try{
                        resolve(res.data);
                    }catch(error){
                       reject(error)
                    }
                })
            }).then(res=>{
                var audioArr = res.map(item=>{
                    let picUrl = item.al.picUrl.replace('http','https');
                    let audioUrl = item.url.replace('http','https');
                    return {
                        name:item.name,
                        artist:item.ar[0].name || '',
                        url:audioUrl,
                        cover:picUrl,
                    }
                })
                const ap = new APlayer({
                    container: document.getElementById('aplayer'),
                    listMaxHeight: "220px",
                    lrcType: 0,
                    audio:audioArr
                });  
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    mounted:function(){
        this.initMusic();
    }
}
</script>

<style lang="scss" scoped>

</style>