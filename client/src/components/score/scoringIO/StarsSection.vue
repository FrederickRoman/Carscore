<template>
  <v-rating
    :model-value="score"
    readonly
    color="yellow-darken-2"
    active-color="yellow"
    :size="size"
    :length="maxScore"
  />
</template>

<script>
/**
 * Shows score [0,3] as rating stars.
 */
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
    maxScore: {
      type: Number,
      required: true,
    },
    size:{
      type: Number,
      default: 80
    }
  },
  computed: {
    maxScorefalsesPad() {
      return Array(this.maxScore).fill(false);
    },
    stars() {
      const areStarsFilled = [...this.maxScorefalsesPad];
      for (let i = 1; i <= this.score; i++) areStarsFilled[i - 1] = true;
      return areStarsFilled.map((filled, id) => ({ filled, id }));
    },
  },
};
</script>