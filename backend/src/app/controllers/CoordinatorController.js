const CoordinatorsRepository = require('../repositories/CoordinatorsRepository');

class CoordinatorController {
  async index(request, response) {
    const coordinators = await CoordinatorsRepository.findAll();
    response.json(coordinators);
  }

  async show(request, response) {
    const { id } = request.params;
    const coordinator = await CoordinatorsRepository.findById(id);
    response.json(coordinator);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CoordinatorsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CoordinatorController();
