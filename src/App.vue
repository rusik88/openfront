<template>
  <v-app id="app">
    <HeaderView />
    <v-container fluid>
      <v-row>
        <router-view />
      </v-row>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import HeaderView from './views/common/HeaderView';
import FooterView from './views/common/FooterView';

export default {
  name: 'App',
  components: { HeaderView, FooterView },
  data: () => ({
    //
  }),
};
</script>
