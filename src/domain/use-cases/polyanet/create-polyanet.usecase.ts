import { Polyanet } from "../../entities/polyanet.entity";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { CreatePolyanetUseCase } from "../../interfaces/use-cases/polyanet/create-polyanet.usecase";

export class CreatePolyanet implements CreatePolyanetUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, polyanet: Polyanet) {
        await this.crossmintApi.post(url, polyanet)
    }
}