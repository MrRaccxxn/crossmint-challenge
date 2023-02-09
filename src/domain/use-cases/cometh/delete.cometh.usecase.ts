import { Cometh } from "../../entities/cometh.entity";
import { DeleteComethUseCase } from "../../interfaces/use-cases/cometh/delete-cometh.usecase";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";

export class DeleteCometh implements DeleteComethUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, cometh: Cometh) {
        return await this.crossmintApi.delete(url, cometh)
    }
}