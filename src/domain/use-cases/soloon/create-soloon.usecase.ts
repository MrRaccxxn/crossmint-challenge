import { Soloon } from "../../entities/soloon.entity";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { CreateSoloonUseCase } from "../../interfaces/use-cases/soloon/create-soloon.usecase";

export class CreateSoloon implements CreateSoloonUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, soloon: Soloon) {
        return await this.crossmintApi.post(url, soloon)
    }
}