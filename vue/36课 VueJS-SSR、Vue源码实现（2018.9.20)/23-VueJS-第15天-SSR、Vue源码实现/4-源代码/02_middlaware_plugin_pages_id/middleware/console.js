export default function(content) {
            // content是nuxt中最大最大的对象
            // 可以获取所有东西，请求参数，store 、
            console.log(content);
            console.log('中间件被加载了');
            // 但凡是请求过程中需要的公共事务，就可以放到全局路由改变的中间件来完成

}