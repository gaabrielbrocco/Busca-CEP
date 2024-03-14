import Cep from "../domain/model/cep";
import { ref } from "vue";

const cepController = (buscaCepUseCase) => () => {
  const userName = ref("");
  const loading = ref(false);
  const modelCep = ref(new Cep({}));
  const textoCep = ref("");

  const mostraCep = async (cep) => {
    try {
      if (!cep) {
        alert("Por favor, digite um cep");
        return;
      }
      loading.value = true;
      modelCep.value = await buscaCepUseCase(cep);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    userName,
    loading,
    modelCep,
    textoCep,
    mostraCep,
  };
};
export default cepController;
