<template>
  <v-container>
    <v-row justify="center" class="fill-height my-15" align="center">
      <v-col cols="12" sm="7" md="6" lg="3">
        <div justify="center" align="center" class="mb-10 text-h3" >
          Busca CEP
        </div>
        <v-form @submit.prevent="controller.mostraCep()">
          <v-text-field
            v-model="controller.textoCep.value"
            label="Digite o CEP"
            v-maska:[cep]
            clearable
          ></v-text-field>
          
          <div class="d-flex justify-center">
            <v-btn
              @click="controller.mostraCep()"
              size="large"
              :loading="controller.loading.value" 
              class=""
              text="Buscar"
              color="primary"
            ></v-btn>
          </div>
        </v-form>
        <mostra-valores :controller="controller" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
const cep = {
  mask: "#####-###"
}

import MostraValores from "./mostraValores.vue";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>



<style scoped></style>
