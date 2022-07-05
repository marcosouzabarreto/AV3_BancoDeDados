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
    return response.data;
  }

  async createCourse(name, { coord_id }) {
    const response = await axios.post(`${baseUrl}/courses`, {
      coord_id,
      name,
    });
    return response.data;
  }

  async getCoordinatorId(id) {
    const response = await axios.get(`${baseUrl}/coordinators/${id}`);
    return response.data.coordinator_id;
  }

  async getCoordinatorCourses(id) {
    const response = await axios.get(`${baseUrl}/courses/coordinator/${id}`);
    return response.data;
  }
}

export default new Api();
