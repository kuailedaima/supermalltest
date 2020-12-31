<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"> 
             <detail-swiper  :top-images="topImages"/>
             <detail-base-info :goods="goods"/>
             <detail-shop-info :shop="shop"/>
             <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
             <detail-param-info :param-info="paramInfo" ref="params"/>
             <detail-comment-info :comment-info="commentInfo" ref="comment"/>
             <goods-list :goods="recommends" ref="recommend"/>
        </scroll>
        <detail-bottom-bar @addCart="addToCart" :onbuy="onbuy"/>
        <back-top @click.native="backClick" v-show="isshowBackTop"/>
        <!-- <toast message="成功" :show=""/> -->
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo' 
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
// import Toast from 'components/common/toast/Toast'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail"
import {debounce} from "../../common/utils"
import {itemListenerMixin} from "../../common/mixin"
import {mapGetters,mapActions, mapMutations} from 'vuex'

export default {
    name:"Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        Scroll,
        DetailCommentInfo,
        DetailParamInfo,
        GoodsList,
        DetailBottomBar,
        BackTop
        
    },

    computed:{
        ...mapGetters(['buygoods'])
    },

    mixins:[itemListenerMixin],
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo: {},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopY:null,
            isshowBackTop:false,
            // buygoods:[]
        }
    },
    created() {
        //1. 保存传入的iid
        this.iid = this.$route.params.iid

        //2.根据iid请求详情数据
        getDetail(this.iid).then(res =>{
            // console.log(res);
            //1.获取图片轮播数据
            const data= res.result;
            this.topImages = data.itemInfo.topImages;

            //2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            //3.创建店铺信息
            this.shop = new Shop(data.shopInfo)

            //4.保存商品的详情数据
            this.detailInfo = data.detailInfo;

            //5.获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            //6.取出评论的信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }
        }) 

        //3.请求推荐数据
        getRecommend().then(res => {
            this.recommends = res.data.list
            // console.log(res.data.list);
            
        })

        //4.给getThemeTopY赋值(对赋值做防抖操作)
        this.getThemeTopY = debounce(() =>{
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            // console.log(this.themeTopYs);
        },100)
    },

    mounted(){
        
    },


    destroyed() {
        this.$bus.$off('itemImgLoad',this.itemImgListener)
    },

    methods: {
        ...mapActions(['addCart']),
        ...mapMutations(['alterbuygoods']),
        imageLoad(){
            // this.$refs.scroll.refresh()
            this.getThemeTopY()
            this.newRefresh()
        },

        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
            
        },

        contentScroll(position){
            //1.获取y值
            const positionY = -position.y

            //2.positionY值与主题值对比
            const length = this.themeTopYs.length
            for (let i = 0; i <length ; i++) {
                if(this.currentIndex !== i && ((i<length-1 &&positionY >= this.themeTopYs[i]
                && positionY < this.themeTopYs[i+1]) || (i === length-1 && positionY >= this.themeTopYs[i])))
                {
                    this.currentIndex = i;
                    // console.log(this.currentIndex);
                    this.$refs.nav.currentIndex= this.currentIndex
                }
            }

            //3. 是否显示回到底部
            this.isshowBackTop = (-position.y) > 1000

        },

         backClick(){
      //  this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0,0,500)
     },

     addToCart() {
         //1.获取购物车要点击的信息
         const product = {}
         product.image = this.topImages[0];
         product.title = this.goods.title;
         product.desc = this.goods.desc;
         product.price = this.goods.realPrice;
         product.iid = this.iid;

         //2.添加商品到购物车
        //  this.$store.commit('addCart',product)
        // this.$store.dispatch('addCart',product).then(res =>{
        //     console.log(res);
            
        // })
        //console.log(product);
        this.addCart(product).then(res => {
            this.$toast.show(res,2000)
            // console.log(this.$toast);
            
        })

        //3.添加购物车成功

         
     },
     //点击购买按钮
     onbuy(){
         //1.获取商品信息
         const product = {}
         const products = []
         product.image = this.topImages[0];
         product.title = this.goods.title;
         product.desc = this.goods.desc;
         product.price = this.goods.realPrice;
         product.iid = this.iid;
         product.count = 1

         products.push(product)
        //  this.buygoods = products
         this.alterbuygoods(products)

        //  this.buygoods[0] = product
         console.log(products);
         //跳转到确认订单界面
         this.$router.push({
            path: '/order',
            query: {
                selectcartlist: products
            }
        })
     }

    }

}
</script>
<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
        overflow: hidden;
    }

    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .content {
        height: calc(100% - 44px - 49px);
    }

</style>