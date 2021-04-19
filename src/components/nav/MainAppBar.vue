<template>
  <v-app-bar app>
    <v-img
      lazy-src="@/assets/img/carscoreLazyLogo.png"
      max-height="40"
      max-width="40"
      src="@/assets/img/carscoreMetalLogo.svg"
    ></v-img>
    <v-toolbar-title class="carscore_brand-font">Carscore</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      fab
      small
      depressed
      outlined
      color="anchor"
      class="mx-3"
      @click="toggleDrawer"
    >
      <v-icon dark> mdi-format-list-bulleted-square </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit("toggle-drawer");
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/fonts/_fonts.scss';

.carscore_brand-font {
  @include fonts.logo_text;
}
</style>