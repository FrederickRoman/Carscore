<template>
  <!-- Carscore brand list item shown on the drawer -->
  <v-list-item>
    <v-list-item-content>
      <!-- Carscore logo -->
      <v-list-item-title>
        <v-row align="center" justify="center">
          <v-col cols="2" class="pr-0">
            <v-img
              lazy-src="@/assets/img/cascoreLogoPlain.svg"
              max-height="20"
              max-width="20"
              src="@/assets/img/carscoreLazyLogo.png"
            />
          </v-col>
          <v-col cols="10" class="pl-0">
            <span class="carscore_brand-font"> Carscore</span>
          </v-col>
        </v-row>
      </v-list-item-title>
      <!-- Carscore description -->
      <v-list-item-subtitle> ML-driven car score system </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>


<style lang="scss" scoped>
@use "@/styles/fonts/_fonts.scss";

.carscore_brand-font {
  @include fonts.logo_text;
}
</style>