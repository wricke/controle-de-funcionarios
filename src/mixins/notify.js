export default {
  methods: {
    /**
     * @description Exibe um "toast" de erro.
     * @param {String} message Mensagem a ser exibida.
     */
    notifyError(message) {
      this.$q.notify({
        color: 'red-9',
        icon: 'warning',
        message,
      });
    },
    /**
     * @description Exibe um "toast".
     * @param {String} message Mensagem a ser exibida.
     */
    notify(message) {
      this.$q.notify({
        color: 'positive',
        message,
      });
    },
  },
};
