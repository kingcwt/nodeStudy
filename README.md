

 1 将匹配的结果放到req.params上
```
app.get('/user/:id/:name')
```

## req上的属性

```
req.params 路径参数
req.url 整个路径
req.path pathname 路径
req.header 请求头
req.method 请求的方法
req.query 获取请求的参数  问号后面的参数
```

## middleware

-中间件的作用：
 -处理公共逻辑 扩展req res
 -可以决定是否继续执行
 -开头匹配到执行
 -错误中间件 在页面的最后 参数4个 第一个参数是错误 err,req,res,next


## res新增的方法

-res.json(); 返回json
-res.sendFile() 绝对路径
-res.sendStatus(); 状态码
-res.send()  ;智能返回

## 用户管理模块
 -登陆
 -注册
## 文章管理模块
-发表文章 /post
-删除文章 /delete


## 路由封装
 -

 ejs  <同级下views文件下>
 -取值：
 <%=username%>
 <%=password%>


 -循环：
 <% arr.forEach((item)=>{ %>
 <li><%= item+1 %></li>
 <% }) %>


-渲染HTML：
<%-html%>


-引入文件：<header.ejs>
<%include header.ejs%>

-- res.render('log.html',{...req.body,arr:[1,2,3,4,5],html:'<h2>run free</h2>'});
/*ejs 模板引擎 html后缀渲染成ejs*/
app.engine('html',require('ejs').__express);
app.set('views','status');
/*更改ejs默认文件夹目录名字*/


 ## 静态服务中间件
 app.use(express.static('public'));

 ## redirect()  //重定向

 res.redirect('https://www.baidu.com');



 ##RESTful API设计
```
  - Cookie :
  设置cookie：
  let
      ts = new Date(Date.now() + 20 * 1000).toGMTString();
  res.setHeader('set-Cookie','name=cwt;Expires='+ts);

  读取cookie:
  res.headers['cookie']

  Expires:过期时间
  maxAge:最大过期时间
  path='/buy1' 才发送cookie
  domain 域名 默认当前域名 {domain:'a.baidu.com}
  httpOnly  不能通过浏览器Javascript访问 {httpOnly:true}
  secure  只能通过https访问

  require 缓存问题 ：
  delete require.cache[require.resolve('./user.json')];


  -session
  
  ```

