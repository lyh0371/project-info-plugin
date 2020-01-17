# project-info-plugin 
一个用于项目打包后输出项目信息的webpack的插件

## 设计初衷

+ 在公司中,尤其是外包公司,可能一个人要并行开发很多项目,我们知道用脚手架打包生成的项目目标都是一样的,如果我们把项目交给后台部署,后台开发人员也不知道你发的代码是哪个项目的
+ 如果一个项目出现了问题(特别是时间过去比较长的项目),这时候想要追究责任就不太方便,如果我们打包项目时可以生成一些项目信息包括这个项目是谁负责,什么时候打的包...就显得十分必要

project-info-plugin  就是做这样一件事

## 参数
+ name  //项目负责人 可以自己填写,如果不填,默认找package.json里面的name
+ version // 项目版本 可以自己填写,如果不填,默认找package.json里面的version
+ description // 项目描述 可以自己填写,如果不填,默认找package.json里面的description

## 输出

打包后会输出一个 packInfo.md 文件;内容为 
```js
{
	"name":"xxx", //项目负责人
	"version":"xx", // 项目版本
	"time":"xxx", //打包时间
	"description":'xxx' //项目描述
	}
```
## 使用
+ npm/cnpm i project-info-plugin  -D 安装依赖

+ 配置
```js
<!-- 请在生产环境下配置 -->
const ProjectInfor = require('project-info-plugin');
plugins:[
	 new ProjectInfor()
]

```

## 说明
为了学习而造的轮子是好轮子
欢迎关注微信公众号 `码不停息`, 我们一同进步

![码不停息](http://www.h5love.cn/upload/img/gongzhonghao.jpg)

## 个人博客地址
[http://www.h5love.cn](http://www.h5love.cn)


