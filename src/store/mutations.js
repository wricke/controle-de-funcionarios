import Vue from 'vue';

export function SAVE_USERS(state, users) {
  Vue.set(state, 'users', users);
}

export function SAVE_DEPARTMENTS(state, departments) {
  Vue.set(state, 'departments', departments);
}
