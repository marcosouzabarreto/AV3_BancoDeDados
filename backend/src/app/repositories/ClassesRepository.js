const db = require('../../database');

class ClassesRepository {
  async findAll() {
    const rows = await db.query(`
    SELECT * 
    FROM classes 
    `);
    return rows;
  }

  async findByTeacherId(id) {
    const [row] = await db.query(
      `
      SELECT * 
      FROM classes 
      WHERE teacher_id = $1
    `,
      [id]
    );
    return row;
  }

  async create(teacher_id, subject_id) {
    const [row] = await db.query(
      `
      INSERT INTO classes (teacher_id, subject_id)
      VALUES($1, $2)
      RETURNING *
    `,
      [teacher_id, subject_id]
    );

    return row;
  }

  async delete({ id }) {
    await db.query(
      `
        DELETE
        FROM classes
        WHERE id = $1
      `,
      [id]
    );
  }
}

module.exports = new ClassesRepository();
