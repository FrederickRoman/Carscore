<template >
  <main class="d-lg-flex">
    <v-divider class="mb-6" />
    <IntroSection />
    <v-divider class="mb-6" />
    <FormSection />
  </main>
</template>

<script>
import IntroSection from "./IntroSection";
import FormSection from "./FormSection";

export default {
  components: {
    IntroSection,
    FormSection,
  },
};
</script>

