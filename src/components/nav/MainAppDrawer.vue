<template>
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
</template>

<script>
export default {
  props: {
    openDrawer: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    drawer: false,
    items: [
      { title: "Settings", icon: "mdi-cog" },
      { title: "About", icon: "mdi-help-box" },
    ],
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
};
</script>

<style lang="scss" scoped>
@use '@/styles/fonts/_fonts.scss';

.carscore_brand-font {
  @include fonts.logo_text;
}
</style>