export default {
    cartLength(state) {
        return state.cartList.length
    },
    
    cartList(state) {
        return state.cartList
    },
    
    selectCartlist(state) {
        return state.selectCartlist
    },

    addresslist(state) {
        return state.addresslist
    },
    selectAddresslist(state) {
        return state.selectAddresslist
    },
    buygoods(state) {
        return state.buygoods
    },
    id(state) {
        return state.id
    },
    shippingaddress(state) {
        return state.shippingaddress
    },
    isback(state) {
        return state.isback
    },
    orderhistory(state) {
        return state.orderhistory
    },
    buyjumptag(state) {
        return state.buyjumptag
    },
    //组件是否显示
    isdisplay(state) {
        return state.isdisplay
    }
}