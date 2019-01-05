const router = require('koa-router')()
const EntitiesExampleController = require('../../entities-example/controller')
const EntitiesExampleModel = require('../../entities-example/model')
// const knex = require('../app/config/db.js')

// EntitiesExample
router.get('/products', EntitiesExampleController.list)
router.get('/products/:id', EntitiesExampleController.findOne)

// Root
const RootController = (ctx) => {
  const { response: res } = ctx
  
  return res.body = { message: 'f-api v1' }
}

router.get('/', RootController)

//Try
router.get('/try', async (ctx) => {
  // ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  // ctx.body = ctx.url
  // ctx.body = ctx.params
  ctx.body = ctx.query
  // ctx.body = await EntitiesExample.find()
  // ctx.body = await knex.select().table('circles').limit(1)
  // ctx.body = await knex.raw('select * from circles limit 1').rows
})

module.exports = router