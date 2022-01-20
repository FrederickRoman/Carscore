<template>
  <v-rating
    v-model="score"
    dense
    readonly
    color="yellow"
    background-color="yellow lighten-3"
    size="80"
    :length="maxScore"
  >
  </v-rating>
</template>

<script>
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