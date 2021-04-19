<template>
  <div>
    <BannerSection />
    <ScoreSection />
  </div>
</template>

<script>
import BannerSection from "@/components/banner/BannerSection";
import ScoreSection from "@/components/score/ScoreSection";

export default {
  components: {
    BannerSection,
    ScoreSection,
  },
};
</script>