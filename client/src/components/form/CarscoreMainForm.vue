<template>
  <v-form v-model="valid">
    <v-container fluid>
      <v-row align="center">
        <v-col
          v-for="entry in entries"
          :key="entry.id"
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            v-model="select[entry.id]"
            :rules="RequireRule(entry.label)"
            :label="entry.label"
            :items="entry.items"
            required
            filled
            outlined
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
/**
 * It shows the main form that collects the info on the car.
 * If the info is invalid, it shows an error message.
 * Once the form is properly filled out, its info is sent out to the store
 * to be processed by the back-end.
 */
import { mapGetters, mapMutations, mapActions } from "vuex";
import attrs from "@/assets/data/carEvalAttrsSchema";

export default {
  data: () => ({
    valid: false,
    select: {
      buying: "",
      maint: "",
      doors: "",
      persons: "",
      lug_boot: "",
      safety: "",
    },
  }),
  computed: {
    ...mapGetters(["initCar", "car"]),
    filledOut() {
      const formEntries = Object.entries(this.select);
      const valueIsFilledOut = ([, formEntryValue]) => formEntryValue !== "";
      return formEntries.every(valueIsFilledOut);
    },
  },
  watch: {
    select: {
      deep: true,
      async handler(curSelect) {
        if (this.filledOut) {
          this.setCar(curSelect);
          await this.fetchScore(this.car);
        }
      },
    },
  },
  created() {
    this.entries = attrs;
    this.select = { ...this.select, ...this.initCar };
  },
  methods: {
    ...mapMutations({ setCar: "SET_CAR" }),
    ...mapActions({ fetchScore: "FETCH_SCORE" }),
    RequireRule(formEntry) {
      return [(v) => !!v || `${formEntry} is required`];
    },
  },
};
</script>