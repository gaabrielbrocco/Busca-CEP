import Cep from "../domain/model/cep";
import { ref } from "vue";

const cepController = (buscaCepUseCase) => () => {
  const loading = ref(false);
  const modelCep = ref(new Cep({}));
  const textoCep = ref("");

  const mostraCep = async () => {
    try {
      if (!textoCep.value) {
        alert("Por favor, digite um cep");
        return;
      }
      loading.value = true;
      modelCep.value = await buscaCepUseCase(textoCep.value);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    modelCep,
    textoCep,
    mostraCep,
  };
};
export default cepController;
