export function SET_USERS(context, users) {
  context.commit('SAVE_USERS', users);
}

export function SET_DEPARTMENTS(context, departments) {
  context.commit('SAVE_DEPARTMENTS', departments);
}

export function SET_USER(context, user) {
  context.commit('SAVE_USER', user);
}

export function SET_MODAL(context, modal) {
  context.commit('SAVE_MODAL', modal);
}
