const router = require('koa-router')()
const UsersController = require('../controllers/Users.js')
const ClassesController = require('../controllers/Classes.js')
const Classes = require('../models/Classes.js')
const knex = require('../../app/config/db.js')

// Users
router.get('/users', UsersController.index)

// Classes
router.get('/classes', ClassesController.list)
router.get('/classes/:id', ClassesController.findOne)

// Root
router.get('/', (ctx) => {
  ctx.body = {message: 'api v1'}
})

//Try
router.get('/try', async (ctx) => {
  // ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  // ctx.body = ctx.url
  // ctx.body = ctx.params
  ctx.body = ctx.query
  // ctx.body = await Classes.find()
  // ctx.body = await knex.select().table('circles').limit(1)
  // ctx.body = await knex.raw('select * from circles limit 1').rows
})

module.exports = router