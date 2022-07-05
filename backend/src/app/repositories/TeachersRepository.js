const db = require('../../database');

class TeachersRepository {
  async findAll() {
    const rows = await db.query(`
    SELECT users.*, teachers.id as teacher_id
    FROM users
    INNER JOIN teachers ON teachers.user_id = users.id
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT users.*
      FROM users
      INNER JOIN teachers ON teachers.user_id = users.id
      WHERE users.id = $1
    `,
      [id]
    );
    return row;
  }

  async create(userId) {
    const [row] = await db.query(
      `
      INSERT INTO teachers (user_id)
      VALUES ($1)
      RETURNING *
    `,
      [userId]
    );
    return row;
  }

  async delete(userId) {
    const deleteOp = await db.query(
      `
      DELETE 
      FROM teachers
      WHERE user_id = $1
    `,
      [userId]
    );
    return deleteOp;
  }

  async showTeacherSubjects(teacher_id) {
    const rows = await db.query(
      `
    SELECT subjects.*  
    FROM subjects 
    INNER JOIN classes ON classes.subject_id = subjects.id
    INNER JOIN teachers ON classes.teacher_id = teachers.id
    WHERE teachers.id = $1
    `,
      [teacher_id]
    );

    return rows;
  }
}

module.exports = new TeachersRepository();
