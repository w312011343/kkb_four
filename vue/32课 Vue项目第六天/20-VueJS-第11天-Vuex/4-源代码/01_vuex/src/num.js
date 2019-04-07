import Vue from 'vue';
export default {
     // 配置  module:{state,getter,mutation,action}
    state:{
        num:1
    },
    getters:{
        getNum(state){ // 获取器离state很近
            return state.num;
        },
        getText(state){
            return `[[${state.num}]]`
        },
        getName(state) {
            return state.name;
        }
    },
    // 更改也和state很近，第一个参数就是state
    mutations:{
        addNum(state) {
            state.num ++;
        },
        // 接收参数的(state,data)
        addByNum(state,num) {
            state.num += num;
        },
        // mutation对state的操作只能是同步的,异步的mutation
        // addByNumAsync(state,num) {
        //     // 只能是同步,否则丢失记录
        //     // setTimeout(function(){
        //     //    state.num += num; 
        //     // },0);
        // },
        
        addProps(state,name) {
            // Object.defineProperty 实现响应式（双向数据绑定）
            //state.name = name;
            if (!state.name) {
                Vue.set(state,'name',name);
                // 实例对象.$xxx
                // 构造函数.xxx
            } else {
                state.name = name;
            }
        }
    },
    actions:{
        // $store.getters||commit||state,data
         addByNumAction({commit},num) {
           setTimeout(function(){
                commit('addByNum',num);
           },0);
        },
        // 添加属性
        addProps({commit},name) {
            commit('addProps',name);
        }
    }
}