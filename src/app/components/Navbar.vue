<template>
  <header>
    <div class="z-50 p-6 fixed">
      <button-nav v-model="open"/>
    </div>

    <fade>
      <nav class="pin fixed flex justify-center items-center" v-show="open">
        <ul class="list-reset font-semibold text-xl text-center w-64">
          <li class="my-4 bg-grey-darkest">
            <router-link class="block py-3 no-underline text-white" exact-active-class="bg-blue" :to="{ name: 'index' }">DISCOVER</router-link>
          </li>
          <li class="my-4 bg-grey-darkest">
            <router-link class="block py-3 no-underline text-white" exact-active-class="bg-green" to="/">LIKED</router-link>
          </li>
          <li class="my-4 bg-grey-darkest">
            <router-link class="block py-3 no-underline text-white" exact-active-class="bg-red" to="/">DISLIKED</router-link>
          </li>
        </ul>
      </nav>
    </fade>
  </header>
</template>

<script>
  import ButtonNav from 'app/nav/Button.vue';
  import Fade from 'app/transitions/Fade.vue';

  export default {
    components: {
      Fade,
      ButtonNav,
    },

    data () {
      return {
        open: false,
      };
    },
  };
</script>

<style scoped>
  nav {
    background: rgba(255, 255, 255, .7);
  }
</style>
