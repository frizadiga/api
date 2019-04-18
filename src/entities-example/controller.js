const { API_URL } = require('../app/config');
const EntitiesExampleModel = require('./model');
const Fetch = require('../app/lib/Fetch');

module.exports = {

  list: async (ctx) => {
    const url = `${API_URL}/circles/${ctx.url.indexOf('?') !== -1 ? `?${ctx.url.split('?').pop()}` : `/${ctx.url.split('/').shift()}`}`;
    const { data } = await Fetch(url);
    ctx.body = data;
  },

  findOne: async (ctx) => {
    const data = await EntitiesExampleModel.findOne(ctx.params.id, ctx.query);
    ctx.body = {
      status: data.length ? 200 : 404,
      results: data,
    };
  },

};
