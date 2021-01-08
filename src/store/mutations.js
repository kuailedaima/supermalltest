export default{
    addCounter(state,payload) {
        payload.count ++
    },
    addTocart(state,payload){
        payload.checked = false
        state.cartList.push(payload)
    },
    alterbuygoods(state, goodstag) {
        state.buygoods =goodstag[0]
        state.buyjumptag = goodstag[1]
    },
    saveAddress(state,address) {
        state.addresslist.push(address)
    },
    alterAddress(state,index) {
        state.selectAddresslist[1] = state.addresslist[index]
    },
    
    idincrease(state) {
        state.id ++
    },
    delete(state,sid){
        for(let i = 0;i<state.addresslist.length;i++){
            if(state.addresslist[i].id == sid) {
                state.addresslist.splice(i,1)
                break;
            }
        }
    },
    altersDefault(state) {
        for(let i = 0;i<state.addresslist.length;i++) {
            state.addresslist[i].isDefault = false
        }
    },
    saveshippingaddress(state) {
        for(let i = 0;i<state.addresslist.length;i++){
            if(state.addresslist[i].isDefault == true){
                state.shippingaddress = state.addresslist[i];
                break;
            }
        }
    },
    altershippingaddress(state,item) {
        state.shippingaddress = item;
    },
    alterisback(state) {
        state.isback = !state.isback
    },
    deleteselect(state) {
        for(let i =0;i<=state.selectCartlist.length;i++) {
            for(let j=0; j<state.cartList.length; j++) {
                if(state.cartList[j] == state.selectCartlist[i]){
                    state.cartList.splice(j, 1);
                    break;
                }
            }
        }
        state.selectCartlist.length = 0
    }
}