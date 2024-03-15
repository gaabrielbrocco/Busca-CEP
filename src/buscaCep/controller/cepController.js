import Cep from "../domain/model/cep";
import { ref } from "vue";

const cepController = (buscaCepUseCase) => () => {
  const loading = ref(false);
  const modelCep = ref(new Cep({}));
  const textoCep = ref("");

  const mostraCep = async () => {
    try {
      const validaCep = /^[0-9]{5}-?[0-9]{3}$/;

      if (!textoCep.value) {
        alert("Por favor, digite um cep");
      } 

      if (!validaCep.test(textoCep.value)) {
        alert("Por favor, digite um CEP válido");
        return;
      }

      loading.value = true;
      modelCep.value = await buscaCepUseCase(textoCep.value);
      textoCep.value = null
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
