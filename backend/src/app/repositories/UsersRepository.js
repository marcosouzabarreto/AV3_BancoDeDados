const db = require('../../database');

class UsersRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM user ORDER BY name
    `);
    return rows;
  }
}

module.exports = new UsersRepository();
