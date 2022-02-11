<template >
  <main class="d-lg-flex">
    <IntroSection />
    <v-divider class="mb-6" />
    <FormSection />
  </main>
</template>

<script>
/**
 * Shows the car score section shown on the landing page.
 */
import IntroSection from "./introText/IntroSection";
import FormSection from "./scoringIO/FormSection";

export default {
  components: { IntroSection, FormSection },
};
</script>

