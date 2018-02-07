<template>
  <button :class="[background, size, 'rounded-full relative']">
    <i :class="['fa absolute pin-center text-white', icon]"></i>
  </button>
</template>

<script>
  const types = {
    like: {
      icon: 'fa-heart-o',
      background: 'bg-green-light',
    },
    dislike: {
      icon: 'fa-trash-o',
      background: 'bg-red-lighter',
    },
  };

  export default {
    props: {
      type: {
        type: String,
        validator (val) {
          return Object.keys(types).indexOf(val) > -1;
        },
      },

      small: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      background () {
        return types[this.type].background;
      },

      size () {
        return this.small ? 'w-8 h-8 text-base' : 'w-16 h-16 text-3xl';
      },

      icon () {
        return types[this.type].icon;
      },
    },
  };
</script>
