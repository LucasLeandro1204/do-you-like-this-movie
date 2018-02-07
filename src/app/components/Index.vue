<template>
  <section>
    <div class="bg-center bg-cover" :style="{ backgroundImage }">
      <div class="w-full h-64" :style="{ background: gradient }"></div>
    </div>

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
      backgroundImage () {
        return 'url(' + this.backgroundUrl + ')';
      },

      gradient () {
        return 'linear-gradient(to top, rgb(221, 94, 137), rgba(255, 255, 255, .5))';
      },
    },
  };
</script>
