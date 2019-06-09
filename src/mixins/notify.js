export default {
  methods: {
    notifyError(message) {
      this.$q.notify({
        color: 'red-9',
        icon: 'warning',
        message,
      });
    },
    notify(message) {
      this.$q.notify({
        color: 'positive',
        message,
      });
    },
  },
};
