<template>
  <nav>
    <MainAppBar @toggle-drawer="toggleDrawer" />
    <MainAppDrawer :openDrawer="openDrawer" @set-drawer="setDrawer" />
  </nav>
</template>

<script>
/**
 * Manages the interactions between the top bar and the side drawer.
 */
import MainAppBar from "./bar/MainAppBar";
import MainAppDrawer from "./drawer/MainAppDrawer";

export default {
  name: "MainNav",
  components: { MainAppBar, MainAppDrawer },
  data: () => ({ openDrawer: false }),
  methods: {
    toggleDrawer() {
      this.openDrawer = !this.openDrawer;
    },
    setDrawer(drawer) {
      this.openDrawer = drawer;
    },
  },
};
</script>


