<template>
  <v-footer
    padless
    absolute
  >
    <v-card
      class="flex"
      flat
      tile
      color="indigo darken-2"
      dark
    >
      <v-card-title class="indigo indigo darken-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="20px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterView',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
};
</script>

<style scoped>
</style>
