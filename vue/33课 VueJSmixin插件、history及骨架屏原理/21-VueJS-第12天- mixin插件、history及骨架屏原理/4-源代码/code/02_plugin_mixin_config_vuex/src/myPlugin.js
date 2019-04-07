let myOptions;
function MyPlugin(options) {
    myOptions = options;
    return MyPlugin;
}

// 该对象具备install函数
MyPlugin.install = function(Vue){
      
      // mixin 
      Vue.mixin({
        created() {
           console.log('mixin');
           myOptions.forEach( opt => {
               // 判断当前的组件名
                if( this.$options.name === opt) {
                     // 根据vuex去调用，改变数据（谁改）？
                    this.$store.dispatch('addByAct');
                }
           })
           
        }
      })
}



export default MyPlugin;