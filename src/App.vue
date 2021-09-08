<template>
  <v-app>
    <MainNav />
    <v-main>
      <v-scroll-x-transition mode="out-in" :hide-on-leave="true">
        <router-view />
      </v-scroll-x-transition>
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
