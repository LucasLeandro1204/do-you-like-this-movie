<template>
  <section @click.prevent="opened = !opened">
    <div class="w-full max-w-xs mx-auto h-80 relative">
      <div class="bg-center bg-cover rounded-lg absolute pin" :style="{ backgroundImage }">
        <div class="w-full h-full rounded-lg" :style="{ background: gradient }"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import Reaction from 'app/Reaction.vue';

  export default {
    components: {
      Reaction,
    },

    props: {
      backgroundUrl: {
        type: String,
      },
    },

    data () {
      return {
        opened: false,
      };
    },

    // getBoundingClientRect

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

<style lang="scss" scoped>
</style>
