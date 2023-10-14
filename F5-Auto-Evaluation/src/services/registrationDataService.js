import http from "../http-common";
class registrationDataService {
  getAll(path) {
    return http.get(`/${path}`);
  }

  getById(path, id) {
    return http.get(`/${path}/${id}`);
  }

  save(path, data) {
    return http.post(`/${path}`, data);
  }
  update(path, id, data) {
    return http.put(`/${path}/${id}`, data);
  }

  delete(path, id) {
    return http.delete(`/${path}/${id}`);
  }
  login(path, data) {
    return http.post(`/${path}`, data);
  }
}

export default new registrationDataService();
