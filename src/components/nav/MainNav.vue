<template>
  <span>
    <MainAppBar @toggle-drawer="toggleDrawer" />
    <MainAppDrawer :openDrawer="openDrawer" @set-drawer="setDrawer" />
  </span>
</template>

<script>
import MainAppBar from "./MainAppBar";
import MainAppDrawer from "./MainAppDrawer";

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


