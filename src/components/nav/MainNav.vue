<template>
  <span>
    <!-- Must have the app property -->
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
        @click="drawer = !drawer"
      >
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-row align="center" justify="center">
              <v-col cols="2" class="pr-0">
                <v-img
                  lazy-src="@/assets/img/cascoreLogoPlain.svg"
                  max-height="20"
                  max-width="20"
                  src="@/assets/img/carscoreLazyLogo.png"
                >
                </v-img>
              </v-col>
              <v-col cols="10" class="pl-0">
                <span class="carscore_brand-font"> Carscore</span>
              </v-col>
            </v-row>
          </v-list-item-title>
          <v-list-item-subtitle>
            ML-driven car score system
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "MainNav",
  components: {
    // HeroBanner,
  },
  data: () => ({
    drawer: false,
    // group: null,
    items: [
      { title: "Settings", icon: "mdi-cog" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>

<style scoped>
.carscore_brand-font {
  font-family: "Orbitron", "Times New Roman", Times, serif;
  text-shadow: 0 0 3px gray, 0 0 5px black;
  /* padding: 0px 5px; */
}
</style>