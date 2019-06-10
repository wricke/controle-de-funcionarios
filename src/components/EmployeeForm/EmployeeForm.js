import { mapGetters } from 'vuex';
import validateEmail from 'src/mixins/validate-email';

export default {
  mixins: [validateEmail],
  data: () => ({
    form: {
      isAdmin: true,
    },
  }),
  computed: {
    ...mapGetters({
      departments: 'getDepartments',
      users: 'getUsers',
      me: 'getUser',
    }),
  },
  props: {
    employee: {
      _id: {
        type: String,
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
      password: {
        type: String,
        default: null,
      },
      department: {
        type: String,
        default: null,
      },
      isAdmin: {
        type: Boolean,
        default: true,
      },
    },
  },
  created() {
    if (this.employee) this.form = this.employee;
  },
};
