import { mapGetters } from 'vuex';
import EmployeeForm from 'src/components/EmployeeForm/EmployeeForm.vue';
import Random from 'meteor-random';

export default {
  data: () => ({
    modal: false,
    selectedEmployee: null,
  }),
  components: {
    EmployeeForm,
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      me: 'getUser',
      departments: 'getDepartments',
    }),
  },
  methods: {
    saveUser(data) {
      const { users } = this;

      data.department = data.department.value;

      if (!('_id' in data)) {
        data._id = Random.id();

        users.push(data);
      } else {
        const i = users.findIndex(x => x._id === data._id);

        users.splice(i, 1, data);
      }

      this.$store.dispatch('SET_USERS', users);

      if (this.me._id === data._id) {
        this.$store.dispatch('SET_USER', data);
      }
    },
    removeUser(_id) {
      const { users } = this;

      const i = users.findIndex(x => x._id === _id);

      users.splice(i, 1);

      this.$store.dispatch('SET_USERS', users);
    },
    editUser(employee) {
      if (typeof employee.department === 'string') {
        const department = this.departments.find(x => x._id === employee.department);

        employee.department = {
          label: department.name,
          value: department._id,
        };
      }

      this.selectedEmployee = employee;

      this.modal = true;
    },
  },
};
