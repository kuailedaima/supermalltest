export default {
    addCart(context,payload){
        return new Promise((resolve, reject) => {
            //payload新添加商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

        //2.判断oldProduct
        if (oldProduct) {
            // oldProduct.count +=1
            context.commit('addCounter',oldProduct)
            resolve('商品数量+1')
        } else{
            payload.count = 1
            context.commit('addTocart',payload)
            resolve('添加了新的商品')
        }
        })
        
    }
}