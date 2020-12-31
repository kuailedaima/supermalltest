export default{
    addCounter(state,payload) {
        payload.count ++
    },
    addTocart(state,payload){
        payload.checked = false
        state.cartList.push(payload)
    },
    alterbuygoods(state, goods) {
        state.buygoods =goods
    },
    saveAddress(state,address) {
        state.addresslist.push(address)
    },
    alterAddress(state,index) {
        state.selectAddresslist[1] = state.addresslist[index]
    },
    // updateAddress(state,data,index) {
    //     state.addresslist[index].id = data.id;
    //     state.addresslist[index].name = data.name;
    //     state.addresslist[index].tel = data.tel;
    //     state.addresslist[index].province = data.province;
    //     state.addresslist[index].city = data.city;
    //     state.addresslist[index].county = data.county;
    //     state.addresslist[index].addressDetail = data.addressDetail;
    //     state.addresslist[index].areaCode = data.areaCode;
    //     state.addresslist[index].postalCode = data.postalCode;
    //     state.addresslist[index].isDefault = data.isDefault;
    // }
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
    }
}