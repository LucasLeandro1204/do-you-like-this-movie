<template>
  <button @click.prevent="toggle">
    <svg class="fill-current text-grey-dark" width="32" height="24" viewBox="0 0 32 24" preserveAspectRatio="xMidYMid meet">
      <rect width="32" height="4" rx="5" ry="5" />
      <rect y="8" width="24" height="4" rx="5" ry="5" />
      <rect y="16" width="16" height="4" rx="5" ry="5" />
    </svg>
  </button>
</template>

<script>
  export default {
    props: {
      value: Boolean,
    },

    methods: {
      toggle () {
        const open = ! this.value;

        this.$emit('toggle', open);
        this.$emit('input', open);
      },
    },
  };
</script>
