<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home1 Page
      </router-link>
      <router-link to="/about">
        About Page
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate() {
    console.log('beforeCreate()1');
    console.log('beforeCreate()2');
  },
};
</script>

<style lang="scss">

</style>
