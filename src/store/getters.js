export default {
    cartLength(state) {
        return state.cartList.length
    },
    
    cartList(state) {
        return state.cartList
    },
    
    selectCartlist(state) {
        return state.selectCartlist
    }
}