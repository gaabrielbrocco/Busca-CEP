const buscaCepRepository = (axios) => async (cep) => {
  try {
    const response = await axios.get(`/ws/${cep}/json`, {});

    return response?.data ?? {};
  } catch (error) {
    throw error;
  }
};

export default buscaCepRepository;
