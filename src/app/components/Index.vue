<template>
  <article class="min-h-screen flex flex-col px-12 pt-16">
    <movie background-url="http://lorempixel.com/output/sports-q-c-640-480-2.jpg"></movie>
    <div class="flex mx-auto mt-auto w-64">
      <reaction type="like"/>
      <reaction class="ml-auto" type="dislike"/>
    </div>
    <button class="rounded-full mt-8 mb-6 py-1 px-4 border border-solid self-center border-grey-light text-grey-light">
      SKIP
    </button>
  </article>
</template>

<script>
  import Movie from 'app/Movie.vue';
  import Reaction from 'app/Reaction.vue';

  export default {
    components: {
      Movie,
      Reaction,
    },
  };
</script>
