<template>
  <v-parallax dark height="300" src="@/assets/img/hero-banner.webp">
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center" id="carscore-main_header-container">
        <h1 class="display-2 font-weight-bold mb-4">
          <v-row align="center" justify="center">
            <v-img
              lazy-src="@/assets/img/carscoreLazyLogo.png"
              max-height="60"
              max-width="60"
              src="@/assets/img/carscoreMetalLogo.svg"
            ></v-img>
            <span class="carscore_brand-font"> Carscore</span></v-row
          >
        </h1>
        <h1 class="display-0 font-weight-bold mb-4">
          ML-driven car score system
        </h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>


<style  scoped>
#carscore-main_header-container {
  background: rgba(1, 1, 1, 0.3);
  max-width: 500px;
}
.carscore_brand-font{
  font-family:'Orbitron', 'Times New Roman', Times, serif;
    text-shadow: 0 0 3px gray, 0 0 5px black;
    padding: 0px 5px;
}
</style>
