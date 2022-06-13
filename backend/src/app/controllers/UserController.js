const UsersRepository = require('../repositories/UsersRepository');
const AdminsRepository = require('../repositories/AdminsRepository');
const CoordinatorsRepository = require('../repositories/CoordinatorsRepository');
const TeachersRepository = require('../repositories/TeachersRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await UsersRepository.findById(id);
    if (!user) return response.status(404).json({ error: 'user not found' });
    response.json(user);
  }

  async store(request, response) {
    const { name, email, password, role } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name not provided' });
    } else if (!email) {
      return response.status(400).json({ error: 'Email not provided' });
    } else if (!password) {
      return response.status(400).json({ error: 'Password not provided' });
    } else if (!role) {
      return response.status(400).json({ error: 'Role not provided' });
    }

    const emailHasAlreadyBeenTaken = await UsersRepository.findByEmail(email);

    if (emailHasAlreadyBeenTaken) {
      return response
        .status(400)
        .json({ error: 'Email has already been taken' });
    }

    const user = await UsersRepository.create({ name, email, password });
    console.log(user);
    if (role === 'admin') {
      await AdminsRepository.create(user.id);
    } else if (role === 'coordinator') {
      await CoordinatorsRepository.create(user.id);
    } else if (role === 'teacher') {
      await TeachersRepository.create(user.id);
    } else {
      return response
        .status(400)
        .json({ error: `${role} is not a valid role` });
    }
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
