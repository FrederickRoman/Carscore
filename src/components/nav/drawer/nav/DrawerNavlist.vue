<template>
  <v-list-item-group v-model="group">
    <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
const NAV_ITEMS = Object.freeze([
  { title: "API", icon: "mdi-dns", link: "/comingSoon" },
  { title: "About", icon: "mdi-help-box", link: "/about" },
  { title: "Contact", icon: "mdi-card-account-mail", link: "/comingSoon" },
]);

export default {
  data: () => ({
    group: null,
  }),
  watch: {
    group(curState) {
      if (curState !== null) {
        this.$emit("set-drawer", false);
        this.group = null;
      }
    },
  },
  created() {
    this.items = NAV_ITEMS;
  },
};
</script>

