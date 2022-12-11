'use strict';

const { Controller } = require('egg');

class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('about.html');
  }
}

module.exports = AboutController;
