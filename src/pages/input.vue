<template>
  <div>
    <hederVue></hederVue>

    <sucessFormUpdateVue></sucessFormUpdateVue>
    <copyrightVue></copyrightVue>
  </div>
</template>

<script>
import hederVue from '@/components/heder.vue';
import sucessFormUpdateVue from '@/components/sucessFormUpdate.vue';
import copyrightVue from '@/components/copyright.vue';

export default {
    name: 'inputView',
    components: {
        hederVue,
        sucessFormUpdateVue,
        copyrightVue,
    },

}
</script>

<style>

</style>