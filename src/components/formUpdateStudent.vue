<template>
    <div>
        <router-link to="/">
            <button class="btn btn-primary font-weight-bold m-3" type="button">Back</button>
        </router-link>

        <div class="row justify-content-center my-5 w-100">
            <div class="col-8 p-5 rounded border border-primary" v-show="!sucess">
                <h2 class="text-center mb-5">Update Student</h2>
                <form @submit.prevent="updateStudents">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Student Name</label>
                            <input type="text" class="form-control" id="name" name="nama" placeholder="Enter Name"
                                required v-model="studentData.student_name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="shoftskill">Shoft Skill</label>
                            <input type="text" class="form-control" id="shoftskill" name="shoft_skill"
                                placeholder="Enter Shoft Skill" required v-model="studentData.shoft_skill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="age">Student Age</label>
                            <input type="number" class="form-control" id="age"  placeholder="Enter age"
                                required v-model="studentData.student_age">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select id="gender" class="form-control"  required
                                v-model="studentData.gender">
                                <option selected disabled value="">Choose Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="hardskill">Hard Skill</label>
                            <input type="text" class="form-control" id="hardskill" name="hard_skill"
                                placeholder="Enter hard skills" required v-model="studentData.hard_skill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="email">Student Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email"
                                required v-model="studentData.student_email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="interest">Interest</label>
                            <select id="interest" class="form-control" name="interest" required
                                v-model="studentData.interest">
                                <option selected disabled value="">Choose Interest</option>
                                <option>Data Science</option>
                                <option>Network</option>
                                <option>Web Frontend</option>
                                <option>Web Backend</option>
                                <option>Mobile Apps</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="selfDescription">Self Description</label>
                            <textarea class="form-control" name="deskripsi_diri" id="selfDescription" cols="100"
                                required v-model="studentData.self_description"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
            <sucessUpdate v-show="sucess" style="width: 500px; margin-left: 500px; margin-right: 300px;"></sucessUpdate>
        </div>
    </div>
</template>

<script>

import studentSerevice from '@/service/studentSerevice';
import sucessUpdate from "@/components/sucessFormUpdate.vue";

export default {
    name: 'UpdateFormCompo',
    components: {
        sucessUpdate,
    },
    data() {
        return {
            studentData: {
                student_name: null,
                student_age: null,
                student_email: null,
                gender: "",
                shoft_skill: null,
                hard_skill: null,
                interest: null,
                self_description: null,
            },
            sucess: false,
        };
    },
    methods: {
        updateStudents() {
            let data = this.studentData;
            let id = this.$route.params.id;
            studentSerevice.updateStudent(id, data)
                .then((response) => {
                    console.log(response.data);
                    this.sucess = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getStudent() {
            let id = this.$route.params.id;
            studentSerevice.getStudent(id)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getStudent();
    },
}
</script>

<style>

</style>