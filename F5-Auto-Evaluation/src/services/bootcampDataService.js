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

<<<<<<< HEAD
    deleteBootamp(id) {
        return http.delete(`/deleteBootamp/${id}`);
=======
    deleteBootcamp(id) {
        return http.delete(`/deleteBootcamp/${id}`);
>>>>>>> d9c3998eba62bcb0d10d40b79d93b273d992cfb1
    }
}

export default new bootcampDataService();