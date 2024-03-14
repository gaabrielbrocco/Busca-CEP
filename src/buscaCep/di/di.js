import axiosInstance from "./axios";

import buscaCepRepository from "../data/repository/buscaCepRepository";
import buscaCepUseCase from "../domain/usecase/buscaCepUseCase";
import cepController from "../controller/cepController";

const instance = axiosInstance;

const buscaCepRepositoryImpl = buscaCepRepository(instance);
const buscaCepUseCaseImpl = buscaCepUseCase(buscaCepRepositoryImpl);

const cepControllerImpl = cepController(buscaCepUseCaseImpl);

export { cepControllerImpl };
