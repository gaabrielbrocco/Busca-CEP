<template>
  <v-container>
    <v-row class="d-flex justify-center mt-10" cols="6" sm="7" md="6" lg="3">
      <v-col>
        <v-col >
          <v-title class="d-flex justify-center mb-3 text-h5">Cidade</v-title>
          <v-text-field
            v-model="controller.modelCep.value.city"
            hide-details
            disabled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h5">Estado</v-title>
          <v-text-field
            v-model="controller.modelCep.value.state"
            hide-details
            disabled
          ></v-text-field>
        </v-col>

        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h5">CEP</v-title>
          <v-text-field
            v-model="controller.modelCep.value.cep"
            hide-details
            disabled
          ></v-text-field>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
