const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();
    response.json(users);
  }
}

module.exports = new UserController();
