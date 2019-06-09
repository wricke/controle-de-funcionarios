export default {
  methods: {
    NotifyError(message) {
      this.$q.notify({
        color: 'red-9',
        icon: 'warning',
        message,
      });
    },
    Notify(message) {
      this.$q.notify({
        color: 'positive',
        message,
      });
    },
  },
};
