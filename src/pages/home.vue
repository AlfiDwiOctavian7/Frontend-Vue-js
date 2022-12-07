<template>
  <div>
        <HederCmp></HederCmp>
        <ViewCmp></ViewCmp>
        
        <CopyRight></CopyRight>
  </div>

</template>

<script>
import HederCmp from "../components/heder.vue"
import ViewCmp from "../components/view.vue"
import CopyRight from "../components/copyright.vue"

export default {
    name: 'homePages',
    components: {
        HederCmp,
        ViewCmp,
        CopyRight,
    },

};
</script>

<style>

</style>