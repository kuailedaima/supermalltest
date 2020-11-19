export default {
    addCart(context,payload){
        //payload新添加商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

        //2.判断oldProduct
        if (oldProduct) {
            // oldProduct.count +=1
            context.commit('addCounter',oldProduct)
        } else{
            payload.count = 1
            context.commit('addTocart',payload)
        }
        
    }
}