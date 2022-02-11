<template>
  <v-app-bar app>
    <!-- Logo home button -->
    <router-link to="/" id="app-bar_home-link">
      <span class="d-flex">
        <v-img
          lazy-src="@/assets/img/carscoreLazyLogo.png"
          max-height="40"
          max-width="40"
          src="@/assets/img/carscoreMetalLogo.svg"
        />
        <v-toolbar-title
          class="carscore_brand-font"
          id="app-bar_home-link_title"
        >
          Carscore
        </v-toolbar-title>
      </span>
    </router-link>
    <v-spacer />
    <!-- Main menu button -->
    <v-btn
      fab
      small
      depressed
      outlined
      color="anchor"
      aria-label="menu"
      class="mx-3"
      @click="toggleDrawer"
    >
      <v-icon dark> mdi-format-list-bulleted-square </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
/**
 * It shows top app bar with home btn on the left and menu btn on the right.
 * The menu btn opens the drawer.
 */
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
@use '@/styles/resets/_resets.scss';

.carscore_brand-font {
  @include fonts.logo_text;
}

#app-bar_home-link {
  @include resets.link_styling;
  &_title {
    font-size: 1.8em;
    font-weight: bold;
  }
}
</style>