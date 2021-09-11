<template>
  <v-lazy
    v-model="isActive"
    :options="lazyOptions"
    min-height="670"
    transition="v-scroll-x-transition"
  >
    <section class="d-flex justify-center align-center">
      <div>
        <section class="d-flex justify-center align-center ma-10">
          <div>
            <CarscoreMainForm />
          </div>
        </section>
        <section class="d-flex justify-center align-center mx-4 mb-6">
          <div>
            <ResultStars />
          </div>
        </section>
      </div>
    </section>
  </v-lazy>
</template>

<script>
import CarscoreMainForm from "@/components/form/CarscoreMainForm";
import ResultStars from "./ResultStars";

export default {
  components: {
    CarscoreMainForm,
    ResultStars,
  },
  data: () => ({
    isActive: false,
    lazyOptions: { threshold: 0.3 },
  }),
};
</script>

