<template>
  <q-page class="page-login">
    <q-form
      class="q-gutter-md form-login shadow-1"
      @submit="onSubmit"
      autofocus>
      <q-input
        v-model="email"
        label="E-mail"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Por favor, digite seu e-mail.',
          val => isEmail(val) || 'Digite um e-mail válido.',
        ]"/>
      <q-input
        v-model="password"
        label="Senha"
        type="password"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Por favor, digite sua senha.',
        ]"/>
      <div class="flex justify-end">
        <q-btn
          type="submit"
          label="Entrar"
          color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<script src="./Login.js" />

<style lang="stylus" src="./Login.styl"/>
