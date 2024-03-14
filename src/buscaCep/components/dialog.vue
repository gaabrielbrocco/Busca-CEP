<template>
  <v-container>
    <v-row justify="center" class="fill-height my-5" align="center">
      <v-col cols="6" sm="6" md="6" lg="3">
        <div justify="center" align="center" class="mb-15" id="custom-title">
          Busca CEP
        </div>
        <v-form>
          <v-text-field
            v-model="controller.userName.value"
            label="Digite o CEP"
          ></v-text-field>

          <div class="d-flex justify-end">
            <v-btn
              @click="controller.mostraCep(controller.textoCep.value)"
              size="large"
              :loading="controller.loading.value"
              class="mt-1"
              text="Buscar"
              type="submit"
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
import MostraValores from "./mostraValores.vue";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>



<style scoped>
#custom-title {
  font-size: 40px;
  color: white;
}
</style>
