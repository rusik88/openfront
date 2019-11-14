<template>
  <div class="header">
    <v-toolbar
      dark
      color="indigo darken-2"
    >
      <v-btn icon>
        <v-icon
          @click="drawer = !drawer"
        >
          mdi-menu
        </v-icon>
      </v-btn>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer />
      <template>
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    <v-sheet>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-card
          class="mx-auto"
          max-width="300"
          tile
        >
          <v-list flat>
            <v-subheader
              class="text-center"
            >
              Application
            </v-subheader>
            <v-list-item-group
              v-model="item"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content @click="navigateDraver">
                  <router-link :to="item.href" @click="navigateDraver">
                    {{ item.text }}
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<script>

export default {
  name: 'HeaderView',
  data() {
    return {
      drawer: false,
      item: null,
      items: [
        { text: 'Link 1', icon: 'mdi-clock', href: '#Test' },
        { text: 'Link 2', icon: 'mdi-account', href: '#Test2' },
        { text: 'Link 3', icon: 'mdi-flag', href: '#Test3' },
      ],
    };
  },
  methods: {
    navigateDraver() {
      this.drawer = false;
      console.log(this.drawer);
    },
  },
};
</script>

<style scoped>
  .v-list-item-group .v-list-item--active a {
    color:#3f51b5;
  }
  .v-list-item-group a {
    text-decoration:none;
    color:rgba(0, 0, 0, 0.87);
  }
</style>
