<template>
  <q-form
    @reset="form = {}"
    @submit="$emit('submit', form)"
    ref="form">
    <q-input
      autofocus
      v-model="form.name"
      label="Nome"
      @keyup.enter="$refs.submitButton.click()"
      lazy-rules
      :rules="[
        val => val && val.length || 'O nome é obrigatório.',
        val => !form._id
          ? !users.find(x => x.name === val) || 'Já tem um funcionário com esse nome :/'
          : null,
      ]"/>
    <q-input
      v-model="form.email"
      label="Email"
      @keyup.enter="$refs.submitButton.click()"
      lazy-rules
      :rules="[
        val => val && val.length || 'O e-mail é obrigatório.',
        val => isEmail(val) || 'Digite um e-mail válido.',
        val => !form._id ?
          !users.find(x => x.email === val) || 'Esse e-mail já foi cadastrado :('
          : null,
      ]"/>
    <q-input
      v-model="form.password"
      label="Senha"
      @keyup.enter="$refs.submitButton.click()"
      type="password"
      lazy-rules
      :rules="[
        val => val && val.length || 'A senha é obrigatória.',
      ]"/>
    <q-select
      v-model="form.department"
      label="Departamento"
      :options="departments.map(({ _id, name }) => ({
        value: _id,
        label: name,
      }))"
      lazy-rules
      :rules="[
        val => val
          && typeof val === 'object'
          && Object.keys(val).includes('value')
          && Object.keys(val).includes('label') || 'O departamento é obrigatório.'
      ]"/>
    <q-toggle
      v-model="form.isAdmin"
      label="Administrador"
      :disable="!me.isAdmin"/>
    <div class="flex justify-end q-gutter-x-md">
      <q-btn
        color="red"
        outline
        label="Cancelar"
        v-close-popup
        type="reset"/>
      <q-btn
        color="positive"
        label="Salvar"
        type="submit"/>
    </div>
  </q-form>
</template>

<script src="./EmployeeForm.js" />
