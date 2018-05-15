# qiushibaike

> 糗事百科PC版

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 糗事百科接口提取

### 糗事列表

```http
https://m2.qiushibaike.com/article/newlist?new=1
```

### 糗事详细信息

```http
https://m2.qiushibaike.com/article/120283052
```

### 获取评论

#### 获取热评

```http
https://m2.qiushibaike.com/article/120283052/hot/comments?page=1&count=10
```

#### 最新评论

```http
https://m2.qiushibaike.com/article/120283052/latest/comments?page=1&count=50
```

### 用户登陆[post]

```http
https://m2.qiushibaike.com/user/signin
{"pass":"123456","login":"18627114906"}
```

### 发表评论[post]

```http
https://m2.qiushibaike.com/article/120274694/comment/create

```

### 精华贴子

```http
https://m2.qiushibaike.com/article/history?page=1&count=30&readarticles=[120265678,100978230,120267421,120269835,120274861]
```



