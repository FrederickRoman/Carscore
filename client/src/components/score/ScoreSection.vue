<template >
  <main class="d-lg-flex">
    <IntroSection />
     <v-divider class="mb-6" color="#fff4e7" />
    <FormSection />
  </main>
</template>

<script>
import IntroSection from "./introText/IntroSection";
import FormSection from "./scoringIO/FormSection";

export default {
  components: {
    IntroSection,
    FormSection,
  },
};
</script>

