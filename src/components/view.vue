<template>
   <div class="d-flex flex-wrap justify-content-between ms-3 me-3">
       <div v-for="(item, index) in studentData" :key="index" class="card ms-3 mt-3" style="width: 25rem;"><!-- <img src="#" class="card-img-top" alt="card"> -->
        <div class="card-body row form-group">
                <h3 class="card-title">{{ item.student_name + ", " + item.student_age + " Years Old " }}</h3>
                
                <div class="col-auto ">
                    <h5 class="card-titile mb-3">{{ item.self_description }}</h5>
                <p class="card-text">{{ item.self_descriptiion }}</p>
                <p class="card-text">Email : {{ item.student_email }}</p>
                <p class="card-text">Soft Skill : {{ item.shoft_skill }}</p>
                <p class="card-text">Hard Skill : {{ item.hard_skill }}</p>
                <p class="card-text">Interest : {{ item.interest }}</p>
                </div>
                    
                <div>
                    <router-link type="button" class="btn btn-primary mt-3" :to="{ path: '/update/' + item.id}">Update</router-link>
                    <button type="button" class="btn btn-danger mt-3 ms-2" @click="deleteStudent(item.id)">Delete</button>
       
                    <img class="male" v-if="item.gender == 'Male'" src="../assets/img/male.png" alt="male">
                    <img class="female" v-else-if="item.gender == 'Female'" src="../assets/img/female.png" alt="female">
                </div>   
        </div>
     </div>
   </div>
</template>
    
    <script>
    import studentSerevice from "../service/studentSerevice"
    
    export default {
        name: 'viewComponent',
    
         methods : {
            getStudent(){
                studentSerevice.getAll()
                    .then(response => {
                        this.studentData = response.data;
                        console.log(this.studentData);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteStudent(id){
                if(confirm("Apakah anda yakin hapus?")){
                    studentSerevice.deleteStudent(id)
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                    location.reload();
                }else{
                    this.$alert("Hapus dibatalkan!")
                }
            }
        },
        mounted(){
            this.getStudent();
        },
        data(){
            return{
                studentData : null,
            }
        }
    }
    </script>
    
    <style scoped>
       .male {
           width: 50px;
           margin-left: 157px;
       }
       .female {
           width: 40px;
           margin-left: 165px;
       }
    </style>