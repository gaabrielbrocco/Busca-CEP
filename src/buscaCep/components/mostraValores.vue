<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="controller.modelCep.value.city"
          label="Cidade"
          hide-details
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="controller.modelCep.value.state"
          label="Estado"
          hide-details
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="controller.modelCep.value.cep"
          label="CEP"
          hide-details
          required
        ></v-text-field>
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
