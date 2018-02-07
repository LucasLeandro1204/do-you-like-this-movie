<template>
  <section>
    <div class="w-full h-64" :style="{ background }"></div>
  </section>
</template>

<script>
  export default {
    props: {
      backgroundUrl: {
        type: String,
        default: 'http://lorempixel.com/output/sports-q-c-640-480-2.jpg',
      },
    },

    computed: {
      background () {
        return 'url(' + this.backgroundUrl + ')';
      },
    },
  };
</script>
