<template>
  <v-footer class="py-6 mt-6 d-flex justify-center align-center">
    <ExtLink href="https://frederickroman.com" class="text-decoration-none">
      <template #body>
        <div class="white--text text-center">
          &copy; Frederick Roman {{ curYear }}
        </div>
      </template>
    </ExtLink>
  </v-footer>
</template>

<script>
import ExtLink from "@/components/link/ExtLink";

export default {
  components: {
    ExtLink,
  },
  data: () => ({
    curYear: "",
  }),
  created() {
    this.curYear = new Date().getFullYear();
  },
};
</script>

