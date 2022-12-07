import home from "./pages/home.vue";
import formAdd from "./pages/formAdd.vue";
import update from "./pages/update.vue";

export default [
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/addForm",
        name: "addForm",
        component: formAdd
    },
    {
        path: "/update/:id",
        name: "update",
        component: update
    },
];