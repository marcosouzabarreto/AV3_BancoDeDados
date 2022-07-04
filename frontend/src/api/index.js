import axios from 'axios';
const baseUrl = 'http://localhost:3001';
class Api {
  async login({ email, password }) {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return response.data;
  }

  async createAccount({ name, email, password, role }) {
    const response = await axios.post(`${baseUrl}/cadastro`, {
      name,
      email,
      password,
      role,
    });
    return response;
  }
}

export default new Api();
