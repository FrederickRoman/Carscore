<template>
  <v-list v-model:selected="selectedItems" nav>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.link"
      :prepend-icon="item.icon"
      :title="item.title"
    />
  </v-list>
</template>

<script>
/**
 * Shows nav links to the main pages of the website.
 */
const NAV_ITEMS = Object.freeze([
  { title: "API", icon: "mdi-dns", link: "/comingSoon" },
  { title: "About", icon: "mdi-help-box", link: "/about" },
  { title: "Contact", icon: "mdi-card-account-mail", link: "/comingSoon" },
]);

export default {
  data: () => ({ selectedItems: [] }),
  watch: {
    selectedItems(curState) {
      if (curState.length > 0) {
        this.$emit("set-drawer", false);
        this.selectedItems = [];
      }
    },
  },
  created() {
    this.items = NAV_ITEMS;
  },
};
</script>
