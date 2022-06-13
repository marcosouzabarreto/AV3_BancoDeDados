const TeachersRepository = require('../repositories/TeachersRepository');

class TeacherController {
  async index(request, response) {
    const teachers = await TeachersRepository.findAll();
    response.json(teachers);
  }

  async show(request, response) {
    const { id } = request.params;
    const teacher = await TeachersRepository.findById(id);
    response.json(teacher);
  }

  async delete(request, response) {
    const { id } = request.params;
    await TeachersRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new TeacherController();
