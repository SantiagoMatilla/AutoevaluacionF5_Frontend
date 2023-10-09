import http from "../http-common";
class skillDataService {

    getAllSkills() {
        return http.get(`/skill`);
    }

    getSkillById(id) {
        return http.get(`/skill/${id}`);
    }

    createSkill(data) {
        return http.post(`/saveSkill`, data);
    }

    updateSkill(id, data) {
        return http.put(`/updateSkill/${id}`, data);
    }

    deleteSkill(id) {
        return http.delete(`/deleteSkill/${id}`);
    }
}

export default new skillDataService();