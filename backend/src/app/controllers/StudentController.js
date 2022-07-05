const StudentsRepository = require('../repositories/StudentsRepository');

class StudentController {
  async index(request, response) {
    const Students = await StudentsRepository.findAll();
    response.json(Students);
  }

  async store(request, response) {
    const { class_id } = request.body;

    const res = await StudentsRepository.create(class_id);
    response.json(res);
  }

  async delete(request, response) {
    const { id } = request.params;
    await StudentsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new StudentController();
