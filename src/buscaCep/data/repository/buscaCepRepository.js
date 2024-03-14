const buscaCepRepository = (axios) => async (cep) => {
  const response = await axios.get(`/cep/v1/${cep}`, {});

  return response?.data ?? [];
};

export default buscaCepRepository;
