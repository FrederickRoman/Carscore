<template>
  <v-lazy
    v-model="isActive"
    :options="lazyOptions"
    min-height="188"
    transition="v-scroll-x-transition"
  >
    <section id="intro_section">
      <header class="d-flex justify-center align-center mx-4 mb-6">
        <h1 class="text-center">Car resell scoring within seconds</h1>
      </header>
      <v-divider class="mb-6" color="#fff4e7" />
      <section class="ma-10">
        <header><h2>How does it work?</h2></header>
        <div>
          <p>
            Put a car you want to buy,and get an reselling score (0-3) for fee.
            It applies neural networks on public datasets to assign the score.
          </p>
          <p>Both the code and the dataset are open to the public.</p>
        </div>
      </section>
    </section>
  </v-lazy>
</template>


<script>
export default {
  data: () => ({
    isActive: false,
    lazyOptions: { threshold: 0.5 },
  }),
};
</script>

<style  scoped>
#intro_section {
  min-height: 188px;
}
</style>



