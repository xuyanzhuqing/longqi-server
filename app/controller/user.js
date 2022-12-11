'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;

    ctx.status = 201;
    ctx.body = await service.user.select();
  }

  async create() {
    const { ctx, service } = this;

    // params validate, need `egg-validate` plugin
    // ctx.validate({ title: { type: 'string' } });

    ctx.status = 201;
    ctx.body = await service.user.create(ctx.request.body);
  }

  // `PUT /api/user`
  // async update() {}

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.request.url.split('/').pop();
    ctx.status = 201;
    ctx.body = await service.user.delete(id);
  }
}

module.exports = UserController;
