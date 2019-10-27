<template>
  <div>
    <h1>Dynamic Page1</h1>
    <h5>{{ typePage }}</h5>
  </div>
</template>

<script>
export default {
  computed: {
    typePage() {
      return this.$store.getters.getType;
    },
  },
};
</script>

<style scoped>

</style>
