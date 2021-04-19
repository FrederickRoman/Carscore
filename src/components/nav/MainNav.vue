<template>
  <span>
    <MainAppBar @toggle-drawer="toggleDrawer" />
    <MainAppDrawer :openDrawer="openDrawer" @set-drawer="setDrawer" />
  </span>
</template>

<script>
import MainAppBar from "./bar/MainAppBar";
import MainAppDrawer from "./drawer/MainAppDrawer";

export default {
  name: "MainNav",
  components: {
    MainAppBar,
    MainAppDrawer,
  },
  data: () => ({
    openDrawer: false,
  }),
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


