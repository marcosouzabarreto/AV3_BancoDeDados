const UsersRepository = require('../repositories/UsersRepository');
const AdminsRepository = require('../repositories/AdminsRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  // async show(request, response) {
  //   // Get ONE register
  // }

  async store(request, response) {
    const { name, email, password, role } = request.body;
    !name
      ? response.sendStatus(400).json({ error: 'Name not provided' })
      : !email
      ? response.sendStatus(400).json({ error: 'Email not provided' })
      : !password
      ? response.sendStatus(400).json({ error: 'Password not provided' })
      : !role
      ? response.sendStatus(400).json({ error: 'Role not provided' })
      : null;

    // TODO: Verify if email has already been taken
    const user = await UsersRepository.create({ name, email, password });
    await AdminsRepository.create(user.id);
    response.json(user);
  }

  // async update(request, response) {

  // }

  async delete(request, response) {
    const { id } = request.params;
    await UsersRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new UserController();
