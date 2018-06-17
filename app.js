const Koa = require('koa')
const app = new Koa()
const router = require('./app/routes')
const body = require('koa-body')
const PORT = 3000


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(body())

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))