import http from "../http-common";
class contentDataService {
  getAllContents() {
    return http.get(`/contents`);
  }

  getContentById(id) {
    return http.get(`/content/${id}`);
  }

  createContent(data) {
    return http.post(`/saveContent`, data);
  }

  updateContent(id, data) {
    return http.put(`/updateContent/${id}`, data);
  }

  deleteContent(id) {
    return http.delete(`/deleteContent/${id}`);
  }
}

export default new contentDataService();
