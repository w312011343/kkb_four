# 框架封装
- 参考jquery
- 作为JS高级的案例
- `$("div").css("color","red")`
- `$("div").click(function(){ ... })`

## 问题：怎样在微信中呼起其他的app呢？
+ 1、如果在移动端web页面中调起app？
    - 网页是直接在移动浏览器中访问的，
    - 网页是嵌入在app中的(web view)
        - 实现方式：由app开发者制定一个协议(http://www.baidu.com/getUserInfo)
        - 协议地址如：sdk://xxx.com/getUserInfo
        - 前端直接通过页面跳转就可以了
            - a标签
            - location.href
+ 2、微信中一个网页，呼起app？
    - 微信对于一般的用户并不支持跳转app
    - 微信只针对一些大客户（携程、唯品会、京东）才会提供这种跳转的接口
    - 如果小客户一定要做到这种功能，直接去一些第三方平台购买凭证

## 入口函数
```js
    (function(window){
        function Fn(selector){

        }
        Fn.prototype = {
            init(selector){
                var elements = document.querySelectorAll(selector);
                for( var i = 0 ; i < elements.length ; i++ ){
                    this[i] = elements[i];
                    this.length++;
                }
            },
            length : 0
        }

        function jQuery(selector){
            return new Fn(selector)
        }
        window.$ = window.jQuery = jQuery;
    })(window)
```

### 浏览器兼容性问题
+ 获取样式
    - 现代浏览器：`window.getComputedStyle(dom,null)`
    - IE10之前：`dom.currentStyle`
+ 设置文本内容
    - FF45之前：`dom.textContent`
    - 其他：`dom.innerText`
+ 绑定事件：
    - IE10之前：`dom.attachEvent`
        - 获取事件对象
        - 阻止事件冒泡
        - 阻止默认行为
    - 现代浏览器：`dom.addEventListener`
        - 获取事件对象
        - 阻止事件冒泡
        - 阻止默认行为

### DOM操作
+ $("<div>100</div>")
    - 字符串标签转换为一个DOM元素
        - document.createElement("div")
        - div.innerHTML="<div>100</div>"
        - -->div.childNodes[0]
        - 高性能的文档碎片：document.createDocumentFragment("div")
+ $("div").append("<span>300</span>")

### 属性操作