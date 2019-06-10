<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header v-show="$route.name !== 'login'">
        <div class="button-menu flex items-center justify-between">
          <q-btn
            v-show="me.isAdmin"
            class="bg-amber-8"
            text-color="white"
            label="Adicionar novo"
            flat
          @click="$store.dispatch('SET_MODAL', true)"/>
          <q-btn
            color="amber-8"
            round
            dense
            icon="menu"
            outline/>
        </div>
      </q-header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="./MyLayout.js"/>
