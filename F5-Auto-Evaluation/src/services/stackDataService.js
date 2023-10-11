import http from "../http-common";
class stackDataService {

    getAllStacks() {
        return http.get(`/stacks`);
    }

    getStackById(id) {
        return http.get(`/stacks/${id}`);
    }

    createStack(data) {
        return http.post(`/saveStack`, data);
    }

    updateStack(id, data) {
        return http.put(`/updateStack/${id}`, data);
    }

    deleteStack(id) {
        return http.delete(`/stacks/${id}`);
    }
}

export default new stackDataService();