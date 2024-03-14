const buscaCepUseCase = (repository) => async (cep) => {
  return await repository(cep);
};

export default buscaCepUseCase;
