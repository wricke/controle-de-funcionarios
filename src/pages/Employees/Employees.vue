<template>
  <q-page class="q-gutter-lg">
    <div
      v-show="me.isAdmin"
      class="row justify-end">
      <q-btn
        label="Adicionar novo"
        @click="selectedEmployee = null, modal = true"/>
    </div>
    <div class="q-gutter-y-lg">
      <q-card
        v-for="user in users"
        :key="user._id">
        <q-card-section class="row items-center">
          <div class="col">
            <h6> {{ user.name }} </h6>
          </div>
          <div class="col-auto">
            <q-btn
              color="grey-7"
              round
              flat
              icon="more_vert"
              :disabled="!me.isAdmin && me.email !== user.email">
              <q-menu cover auto-close>
                <q-list>
                  <q-item
                    clickable
                    @click="editUser(user)">
                    <q-item-section>Editar</q-item-section>
                  </q-item>
                  <q-item
                    v-show="me.isAdmin && me._id !== user._id"
                    clickable
                    @click="removeUser(user._id)">
                    <q-item-section>Remover</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog
      v-if="modal"
      v-model="modal">
      <q-card class="card-modal">
        <q-card-section>
          <h6> {{ selectedEmployee ? 'Editar funcionário' : 'Adicionar novo funcionário' }} </h6>
          <employee-form :employee="selectedEmployee" @submit="saveUser"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script src="./Employees.js" />

<style lang="stylus" scoped>
.card-modal
  width 600px
  max-width 80vw
</style>
