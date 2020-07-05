<template>
    <div id="weather-view-he"></div>
</template>

<script>
export default {
    name:'weather',
    created(){
        window.WIDGET = { ID: 'jn3ScOnPeb' };
        (function (d) {
            var cs = d.createElement("link");
            cs.rel = "stylesheet";
            cs.href = "https://apip.weatherdt.com/view/static/css/tqw_widget_view.css?v=0101";
            var s = d.createElement("script");
            s.src = "https://apip.weatherdt.com/view/static/js/tqw_widget_view.js?v=0101";
            var sn = d.getElementsByTagName("script")[0];
            sn.parentNode.insertBefore(cs, sn);
            sn.parentNode.insertBefore(s, sn);
        })(document)
    },
    mounted:function(){
        this.$nextTick(function(){
            
        })
    }
}
</script>

<style lang="scss">
#weather-view-he{
    width: 100% !important;
}
</style>