import { Cometh } from "../../entities/cometh.entity";
import { CreateComethUseCase } from "../../interfaces/use-cases/cometh/create-cometh.usecase";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";

export class CreateCometh implements CreateComethUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, cometh: Cometh) {
        return await this.crossmintApi.post(url, cometh)
    }
}