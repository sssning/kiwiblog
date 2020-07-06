<template>
    <div id='user-card'>
        <div class='head'>
            <img :src='sideTool.headPhoto' />
        </div>
        <div class='name'>
            <p>{{sideTool.name}}</p>
        </div>
        <div class='works'>
            <div class='works-item'>
                <p class='num'>121</p>
                <p class='text'>文章</p>
            </div>
            <div class='works-item'>
                <p class='num'>121</p>
                <p class='text'>评论</p>
            </div>
        </div>
        <div class='link'>
             <el-tooltip v-for='item in sideTool.linkUrl' :key='item.svg' class="link-item" effect="dark" :content="item.text" placement="top">
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
    name:'userCard',
    data(){
        return{
             sideTool:this.$store.state.sideTool
        }
    },
}
</script>

<style lang="scss" scoped>
#user-card{
    display: flex;
    flex-direction: column;
    text-align: center;
    .head{
        padding: 20px 0 10px 0;
        img{
            width: 98px;
            height: 98px;
            border-radius: 50%;
            border: 4px solid hsla(0,0%,100%,.4);
        }
    }
    .name{
        padding: 10px 0;
        p{
            font-size: 14px;
            color: #333;
        }
    }
    .works{
        display: flex;
        padding: 10px 0;
        .works-item{
            width: 50%;
            margin: 0 10px;
            cursor: pointer;
            p{
                letter-spacing: 0;
                font-weight: 700;
                font-size: 14px;
            }
            .num{
                margin-bottom: 10px;
                color: #00a1d6;
            }
        }
    }
    .link{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 0;
        .link-item{
            width: 42px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,.1);
            border-radius: 50%;
            margin:0 5px;
            &:hover{
                background: #00c0ff47;
            }
            svg{
                height: 24px;
                width: 24px;
            }
        }
    }
}
</style>