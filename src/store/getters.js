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
    id(state) {
        return state.id
    }
}