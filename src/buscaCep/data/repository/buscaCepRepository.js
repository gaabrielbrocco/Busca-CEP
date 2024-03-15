const buscaCepRepository = (axios) => async (cep) => {
  try {
    const response = await axios.get(`/api/cep/v1/${cep}`, {});

    return response?.data ?? {};
  } catch (error) {
    throw error;
  }
};

export default buscaCepRepository;
