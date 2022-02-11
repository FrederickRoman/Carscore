<template>
  <section>
    <h1 class="d-flex justify-center align-center mx-6 my-6">About</h1>
    <section class="d-lg-flex">
      <div class="">
        <header class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            What is this for?
          </h2>
        </header>
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
    </section>
    <v-divider class="mb-6" color="#fff4e7" />
    <section class="d-lg-flex">
      <div class="">
        <header class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How does it work?
          </h2>
        </header>
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
          <div class="d-sm-flex justify-center align-center">
            <figure class="d-flex justify-center align-center">
              <v-img max-width="200" src="@/assets/img/hero-banner.webp" />
            </figure>
            <figure class="d-flex justify-center align-center">
              <v-img max-width="200" src="@/assets/img/neuralnet.svg" />
            </figure>
            <figure class="d-flex justify-center align-center">
              <StarsSection :score="2" :maxScore="3" :size="40" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
/**
 * Shows an overview of Carscore's purpose and development.
 */
import ExtLink from "@/components/link/ExtLink";
import StarsSection from "@/components/score/scoringIO/StarsSection";

export default {
  name: "About",
  components: { ExtLink, StarsSection },
};
</script>
