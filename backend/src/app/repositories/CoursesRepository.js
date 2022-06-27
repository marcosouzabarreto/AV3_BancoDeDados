const db = require('../../database');

class CoursesRepository {
  async findAll() {
    await db.query(`
      SELECT * 
      FROM courses
    `);
  }

  async findById(id) {
    await db.query(
      `
      SELECT *
      FROM courses
      WHERE id = $1
    `,
      [id]
    );
  }

  async create({ coord_id }) {
    await db.query(
      `
      INSERT 
      INTO courses(coordinator_id)
      VALUES($1)
      RETURNING *
    `,
      [coord_id]
    );
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
}

module.exports = new CoursesRepository();
