import http from "../http-common";
class bootcampDataService {

    getAllBootcamps() {
        return http.get(`/bootcamp`);
    }

    getBootcampById(id) {
        return http.get(`/bootcamp/${id}`);
    }

    createBootcamp(data) {
        return http.post(`/saveBootcamp`, data);
    }

    updateBootcamp(id, data) {
        return http.put(`/updateBootcamp/${id}`, data);
    }

    deleteBootamp(id) {
        return http.delete(`/deleteBootamp/${id}`);
    }
}

export default new bootcampDataService();