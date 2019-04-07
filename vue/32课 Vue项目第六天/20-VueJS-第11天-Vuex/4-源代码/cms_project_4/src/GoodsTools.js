let obj = {
    goodsObj:{'87':1,'88':5},
    addShopcart({id,num}){
        // 新加key或者追加value
        if(this.goodsObj[id]) {
            this.goodsObj[id] += num;
        } else {
            this.goodsObj[id] = num;
        }
    },
    deleteGoods(){

    }
}
window.test = obj;
export default obj;