# 模块化
## 如果不用模块化编写代码，那么会具有以下问题：
+ 代码杂乱无章，没有条理性，不便于维护，不便于复用
+ 全局变量污染
+ 不方便保护私有数据

## 模块化的基本实现：闭包的自调用函数
```js
    var DatePicker = (function(){
        return {
            init(){

            }
        }
    }){}
```

## AMD模块化
+ AMD：async module define：异步模块定义
+ AMD其实就是requireJS实现的模块化解决方案

## 其他模块化解决方案：
+ CommonJS：Node中使用的模块化解决方案
+ CMD（common module define）：seajs中提出来的模块化解决方案
    - 其实CMD可以认为是CommonJS的前端实现
    - seajs由阿里的（玉帛）编写
    - seajs在2，3年前比较火，从去年开始已经停止更新

## AMD和CMD的不同之处：
+ amd需要依赖前置，cmd需要依赖就近
+ 导入导出方式不同：
    - amd通过define定义，return导出；
    - cmd通过不需要定义，只需要最后通过module.exports、exports导出

## requireJS —— AMD规范
### 中文网：`http://www.requirejs.cn/docs/api.html#jsfiles`
### 基本用法
```js
    //1、通过script标签导入requirejs源文件
    //2、编写模块文件，基本格式如下：
    //cart.js
    define([],function(){
        console.log('cart模块');
    })
    //product.js
    define([],function(){
        console.log('product模块');
    })
    //3、首页调用模块：
    require(["cart.js","product.js"],function(){
        //编写后面的逻辑代码
    })
    //等价于：
    require(["cart","product"],function(){
        
    })
```
### 入口文件

### 配置
```js
    require.config({
        //baseUrl
        //paths
        
    })
```

### 定义模块的返回值（返回值相当于模块的入口）
```js
    //cart.js：
    define([],function(){

        return {
            init(){

            },
            addProduct(){

            }
        }
    })

    //首页：
    require(["cart"],function(cart){
        cart.init();
        cart.addProduct();
    })
```
+ 注意：一般在导入模块的时候，需要将有返回值的模块在前面导入，无返回值的模块在后面导入


### 案例——模块依赖子模块
```js
    //productAdd.js
    define([],function(){
        return {
            init(){
                console.log("添加商品");
            }
        }
    })

    //productEdit.js
    define([],function(){
        return {
            init(){
                console.log("编辑商品");
            }
        }
    })

    //product.js
    define(["productAdd","productEdit"],function(productAdd,productEdit){
        return {
            init(){
                console.log("商品列表");
            },
            add(){
                productAdd.init();
            },
            edit(){
                productEdit.init();
            }
        }
    })

    //首页：
    require(["product"],function(product){
        product.init();

        product.add();

        product.edit();

    })
    
```

### 常用的模块、文件夹路径的配置
+ 一般用于配置第三方模块，比如jquery、bootstrap、zepto等等
```js
    require.config(
        paths:{
            jquery:"js/lib/jquery-1.11.min",
            zepto:"js/lib/zepto.min",
            bootstrap:"assets/bootstrap/js/bootstrap.min"
        }
    )

    define(["jquery","zepto"],function($,$$){

    })

    require(["jquery","bootstrap"],function($){

    })
```

### 插件
+ 插件列表：`https://github.com/requirejs/requirejs/wiki/Plugins`
+ i18n 国际化
+ text 加载文件（.html文件。。。）
    - 插件github地址：https://github.com/requirejs/text

## ES6模块化
### 浏览器调试
```html
    <script type="module">
        //导入模块
    </script>
```

### 基本用法
```js
    //cart.js
    export default {
        name:"张三",
        age:18
    }

    //index.js
    import cart from "cart.js"
    cart.name
    cart.age
```

### 导出模块
```js
    //cart.js
    export const age = 18;
    export function f1(){
        console.log("f1函数");
    }
    export default {
        init(){
            console.log("初始化");
        }
    }

    //index.js
    import cart,{ age,f1 } from "cart.js"
    cart.init();
    age,
    f1();
```

### 导入模块
```js
    //index.js
    import cart as cartIndex from "cart.js"
    import { age as AGE } from "product.js"

    //使用变量：cartIndex
    //使用变量：AGE
```