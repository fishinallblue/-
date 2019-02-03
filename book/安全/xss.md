* 用户在登录的时候，服务器会生成一个sessionid，这个sessionID和用户信息绑定
* 将这sessionID 写入cookie中，然后返回给客户端 
* 这个cookie的信息就比较敏感了，只要拿到了这个cookie信息，大家都能登录了，所以谁都想做点操作

## XSS攻击
* 基本思路就是，在你的项目里面各种钻空子，想方设法的，插入script脚本，盗取cookie和信息
* 可以在服务器端设置cookie的时候，设置httpOnly，但是这样一来，别人拿不到cookie，自己也一样拿不到cookie

1. 反射型 XSS  heep://localhost/welcome?type=<script>alert('我是攻击代码')</script>
- 诱导用户自己点开（一次性的）
- 解决办法： 查询参数使用encodeURIComponent包裹参数

2. 不基于后端 DOM-base
- 修改属性，插入内容，document.write() => 改变结构后会造成攻击
- 现在是这样一个功能：输入一个图片网址，自动插入图片。那么，在图片网址的问题上，就有了一些可操作的空间
- 比如输入一些script标签，插入恶意的代码
- 解决的办法：同样是encodeURI

3. 存储型：持久型的XSS攻击
- 假设有一个论坛评论，输入评论内容的
- 一个黑客输入了<script>alert(1)</script> 这些相当于放到服务器里头一行黑代码，每次访问这个页面都会弹出一个框
- 这段代码是永久放在服务器中的，所有的用户都能访问到
- 比之前的反射型和DOM-base都更加不安全，范围更大
- 解决办法： ① 客户端传给服务器的时候，先过滤一下  ② 服务端再做一次过滤  ③直接在输出的时候过滤
`
function encodeHtml(str) {
    return str.replace(/&/g, '&amp;')
}
`

