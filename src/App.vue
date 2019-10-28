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
};
</script>

<style lang="scss">

</style>
