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
          ></v-select>
        </v-col>
        <pre> {{ select }}</pre>
        <pre> {{ valid }}</pre>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import attrs from "@/assets/data/carEvalAttrsSchema";
import { mapActions } from "vuex";

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
  watch: {
    select: {
      deep: true,
      async handler() {
        try {
          await this.fetchScore();
        } catch (error) {
          console.log(error);
        }
      },
    },
  },
  created() {
    this.entries = attrs;
  },
  methods: {
    ...mapActions({
      fetchScore: "FETCH_SCORE",
    }),
    RequireRule(formEntry) {
      return [(v) => !!v || `${formEntry} is required`];
    },
  },
};
</script>