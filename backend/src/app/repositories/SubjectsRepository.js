const db = require('../../database');

class SubjectsRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT subjects.*, course_subjects.course_id as course_id 
      FROM subjects 
      INNER JOIN course_subjects ON course_subjects.subject_id = subjects.id
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT subjects.*, course_subjects.course_id as course_id 
      FROM subjects 
      INNER JOIN course_subjects ON course_subjects.subject_id = subjects.id
      WHERE subjects.id = $1
    `,
      [id]
    );
    return row;
  }

  async create(name, course_id) {
    const [row] = await db.query(
      `
      INSERT INTO subjects (name)
      VALUES($1)
      RETURNING *
    `,
      [name]
    );
    await db.query(
      `
    INSERT INTO course_subjects (course_id, subject_id)
    VALUES($1, $2)
    `,
      [course_id, row.id]
    );
    return row;
  }

  async delete({ id }) {
    await db.query(
      `
        DELETE
        FROM subjects
        WHERE id = $1
      `,
      [id]
    );
  }
}

module.exports = new SubjectsRepository();
