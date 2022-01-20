<template>
  <a :href="href" target="_blank" rel="noopener">
    <slot name="body"></slot>
  </a>
</template>

<script>
export default {

  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>