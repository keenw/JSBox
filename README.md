## JavascriptBox
持续更新一些通用性的Javascript代码模块<br>

###js常用方法
client函数：检测client的system版本、browser版本、浏览器引擎<br>
添加String的trim方法和len(求字符串长度，双字节字符串长度记为2)<br>

###js正则表达式<br>
正则表达式字面量表示`/pattern/flag`和对象表示`new RegExp("pattern","flag")`<br>
flag标志三种方式:g表示全局，i表示不区分大小，m表示多行模式<br>
正则表示式三个方法：`exec()`,`test()`,`compile()`<br>
字符串支持模式匹配的方法：`match()`,`search()`,`replace()`,`split()`<br>

###js事件
EventUtil对象为处理不同浏览器的事件兼容提供一些函数<br>
form表单的提交事件和重置事件
```
var form = document.getElementById("myForm");
EventUtil.addHandler(form,"submit",function(event){
    event = EventUtil.getEvent(event);
    //此处对表单进行校验
    EventUtil.preventDefault(event);
});
//form表单进行提交
form.submit();
```

###js知识点小结
* `for in`循环的变量，必须先判断变量不为null和undefined，因为有些浏览器执行for in循环变量为null和undefined会报错<br>
`for in`循环对象时，返回的是所有能够通过对象访问的、可枚举的的属性，既包括存在于实例中的属性，也包括存在于原型中的属性。`hasOwnProperty`只能获取自定义属性，无法获取原型链属性。<br>

###js ajax和跨域 正在完善中
