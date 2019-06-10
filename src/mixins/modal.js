import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      modal: 'getModal',
    }),
    modalValue: {
      get() {
        return this.modal;
      },
      set(value) {
        this.$store.dispatch('SET_MODAL', value);
      },
    },
  },
};
