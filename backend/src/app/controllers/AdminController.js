const AdminsRepository = require('../repositories/AdminsRepository');

class AdminController {
  async index(request, response) {
    const admins = await AdminsRepository.findAll();
    response.json(admins);
  }

  async show(request, response) {
    const { id } = request.params;
    const admin = await AdminsRepository.findById(id);
    response.json(admin);
  }

  async delete(request, response) {
    const { id } = request.params;
    await AdminsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new AdminController();
