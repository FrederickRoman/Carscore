<template>
  <v-app>
    <MainNav />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import MainNav from "./components/nav/MainNav";
// import HeroBanner from "./components/banner/HeroBanner";
import Home from "./pages/Home";

export default {
  name: "App",
  components: { MainNav, Home },
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
