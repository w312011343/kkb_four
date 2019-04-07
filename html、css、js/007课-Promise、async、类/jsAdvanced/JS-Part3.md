# 框架封装
    - 参考jquery
    - 作为JS高级的案例
    - $("div").css("color","red")
    - $("div").click(function(){ ... })
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

    $("div")
```