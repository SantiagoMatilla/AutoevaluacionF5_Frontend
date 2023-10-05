import http from "../http-common";
class DataService {

  getAllBootcamps() {
    return http.get(`/bootcamps`);
  }
  
  getBootcampById(id){
    return http.get(`/bootcamps/${id}`);
  }
  
  createBootcamp(data) {
    return http.post(`/saveBootcamp`, data);
  }
  
  updateBootcamp(id, data) {
    return http.put(`/updateBootcamp/${id}`, data);
  }
  
  deleteBootcamp(id) {
    return http.delete(`/bootcamps/${id}`);
  }

getAllStacks() {
  return http.get(`/stacks`);
}

getStackById(id){
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

getAllSkills() {
  return http.get(`/skills`);
}

// getSkillById(id){
//   return http.get(`/skills/${id}`);
// }

createSkill(data) {
  return http.post(`/saveSkill`, data);
}

updateSkill(id, data) {
  return http.put(`/updateSkill/${id}`, data);
}

deleteSkill(id) {
  return http.delete(`/skill/${id}`);
}

getAllContents() {
  return http.get(`/contents`);
}

// getContentById(id){
//   return http.get(`/contents/${id}`);
// }

createContent(data) {
  return http.post(`/saveContent`, data);
}

updateContent(id, data) {
  return http.put(`/updateContent/${id}`, data);
}

deleteContent(id) {
  return http.delete(`/content/${id}`);
}



}

export default new DataService();
 