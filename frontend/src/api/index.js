import axios from 'axios';
const baseUrl = 'http://localhost:3001';
class Api {
  async login({ email, password }) {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return response;
  }
}

export default new Api();
