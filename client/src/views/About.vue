<template>
  <section>
    <h1 class="d-flex justify-center align-center mx-6 my-6">About</h1>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            What is this for?
          </h2>
        </div>
        <div class="ma-10">
          <p>
            Carscore is a car classifier distributed through its public API.
            Carscore is an
            <ExtLink
              href="https://github.com/FrederickRoman/Carscore"
              class="white--text"
            >
              <template #body> open source project </template>
            </ExtLink>
            that was created by
            <ExtLink href="https://www.frederickroman.com" class="white--text">
              <template #body> Frederick Roman. </template>
            </ExtLink>
          </p>
        </div>
      </div>
    </div>
    <v-divider class="mb-6" color="#fff4e7"></v-divider>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How does it work?
          </h2>
        </div>
        <div class="ma-10">
          <div>
            <p>
              Carscore collects the car description from the form that the user
              fills out. Then it sends it to a server that classifies the car
              and sends the classification back to the user.
            </p>
            <p>
              The Carscore classifier itself is a
              <ExtLink
                href="https://en.wikipedia.org/wiki/Feedforward_neural_network"
                class="white--text"
              >
                <template #body>feedforward neural network </template>
              </ExtLink>
              that was trained on the
              <ExtLink
                href="https://archive.ics.uci.edu/ml/datasets/car+evaluation"
                class="white--text"
              >
                <template #body>UCI car evaluation dataset </template>
              </ExtLink>
              using the Machine Learning framework
              <ExtLink href="https://www.tensorflow.org/" class="white--text">
                <template #body>Tensorflow </template>.
              </ExtLink>
            </p>
          </div>
          <figure
            class="d-flex flex-column justify-center align-center mx-6 my-10"
          >
            <v-img
              max-width="300"
              src="@/assets/img/hero-banner.webp"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * Shows an overview of Carscore's purpose and development.
 */
import ExtLink from "@/components/link/ExtLink";

export default {
  name: "About",
  components: { ExtLink },
};
</script>

 

