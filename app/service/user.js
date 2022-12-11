const { Service } = require('egg');

class UserService extends Service {
  async select() {
    const user = await this.app.mysql.select('user');
    return user;
  }

  async find(userId) {
    const user = await this.app.mysql.get('user', { id: userId });
    return user;
  }

  async create(user) {
    // validate
    // if (!todo.title) this.ctx.throw(422, 'task title required');

    // normalize
    // todo.id = Date.now().toString();
    // todo.completed = false;

    // this.store.push(todo);
    const result = await this.app.mysql.insert('user', user);
    return result;
  }

  async delete(userId) {
    const result = await this.app.mysql.delete('user', { id: userId });
    return result;
  }
}

module.exports = UserService;
