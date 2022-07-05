const CoursesRepository = require('../repositories/CoursesRepository');

class CourseController {
  async index(request, response) {
    const courses = await CoursesRepository.findAll();
    response.json(courses);
  }

  async show(request, response) {
    const { id } = request.params;
    const course = await CoursesRepository.findById(id);
    response.json(course);
  }

  async store(request, response) {
    const { coord_id, name } = request.body;
    const course = await CoursesRepository.create(name, { coord_id });
    response.json(course);
  }

  async delete(request, response) {
    const { id } = request.params;
    const { role } = request.body;
    if (role !== 'admin') {
      return response.status(400).json({ error: 'usuario nao autorizado' });
    }
    await CoursesRepository.delete(id);
    response.sendStatus(204);
  }

  async showByCoordinatorId(request, response) {
    const { id } = request.params;
    const courses = await CoursesRepository.findByCoordinatorId({
      coord_id: id,
    });
    response.json(courses);
  }

  async showCourseSubjects(request, response) {
    const { id } = request.params;
    const subjects = await CoursesRepository.showCourseSubjects(id);
    response.json(subjects);
  }
}

module.exports = new CourseController();
