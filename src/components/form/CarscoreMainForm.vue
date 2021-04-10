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

// const DEFAULT_SELECTION = {
//   buying: "low",
//   maint: "low",
//   doors: "5more",
//   persons: "more",
//   lug_boot: "big",
//   safety: "high",
// };

export default {
  data: () => ({
    valid: false,
    // nameRules: [(v) => !!v || "Name is required"],
    select: {
      buying: "",
      maint: "",
      doors: "",
      persons: "",
      lug_boot: "",
      safety: "",
    },
  }),
  created() {
    // this.select = DEFAULT_SELECTION;
    this.entries = attrs;
  },
  methods: {
    RequireRule(formEntry) {
      return [(v) => !!v || `${formEntry} is required`];
    },
  },
};
</script>