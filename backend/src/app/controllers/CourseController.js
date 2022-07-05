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
}

module.exports = new CourseController();
