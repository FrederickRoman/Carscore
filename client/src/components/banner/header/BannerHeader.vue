<template>
<!-- Shows Carscore brand logo and name -->
  <h1 class="display-2 font-weight-bold mb-4">
    <v-row align="center" justify="center">
      <v-img
        lazy-src="@/assets/img/carscoreLazyLogo.png"
        max-height="60"
        max-width="60"
        src="@/assets/img/carscoreMetalLogo.svg"
      />
      <span class="pa-0" id="carscore_header-text"> Carscore </span>
    </v-row>
  </h1>
</template>

<style lang="scss" scoped>
@use '@/styles/fonts/_fonts.scss';

#carscore_header-text {
  @include fonts.logo_text;
}
</style>