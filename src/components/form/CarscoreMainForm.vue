<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>