<template>
  <h1 class="d-flex justify-center align-center mx-6">
    <Star v-for="star in stars" :filled="star.filled" :key="star.id" />
  </h1>
</template>

<script>
import Star from "./Star";

export default {
  components: {
    Star,
  },
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