<template>
    <div class="row justify-content-center my-5">
      <div class="col-6 p-5 rounded border border-primary" v-show="!success">
        <form @submit.prevent="inputStudent">
          <h3 class="text-center mb-5">ADD STUDENT</h3>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="StudentName">Student Name</label>
              <input
                v-model="studentData.student_name"
                type="text"
                class="form-control"
                id="studentName"
                placeholder="student Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="shoftSkill">Shoft Skills</label>
              <input
                v-model="studentData.shoft_skill"
                type="text"
                class="form-control"
                id="ShoftSkill"
                placeholder="Shoft Skill"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="studentAge">Student Age</label>
              <input
                v-model="studentData.student_age"
                type="text"
                class="form-control"
                id="studentAge"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="gender">Genderr</label>
              <select
                v-model="studentData.gender"
                id="gender"
                class="form-control"
              >
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="hardSkill">Hard Skill</label>
              <input
                v-model="studentData.hard_skill"
                type="text"
                class="form-control"
                id="hardSkill"
                placeholder="hard skill"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="studentEmail">Student Email</label>
              <input
                v-model="studentData.student_email"
                type="Email"
                class="form-control"
                id="studentEmail"
                placeholder="Studen Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="interest">Interest</label>
              <select
                v-model="studentData.interest"
                id="gender"
                class="form-control"
              >
                <option selected>Choose...</option>
                <option>Data Science</option>
                <option>Network</option>
                <option>Web Frontend</option>
                <option>Web Backend</option>
                <option>Mobie Apps</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-15">
              <label for="selfDescription">Self Description</label>
              <textarea
                v-model="studentData.self_description"
                name="text"
                id="selfDescription"
                cols="75"
                rows="4"
                placeholder="self description"
              >
  Ambisious person</textarea
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary">{{ buttonValue }}</button>
        </form>
      </div>
      <successForm v-show="success" style="width: 500px; margin-left: 500px; margin-right: 300px;"></successForm>
    </div>
  </template>
  
  <script>
  import studentSerevice from "@/service/studentSerevice";
  import successForm from "@/components/successFormAdd.vue";
  
  export default {
    name: "formAdd",
  
    data() {
      return {
        studentData:{
          student_name: null,
          student_age: null,
          student_email: null,
          gender: "",
          shoft_skill: null,
          hard_skill: null,
          interest: null,
          self_description: null,
        },
        success: false,
        buttonValue: "Submit",
      };
    },
  
    methods: {
      inputStudent() {
        let data = this.studentData;
        if (this.buttonValue == "Submit") {
          studentSerevice
            .insertStudent(data)
            .then((response) => {
              console.log(response.data);
              this.success = true;
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          studentSerevice
            .updateStudent(data.id, data)
            .then((response) => {
              console.log(response.data);
              this.success = true;
            })
            .catch((e) => {
              console.log(e);
            });
        }
      },
    },
    components: {
      successForm,
    },
    props: ["studentDataProps"],
    watch: {
      studentDataProps(newValue){
        this.studentData = newValue;
        console.log(this.studentData);
        this.buttonValue = "Update";
      },
    }
  };
  </script>
  
  <style>
  </style>