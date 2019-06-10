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
    department: {
      _id: {
        type: String,
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      code: {
        type: String,
        default: null,
      },
    },
  },
  created() {
    if (this.department) this.form = JSON.parse(JSON.stringify(this.department));
  },
};
