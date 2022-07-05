const ClassesRepository = require('../repositories/ClassesRepository');

class ClassController {
  async index(request, response) {
    const Classes = await ClassesRepository.findAll();
    response.json(Classes);
  }

  async show(request, response) {
    const { id } = request.params;
    const Class = await ClassesRepository.findByTeacherId(id);
    response.json(Class);
  }

  async store(request, response) {
    const { teacher_id, subject_id } = request.body;

    const res = await ClassesRepository.create(teacher_id, subject_id);
    response.json(res);
  }

  async delete(request, response) {
    const { id } = request.params;
    const { role } = request.body;
    if (role !== 'admin') {
      return response.status(400).json({ error: 'usuario nao autorizado' });
    }
    await ClassesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ClassController();
