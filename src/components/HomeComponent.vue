<template>
  <div class="homePage1">
    <HomeView />
    <component
      :is="componentLoad.default"
      v-if="componentLoad"
    />
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
  data() {
    return {
      componentLoad: null,
      component: 'ProductComponent',
    };
  },
  async mounted() {
    this.componentLoad = await import(`@/components/${this.component}`);
    console.log(this.componentLoad);
  },
};
</script>

<style scoped lang="scss">

</style>
