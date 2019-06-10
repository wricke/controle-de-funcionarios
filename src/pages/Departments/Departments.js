import { mapGetters } from 'vuex';
import Random from 'meteor-random';
import DepartmentForm from 'src/components/DepartmentForm/DepartmentForm.vue';
import modalMixin from 'src/mixins/modal';

export default {
  mixins: [modalMixin],
  data: () => ({
    selectedDepartment: null,
  }),
  components: {
    DepartmentForm,
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      me: 'getUser',
      departments: 'getDepartments',
    }),
  },
  methods: {
    saveDepartment(data) {
      const { departments } = this;

      if (!('_id' in data)) {
        data._id = Random.id();

        departments.push(data);
      } else {
        const i = departments.findIndex(x => x._id === data._id);

        departments.splice(i, 1, data);
      }

      this.$store.dispatch('SET_DEPARTMENTS', departments);

      this.modal = false;
    },
    removeDepartment(_id) {
      const { departments, users } = this;

      this.$q.dialog({
        title: 'Deseja mesmo remover esse departamento?',
        message: 'Essa ação é IRREVERSÍVEL. Qualquer usuário vinculado a ele será permanentemente excluído.',
        persistent: true,
        cancel: 'Não',
        ok: 'Sim',
      }).onOk(() => {
        const i = departments.findIndex(x => x._id === _id);

        departments.splice(i, 1);

        this.$store.dispatch('SET_DEPARTMENTS', departments);

        this.$store.dispatch('SET_USERS', users.filter(x => x.department !== _id));
      });
    },
    editDepartment(department) {
      this.selectedDepartment = department;

      this.modal = true;
    },
  },
};
