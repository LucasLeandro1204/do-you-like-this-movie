<template>
  <div class="font-sans">
    <navbar />
    <router-view />
  </div>
</template>

<script>
  import router from 'core/Router';
  import Navbar from 'app/Navbar.vue';

  export default {
    router,

    components: {
      Navbar,
    },

    listen: {
      add () {
        this.total++;
      },
    },

    data () {
      return {
        total: 0,
      };
    },
  };
</script>

<style>
/**
 * This injects Tailwind's base styles, which is a combination of
 * Normalize.css and some additional base styles.
 *
 * You can see the styles here:
 * https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css
 *
 * If using `postcss-import`, you should import this line from it's own file:
 *
 * @import "./tailwind-preflight.css";
 *
 * See: https://github.com/tailwindcss/tailwindcss/issues/53#issuecomment-341413622
 */
@tailwind preflight;

/**
 * Here you would add any of your custom component classes; stuff that you'd
 * want loaded *before* the utilities so that the utilities could still
 * override them.
 *
 * Example:
 *
 * .btn { ... }
 * .form-input { ... }
 *
 * Or if using a preprocessor or `postcss-import`:
 *
 * @import "components/buttons";
 * @import "components/forms";
 */

/**
 * This injects all of Tailwind's utility classes, generated based on your
 * config file.
 *
 * If using `postcss-import`, you should import this line from it's own file:
 *
 * @import "./tailwind-utilities.css";
 *
 * See: https://github.com/tailwindcss/tailwindcss/issues/53#issuecomment-341413622
 */
@tailwind utilities;

.pin-center {
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

/**
 * Here you would add any custom utilities you need that don't come out of the
 * box with Tailwind.
 *
 * Example :
 *
 * .bg-pattern-graph-paper { ... }
 * .skew-45 { ... }
 *
 * Or if using a preprocessor or `postcss-import`:
 *
 * @import "utilities/background-patterns";
 * @import "utilities/skew-transforms";
 */
</style>
