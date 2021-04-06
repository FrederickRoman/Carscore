<template>
  <span>
    <!-- Must have the app property -->
    <v-app-bar app
      ><v-btn @click="drawer = !drawer">Logo</v-btn> <span>Carscore</span
      ><span>About</span>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "MainNav",
  components: {
    // HeroBanner,
  },
  data: () => ({
    drawer: false,
    // group: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>