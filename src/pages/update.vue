<template>
   <div>
        <HederCmp></HederCmp>
        <UpdateFormCompo></UpdateFormCompo>
        <CopyRight></CopyRight>
  </div>
</template>

<script>

import HederCmp from "../components/heder.vue";
import UpdateFormCompo from "../components/formUpdateStudent.vue";
import CopyRight from "../components/copyright.vue";


export default {
    name: 'updateView',
    components: {
        HederCmp,
        CopyRight,
        UpdateFormCompo,
        

    }

}
</script>

<style>

</style>