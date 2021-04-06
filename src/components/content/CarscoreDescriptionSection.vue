<template >
  <div class="d-lg-flex">
    <v-divider class="mb-6"></v-divider>
    <div class="d-flex justify-center align-center">
      <div>
        <div class="d-flex justify-center align-center ma-10">
          <div>
            <CarscoreMainForm />
          </div>
        </div>
        <div class="d-flex justify-center align-center mx-4 mb-6">
          <h1 class="d-flex justify-center align-center mx-6">
            &#9733; &#9734; &#9734;
          </h1>
        </div>
      </div>
    </div>
    <v-divider class="mb-6"></v-divider>
    <div class="">
      <div class="d-flex mx-4 mb-6">
        <h1 class="d-flex justify-center align-center mx-6">
          How does it work?
        </h1>
      </div>
      <div class="ma-10">
        <p>
          TL:DR Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, perferendis..
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          blanditiis! Itaque unde ducimus quia error et, nemo aliquid eveniet
          dolore minima esse nisi assumenda aspernatur quibusdam maiores, quod
          commodi. Cumque aliquam porro maiores delectus voluptates ipsam.
          Tempora excepturi voluptatem odit!
        </p>
      </div>
    </div>
  </div>
</template>



<script>
import CarscoreMainForm from "@/components/form/CarscoreMainForm";

export default {
  components: {
    CarscoreMainForm,
  },
};
</script>

