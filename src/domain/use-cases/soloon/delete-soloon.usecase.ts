import { Soloon } from "../../entities/soloon.entity";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { DeleteSoloonUseCase } from "../../interfaces/use-cases/soloon/delete-soloon.usecase";

export class DeleteSoloon implements DeleteSoloonUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, soloon: Soloon) {
        return await this.crossmintApi.delete(url, soloon)
    }
}