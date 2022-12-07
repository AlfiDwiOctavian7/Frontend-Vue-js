<template>
   <div>
        <HederCmp></HederCmp>
        <FormAdd></FormAdd>
        <CopyRight></CopyRight>
  </div>
</template>

<script>
import HederCmp from "../components/heder.vue";
import FormAdd from "../components/formAddstudent.vue";
import CopyRight from "@/components/copyright.vue";

export default {
    name: 'formAdd',
    components: {
        HederCmp,
        FormAdd,
        CopyRight,
    }

}
</script>

<style>

</style>