import { Cometh } from "../../entities/cometh.entity";
import { GoalMapUseCase } from "../../interfaces/use-cases/challenge/goal-map.usecase";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";

export class GoalMap implements GoalMapUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string) {
        return await this.crossmintApi.get(url)
    }
}