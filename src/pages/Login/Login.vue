<template>
  <q-page>
      <q-form
        class="q-gutter-md form-login q-mx-auto"
        ref="login"
        @submit="onSubmit">
        <q-input
          v-model="email"
          label="E-mail"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || 'Por favor, digite seu e-mail.',
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

<style lang="stylus">
.form-login
  max-width 600px
</style>
