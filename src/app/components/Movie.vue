<template>
  <section @click.prevent="opened = !opened">
    <div class="w-full max-w-xs mx-auto h-80 relative">
      <div class="bg-center bg-cover rounded-lg absolute transition" :style="bannerStyle" ref="banner">
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

    computed: {
      bannerStyle () {
        const [top, left, right, bottom] = this.position;

        return {
          'background-image': 'url(' + this.backgroundUrl + ')',
          top,
          left,
          right,
          bottom,
        };
      },

      position () {
        if (! this.opened) {
          return [0, 0, 0, 0];
        }

        const boundings = this.$refs.banner.getBoundingClientRect();

        return [
          boundings.top * -1 + 'px',
          boundings.left * -1 + 'px',
          boundings.width - boundings.right + 'px',
          '-64px',
        ];
      },

      gradient () {
        return 'linear-gradient(to top, rgb(221, 94, 137), rgba(255, 255, 255, .5))';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .transition {
    transition: .3s;
  }
</style>
