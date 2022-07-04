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
    await db.query(
      `
      SELECT *
      FROM courses
      WHERE id = $1
    `,
      [id]
    );
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
}

module.exports = new CoursesRepository();
