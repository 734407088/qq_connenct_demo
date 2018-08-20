

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const body_parser = require('koa-bodyparser')()
const views = require('koa-views')(__dirname + '/views',{ extension: 'pug' })
const static_server = require('koa-static-server')({rootDir: 'static', rootPath: '/static'})

// 加载路由
require('./routes/authorize')(router)

app.use(views)
    .use(static_server)
    .use(body_parser)
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
