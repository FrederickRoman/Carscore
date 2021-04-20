<template>
  <StarsSection :score="score" :maxScore="maxScore" />
</template>

<script>
import StarsSection from "./StarsSection";
import { mapGetters } from "vuex";

const MAX_SCORE = 3;

export default {
  components: {
    StarsSection,
  },
  computed: {
    ...mapGetters(["score"]),
  },
  created() {
    this.maxScore = MAX_SCORE;
  },
};
</script>