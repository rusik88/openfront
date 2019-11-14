<template>
  <div>
    <h1>Dynamic Page</h1>
    <component
      :is="componentLoad.default"
      v-if="componentLoad"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentLoad: null,
      component: 'ProductComponent',
    };
  },
  computed: {
    typePage() {
      return this.$store.getters.getType;
    },
  },
  async mounted() {
    this.componentLoad = await import(`@/components/${this.component}`);
    console.log(this.componentLoad);
  },
};
</script>

<style scoped>

</style>
