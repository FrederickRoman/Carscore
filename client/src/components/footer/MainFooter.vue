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
/**
 * Shows App footer with copyright notice and year.
 */
import ExtLink from "@/components/link/ExtLink";

const DEFAULT_YEAR = 2022;
export default {
  components: { ExtLink },
  data: () => ({ curYear: DEFAULT_YEAR }),
  created() {
    this.curYear = new Date().getFullYear();
  },
};
</script>

