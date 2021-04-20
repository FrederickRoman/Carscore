<template>
  <StarsSection :score="score" :maxScore="maxScore" />
</template>

<script>
import StarsSection from "./StarsSection";

const MAX_SCORE = 3;

export default {
  components: {
    StarsSection,
  },
  data: () => ({
    score: 2,
  }),
  created() {
    this.maxScore = MAX_SCORE;
  },
};
</script>