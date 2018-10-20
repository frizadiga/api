const Koa = require('koa')
const app = new Koa()
const router = require('./routes')
const body = require('koa-body')
const cors = require('@koa/cors')
const { PORT } = require('./config')

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(body())

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))