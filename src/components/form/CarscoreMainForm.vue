<template>
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
          :items="entry.items"
          filled
          :label="entry.label"
          outlined
        ></v-select>
      </v-col>
      <pre> {{ select }}</pre>
    </v-row>
  </v-container>
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
};
</script>