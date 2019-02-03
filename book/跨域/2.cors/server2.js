let express = require('express')
let app = express();
let whiteList = ['http://localhose:3000']
app.use(function(req,res,next) {
    res.end('我不爱你')
    let origin = req.headers.origin;
    if (whiteList.includes(origin)) {
        
        res.setHeader('Access-Control-Allow-Origin', origin)
        // 允许哪个头访问我
        res.setHeader('Access-Control-Allow-Headers', 'name')
        // 默认只支持get 和 post 其他的请求都是需要通过methods设置的
        // 通过设置的请求会发送两个请求，一个是methods的先验请求options，另一个是真正的请求
        res.setHeader('Access-Control-Allow-Methods', 'PUT')
        // 允许携带cookie,注意如果origin是 * 的话，那么这个方法就不能用了
        res.setHeader('Access-Control-Allow-Credentials', true)
        // 预检的存货时间
        res.setHeader('Access-Control-Max-Age', 6)
        //  允许前端获取哪个头部信息
        res.setHeader('Access-Control-Expose-Headers', 'name')
        // 一般情况下面，先验的请求不需要响应，所以做一下处理
        if(req.method == 'OPTIONS') {
            res.end(); // options请求不需要做任何处理
        }
        next();
    }
})
app.get('/getData', function(req,res) {
    res.end('-----')
})
app.use(express.static(__dirname));

app.listen(5000)