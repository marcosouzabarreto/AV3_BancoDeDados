const SubjectsRepository = require('../repositories/SubjectsRepository');

class CourseController {
  async index(request, response) {
    const courses = await SubjectsRepository.findAll();
    response.json(courses);
  }

  async show(request, response) {
    const { id } = request.params;
    const course = await SubjectsRepository.findById(id);
    response.json(course);
  }

  async store(request, response) {
    const { name, course_id } = request.body;
    const course = await SubjectsRepository.create(name, course_id);

    response.json(course);
  }

  async delete(request, response) {
    const { id } = request.params;
    const { role } = request.body;
    if (role !== 'admin') {
      return response.status(400).json({ error: 'usuario nao autorizado' });
    }
    await SubjectsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CourseController();
