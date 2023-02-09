import { AxiosResponse } from 'axios';
import config from '../../../config';
import { makeRequest } from '../../../util/common/delay-order-requests';
import { Position } from '../../entities/position.entity';
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { CleanPolyanetMegaverseUseCase } from "../../interfaces/use-cases/polyanet/clean-polyanet-megaverse.usecase";

export class CleanPolyanetMegaverse implements CleanPolyanetMegaverseUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string) {
        const START_CLEAN_FROM = 2;
        let promises: Array<() => Promise<void>> = [];

        for (let index = START_CLEAN_FROM; index < parseInt(config.MEGAVERSE_MATRIX_SIZE_CHALLENGE_1) - START_CLEAN_FROM; index++) {
            promises.push(() => this.crossmintApi.delete(url, { row: index, column: index }));
            promises.push(() => this.crossmintApi.delete(url, { row: index, column: parseInt(config.MEGAVERSE_MATRIX_SIZE_CHALLENGE_1) - 1 - index }));
        }

        return makeRequest(promises, 500);
    }
}