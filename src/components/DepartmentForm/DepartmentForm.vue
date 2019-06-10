<template>
  <q-form
    @reset="form = {}"
    @submit="$emit('submit', form)">
    <q-input
      v-model="form.name"
      label="Nome"
      lazy-rules
      :rules="[
        val => val && val.length || 'O nome é obrigatório.',
        val => !form._id
          ? !departments.find(x => x.name === val) || 'Já tem um departamento com esse nome :/'
          : null,
      ]"/>
    <q-input
      v-model="form.code"
      label="Código"
      lazy-rules
      :rules="[
        val => val && val.length || 'O código é obrigatório.',
        val => !/[^\w^\d\-]/g.test(val)
          || 'Não são permitidos caracteres especiais (exceto hífen) nem espaços.',
      ]"/>
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

<script src="./DepartmentForm.js" />
