<template>
  <div>
    <BannerSection />
    <ScoreSection />
  </div>
</template>

<script>
/**
 * Shows landing page with hero banner and carscoring demo section.
 */
import BannerSection from "@/components/banner/BannerSection";
import ScoreSection from "@/components/score/ScoreSection";

export default {
  components: { BannerSection, ScoreSection },
};
</script>