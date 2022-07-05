const db = require('../../database');

class StudentsRepository {
  async findAll() {
    const rows = await db.query(`
    SELECT * 
    FROM students 
    `);
    return rows;
  }

  async create(class_id) {
    const [row] = await db.query(
      `
      INSERT INTO students (class_id)
      VALUES($1)
      RETURNING *
    `,
      [class_id]
    );

    return row;
  }

  async delete({ id }) {
    await db.query(
      `
        DELETE
        FROM students
        WHERE id = $1
      `,
      [id]
    );
  }
}

module.exports = new StudentsRepository();
