import { Polyanet } from "../../entities/polyanet.entity";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { DeletePolyanetUseCase } from "../../interfaces/use-cases/polyanet/delete-polyanet.usecase";


export class DeletePolyanet implements DeletePolyanetUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string, polyanet: Polyanet) {
        await this.crossmintApi.delete(url, polyanet)
    }
}