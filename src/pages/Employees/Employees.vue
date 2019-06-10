<template>
  <q-page>
    <h4 class="q-pb-md text-weight-medium text-blue-10">Funcionários</h4>
    <div class="q-gutter-y-lg">
      <q-card
        v-for="user in users"
        :key="user._id">
        <q-card-section class="row items-center">
          <div class="col">
            <h6 class="text-blue-10"> {{ user.name }} </h6>
            <p class="text-grey-6">
              {{ departments.find(({ _id }) => _id === user.department).name }}
            </p>
          </div>
          <div class="col-auto">
            <q-btn
              color="amber-10"
              round
              flat
              icon="more_vert"
              :disabled="user._id === 'GvLKrZybfz9HKFetT' && me._id !== 'GvLKrZybfz9HKFetT'
              || (!me.isAdmin && me._id !== user._id)">
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
      v-if="modalValue"
      v-model="modalValue"
      @input="val => !val ? selectedEmployee = null : null">
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
