const db = require('../../database');

class CoursesRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * 
      FROM courses
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT *
      FROM courses
      WHERE id = $1
    `,
      [id]
    );
    return row;
  }

  async findByCoordinatorId({ coord_id }) {
    const rows = await db.query(
      `
    SELECT *
    FROM courses
    WHERE coordinator_id = $1
    `,
      [coord_id]
    );

    return rows;
  }

  async create(name, { coord_id }) {
    const [row] = await db.query(
      `
      INSERT INTO courses (name, coordinator_id)
      VALUES($1, $2)
      RETURNING *
    `,
      [name, coord_id]
    );
    return row;
  }

  async delete({ id }) {
    await db.query(
      `
        DELETE
        FROM courses
        WHERE id = $1
      `,
      [id]
    );
  }

  async showCourseSubjects(id) {
    const rows = await db.query(
      `
      SELECT subjects.*
      FROM subjects
      INNER JOIN course_subjects ON course_subjects.course_id = $1
    `,
      [id]
    );
    return rows;
  }
}

module.exports = new CoursesRepository();
