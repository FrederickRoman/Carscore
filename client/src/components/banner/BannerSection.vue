<template>
  <v-parallax dark height="300" src="@/assets/img/hero-banner.webp">
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center" id="carscore-main_header-container">
        <BannerHeader />
        <BannerSubheader />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
/**
 * Shows banner shown on landing page.
 */
import BannerHeader from "./header/BannerHeader";
import BannerSubheader from "./subheader/BannerSubheader";

export default {
  components: {
    BannerHeader,
    BannerSubheader,
  },
};
</script>


<style  scoped>
#carscore-main_header-container {
  background: rgba(1, 1, 1, 0.3);
  max-width: 500px;
}
</style>
