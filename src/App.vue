<template>
  <v-app>
    <MainNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainNav from "./components/nav/MainNav";
// import HeroBanner from "./components/banner/HeroBanner";
// import Home from "./views/Home";

export default {
  name: "App",
  components: { MainNav },
  data: () => ({
    // drawer: false,
    // group: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>
