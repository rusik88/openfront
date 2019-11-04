<template>
  <div id="app">
    <router-view />
    <FooterView />
  </div>
</template>

<script>

import FooterView from './views/common/FooterView';

export default {
  name: 'app',
  components: { FooterView },
  computed: {
    auth() {
      return this.$store.getters.getAuth;
    },
  },
};
</script>

<style lang="scss">

</style>
