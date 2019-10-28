<template>
  <div class="homePage1">
    <HomeView />
  </div>
</template>

<script>

import HomeView from '@/views/HomeView';

export default {
  name: 'HelloWorld',
  components: {
    HomeView,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
