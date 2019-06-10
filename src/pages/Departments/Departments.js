import { mapGetters } from 'vuex';
import Random from 'meteor-random';
import DepartmentForm from 'src/components/DepartmentForm/DepartmentForm.vue';
import modalMixin from 'src/mixins/modal';
import notify from 'src/mixins/notify';

export default {
  mixins: [modalMixin, notify],
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
    /**
     * @description Salvar departamento.
     * @param {Object} data Dados do departamento.
     */
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

      this.$store.dispatch('SET_MODAL', false);
    },
    /**
     * @description Apagar departamento.
     * @param {String} _id Identificação do departamento.
     */
    removeDepartment(_id) {
      const { departments, users } = this;

      this.$q.dialog({
        title: 'Deseja mesmo remover esse departamento?',
        message: 'Essa ação é IRREVERSÍVEL. Qualquer usuário vinculado a ele será permanentemente excluído.',
        persistent: true,
        cancel: 'Não',
        ok: 'Sim',
      }).onOk(() => {
        if (_id !== 'xo8fgDLGZ4ykAzxQk') {
          const i = departments.findIndex(x => x._id === _id);

          departments.splice(i, 1);

          this.$store.dispatch('SET_DEPARTMENTS', departments);

          this.$store.dispatch('SET_USERS', users.filter(x => x.department !== _id));
        } else {
          this.notifyError('Ei, você não pode fazer isso. Tá ligado que a gente não vive sem tecnologia, né?');
        }
      });
    },
    /**
     * @description Passa o departamento dentro do "v-for" para uma variável global.
     * @param {Object} department Departamento selecionado.
     */
    editDepartment(department) {
      this.selectedDepartment = department;

      this.$store.dispatch('SET_MODAL', true);
    },
  },
};
