<template>
  <div>
    <CarscoreBanner />
    <CarscoreDescriptionSection />
  </div>
</template>

<script>
import CarscoreBanner from "@/components/banner/CarscoreBanner";
import CarscoreDescriptionSection from "@/components/content/CarscoreDescriptionSection";

export default {
  components: {
    CarscoreBanner,
    CarscoreDescriptionSection,
  },
};
</script>