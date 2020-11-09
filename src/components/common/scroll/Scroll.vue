<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props:{
        probeType: {
            type:Number,
            default:0
        },
        pullUpLoad: {
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        //1. 插件BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            // taps:true
            mouseWheel:true
        })

        //2. 监听滚动的位置
        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })

        //3. 监听下拉事件
        this.scroll.on('pullingUp', () =>{
             this.$emit('pullingUp')
        })
    },
    methods: {
        scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }

}
</script>

<style>

</style>