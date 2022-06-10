const db = require('../../database');

class TeachersRepository {
  async create({ userId }) {
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
}

module.exports = new TeachersRepository();
