<template>
  <section :class="['card transition', { opened }]" @click.prevent="opened = !opened">
    <div class="bg-center bg-cover transition" :style="{ backgroundImage }">
      <div class="w-full transition" :style="{ background: gradient }"></div>
    </div>
    <div class="p-6 pt-0 flex flex-col content transition">
      <div class="h-32 flex items-end">
        <div class="flex-1">
          <h1 class="flex-1 text-2xl pr-4">THE MOVIE NAME CAN BE LONG AS FUCK</h1>
          <p class="text-xs mt-3 font-semibold">1999 <span class="ml-2">Drama</span></p>
        </div>
        <reaction type="like" small />
      </div>
      <p class="text-sm mt-3 leading-normal description overflow-hidden transition" :style="{ height: description }" ref="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer viverra posuere leo, rutrum gravida metus dignissim id.
        Nullam mattis nunc ante, ut malesuada dui varius non.
        Fusce luctus justo sit amet euismod tincidunt.
        Morbi congue facilisis turpis.
        Cras bibendum ut nisl sit amet commodo.
        Duis nec commodo augue.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Pellentesque vehicula sollicitudin est sed luctus.
        Morbi orci eros, malesuada eu turpis id, rutrum fermentum lectus.
        Quisque finibus, lectus eu porttitor dictum, diam turpis eleifend velit, id pharetra mi diam ac urna.</p>
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
      backgroundImage () {
        return 'url(' + this.backgroundUrl + ')';
      },

      gradient () {
        return 'linear-gradient(to top, rgb(221, 94, 137), rgba(255, 255, 255, .5))';
      },

      description () {
        return this.opened ? this.$refs.description.scrollHeight + 'px': '0px';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    color: #fff;
    transform: scale(.7);

    .content {
      margin-top: -10rem;
    }

    .bg-center {
      border-radius: 1.5rem;

      div {
        height: 30rem;
        border-radius: 1.5rem;
      }
    }

    &.opened {
      color: #333;
      transform: scale(1);

      .bg-center {
        border-radius: 0px;

        div {
          height: 24rem;
          border-radius: 0px;
        }
      }

      .content {
        margin-top: 0;
      }
    }
  }

  .transition {
    transition: 1s, color .6s, height .6s;
  }
</style>
