<template>
  <v-app id="app">
    <HeaderView />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <SidebarView />
          </v-col>
          <v-col cols="10">
            <v-container>
              <v-row>
                <router-view />
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <FooterView />
  </v-app>
</template>

<script>
  import HeaderView from './views/common/HeaderView';
  import FooterView from './views/common/FooterView';
  import SidebarView from './views/common/SidebarView';
  export default {
    name: 'App',
    components: { HeaderView, FooterView, SidebarView },
    data: () => ({
      //
    }),
  };
</script>
