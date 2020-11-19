import {debounce} from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin ={
    data(){
        return {
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
        this.newRefresh = debounce(this.$refs.scroll.refresh,50)
        this.itemImgListener = () => {
             this.newRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
        
    }
}

export const backTopMixin = {
    components:{
        BackTop
    },
    data() {
        return {
            isshowBackTop:false,
        }
    },
    methods: {
        backClick(){
            //  this.$refs.scroll.scroll.scrollTo(0,0,500)
            this.$refs.scroll.scrollTo(0,0,500)
           },
      
    }
}