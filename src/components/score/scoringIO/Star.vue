<template>
  <v-icon>{{ star }}</v-icon>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    star() {
      return this.filled ? "mdi-star" : "mdi-star-outline";
    },
  },
};
</script>