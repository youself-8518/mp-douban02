// 搭建服务器的核心文件

let Koa = require('koa');
let KoaRouter = require('koa-router');

// 1, 生成应用及路由器实例
const app = new Koa();
const router = new KoaRouter();


// 2, 使用路由器及路由
app.use(router.routes())