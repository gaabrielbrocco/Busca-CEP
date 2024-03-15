const buscaCepUseCase = (repository) => async (cep) => {
  try {
    return await repository(cep);
  } catch (error) {
    throw error;
  }
};

export default buscaCepUseCase;
