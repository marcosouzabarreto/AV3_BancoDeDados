const db = require('../../database');

class AdminsRepository {
  async findAll() {
    const rows = await db.query(`
    SELECT users.*
    FROM users
    INNER JOIN admins ON admins.user_id = users.id
    ORDER BY users.name
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
    SELECT users.*
    FROM users
    INNER JOIN admins ON admins.user_id = users.id
    WHERE users.id = $1
    `,
      [id]
    );
    return row;
  }

  async create({ userId }) {
    const [row] = await db.query(
      `
      INSERT INTO admins (user_id)
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
      FROM admins
      WHERE user_id = $1
    `,
      [userId]
    );
    return deleteOp;
  }
}

module.exports = new AdminsRepository();
