const db = require('../../database');

class Authenticator {
  async login(request, response) {
    const { email, password } = request.body;
    const [adminUser] = await db.query(
      `
      SELECT users.*
      FROM users
      INNER JOIN admins ON admins.user_id = users.id
      WHERE users.email = $1 
      AND users.password = $2
    `,
      [email, password]
    );
    if (adminUser) {
      return response.json({ token: adminUser.id, role: 'admin' });
    }
    const [teacherUser] = await db.query(
      `
      SELECT users.*
      FROM users
      INNER JOIN teachers ON teachers.user_id = users.id
      WHERE users.email = $1 
      AND users.password = $2
    `,
      [email, password]
    );
    if (teacherUser) {
      return response.json({ token: teacherUser.id, role: 'teacher' });
    }
    const [coordinatorUser] = await db.query(
      `
      SELECT users.*
      FROM users
      INNER JOIN coordinators ON coordinators.user_id = users.id
      WHERE users.email = $1 
      AND users.password = $2
    `,
      [email, password]
    );
    if (coordinatorUser) {
      return response.json({ token: coordinatorUser.id, role: 'coordinator' });
    }
    return response.json({ error: 'user not found' });
  }
}

module.exports = new Authenticator();
