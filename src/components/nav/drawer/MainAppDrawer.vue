<template>
  <v-navigation-drawer
    v-model="drawer"
    v-click-outside="closeDrawer"
    app
    bottom
  >
    <DrawerBrandLi />
    <v-divider />
    <DrawerNavList v-bind="$attrs" v-on="$listeners" />
  </v-navigation-drawer>
</template>

<script>
import DrawerBrandLi from "./branding/DrawerBrandLi";
import DrawerNavList from "./nav/DrawerNavlist";

export default {
  components: {
    DrawerBrandLi,
    DrawerNavList,
  },
  props: {
    openDrawer: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    drawer: false,
  }),
  watch: {
    openDrawer: {
      immediate: true,
      handler(openDrawer) {
        this.drawer = openDrawer;
      },
    },
    drawer(drawer) {
      this.$emit("set-drawer", drawer);
    },
  },
  methods: {
    closeDrawer() {
      if (!this.openDrawer) this.$emit("set-drawer", false);
    },
  },
};
</script>

