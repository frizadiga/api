const { $http, apiURL } = require('../../app/config/globals.js')
const Classes = require('../models/Classes.js')

module.exports = {

  list: async (ctx) => {
    const url = `${apiURL}/circles/${ctx.url.indexOf('?')!==-1?'?'+ctx.url.split('?').pop():'/'+ctx.url.split('/').shift()}`
    const { data } = await $http(url)
    ctx.body = data
  },

  findOne: async (ctx) => {
    const data = await Classes.findOne(ctx.params.id, ctx.query)
    ctx.body = {
      status: data.length ? 200:404,
      results: data
    }
  },

}