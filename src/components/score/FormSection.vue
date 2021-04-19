<template>
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
</template>

<script>
import CarscoreMainForm from "@/components/form/CarscoreMainForm";
import ResultStars from "./ResultStars";

export default {
  components: {
    CarscoreMainForm,
    ResultStars,
  },
};
</script>

