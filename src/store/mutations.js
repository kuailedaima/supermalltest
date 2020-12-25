export default{
    addCounter(state,payload) {
        payload.count ++
    },
    addTocart(state,payload){
        payload.checked = false
        state.cartList.push(payload)
    },
    saveAddress(state,address) {
        state.addresslist.push(address)
    },
    alterAddress(state,index) {
        // state.selectAddresslist[1].id = state.addresslist[index].id;
        // state.selectAddresslist[1].name = state.addresslist[index].name;
        // state.selectAddresslist[1].tel = state.addresslist[index].tel;
        // state.selectAddresslist[1].province = state.addresslist[index].province;
        // state.selectAddresslist[1].city = state.addresslist[index].city;
        // state.selectAddresslist[1].county = state.addresslist[index].county;
        // state.selectAddresslist[1].addressDetail = state.addresslist[index].addressDetail;
        // state.selectAddresslist[1].areaCode = state.addresslist[index].areaCode;
        // state.selectAddresslist[1].postalCode = state.addresslist[index].postalCode;
        // state.selectAddresslist[1].isDefault = state.addresslist[index].isDefaul
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
    }
}