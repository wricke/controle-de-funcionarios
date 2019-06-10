<template>
  <q-page class="q-gutter-lg">
    <div class="q-gutter-y-lg">
      <q-card
        v-for="department in departments"
        :key="department._id">
        <q-card-section class="row items-center">
          <div class="col">
            <h6> {{ department.name }} </h6>
            <p> {{ department.code }} </p>
          </div>
          <div class="col-auto">
            <q-btn
              color="grey-7"
              round
              flat
              icon="more_vert"
              :disabled="!me.isAdmin && me.department !== department._id">
              <q-menu cover auto-close>
                <q-list>
                  <q-item
                    clickable
                    @click="editDepartment(department)">
                    <q-item-section>Editar</q-item-section>
                  </q-item>
                  <q-item
                    v-show="me.isAdmin"
                    clickable
                    @click="removeDepartment(department._id)">
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
      v-model="modalValue">
      <q-card class="card-modal">
        <q-card-section>
          <h6>
            {{ selectedDepartment? 'Editar departamento' : 'Adicionar novo departamento ' }}
          </h6>
          <department-form :department="selectedDepartment" @submit="saveDepartment"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script src="./Departments.js" />
