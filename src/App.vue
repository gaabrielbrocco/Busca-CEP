<template>
  <v-app theme="dark">
    <v-main>
      <v-row justify="center" class="fill-height my-5" align="center">
        <v-col cols="6" sm="6" md="6" lg="3">
          <div justify="center" align="center" class="mb-15" id="custom-title">
            Busca CEP
          </div>
          <v-form validate-on="submit lazy" @submit.prevent="submit">
            <v-text-field
              v-model="userName"
              :rules="rules"
              label="Digite o CEP"
            ></v-text-field>

            <div class="d-flex justify-end">
              <v-btn
                size="large"
                :loading="loading"
                class="mt-1"
                text="Buscar"
                type="submit"
                color="primary"
              ></v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: (vm) => ({
    loading: false,
    rules: [(value) => vm.checkApi(value)],
    timeout: null,
    userName: "",
  }),

  methods: {
    async submit(event) {
      this.loading = true;

      const results = await event;

      this.loading = false;

      alert(JSON.stringify(results, null, 2));
    },
    async checkApi(userName) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          if (!userName) return resolve("Por favor, digite um cep");
          if (userName === "johnleider")
            return resolve("User name already taken. Please try another one.");

          return resolve(true);
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
#custom-title {
  font-size: 40px;
  color: white;
}
</style>
