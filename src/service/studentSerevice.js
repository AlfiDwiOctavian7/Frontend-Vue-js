import http from "../http-common"

class studentSerevice {
    insertStudent(student) {
        return http.post("/shipping/insert", student);
    }
    getAll() {
        return http.get("/shipping/getAll");
    }
    deleteStudent(id) {
        return http.delete(`/shipping/delete/${id}`);
    }
    updateStudent(id, student) {
        return http.put(`/shipping/update/${id}`, student);
    }
    getStudent(id) {
        return http.get(`/shipping/getStudent/${id}`);
    }
}

export default new studentSerevice();