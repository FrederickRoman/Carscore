<template>
  <v-app>
    <MainNav />
    <v-main>
      <v-scroll-x-transition mode="out-in" :hide-on-leave="true">
        <router-view />
      </v-scroll-x-transition>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script>
/**
 * It shows the main structure of the Carscore app; 
 * it has a top nav bar, a middle main router view section and a bottom footer.
 * 
 * @author Frederick Roman
 */
import MainFooter from "./components/footer/MainFooter.vue";
import MainNav from "./components/nav/MainNav";

export default {
  name: "App",
  components: { MainNav, MainFooter },
};
</script>
