import Vue from 'vue';

class Bus {
  constructor (vue) {
    this.vue = vue;
  }

  on (event, callback) {
    this.vue.$on(event, callback);
  }

  send (event, data) {
    this.vue.$emit(event, data);
  }

  off (event, callback) {
    this.vue.$off(event, callback);
  }
};

const bus = new Bus(new Vue());

Vue.use({
  install (vue) {
    Object.defineProperty(vue.prototype, '$bus', {
      get () {
        return bus.send.bind(bus);
      }
    });

    vue.mixin({
      created () {
        const listen = this.$options.listen;

        if (typeof listen != 'object') {
          return;
        }

        Object.keys(listen)
          .forEach(event => bus.on(event, listen[event].bind(this)));
      },

      destroyed () {
        const listen = this.$options.listen;

        Object.keys(listen)
          .forEach(event => bus.off(event, listen[event].bind(this)));
      },
    });
  },
});

export default bus;
