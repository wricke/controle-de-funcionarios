
import { mapGetters } from 'vuex';
import notify from 'src/mixins/notify';
import validateEmail from 'src/mixins/validate-email';

export default {
  mixins: [notify, validateEmail],
  data: () => ({
    email: null,
    password: null,
  }),
  computed: {
    ...mapGetters({
      users: 'getUsers',
    }),
  },
  methods: {
    onSubmit() {
      const user = this.users.find(({ email }) => email === this.email);

      const otherUser = this.users.find(({ password }) => password === this.password);

      if (!user && !otherUser) return this.notifyError('Usuário (e senha) inválidos!');

      if (this.password === (user || {}).password) {
        this.$store.dispatch('SET_USER', user);
        return this.$router.push('employees');
      }

      const message = otherUser ? `Essa não é a senha do e-mail digitado. Você quis dizer "${otherUser.email}"?` : 'Senha inválida.';

      return this.notifyError(message);
    },
  },
};
