
import config from '../../../config';
import { makeRequest } from "../../../util/common/delay-order-requests";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { DrawXPolyanetUseCase } from "../../interfaces/use-cases/polyanet/draw-x-polyanet.usecase";

export class DrawXPolyanet implements DrawXPolyanetUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string) {
        const START_DRAW_FROM = 2;
        let promises: Array<() => Promise<void>> = [];

        for (let index = START_DRAW_FROM; index < parseInt(config.MEGAVERSE_MATRIX_SIZE_CHALLENGE_1) - START_DRAW_FROM; index++) {
            promises.push(() => this.crossmintApi.post(url, { row: index, column: index }));
            promises.push(() => this.crossmintApi.post(url, { row: index, column: parseInt(config.MEGAVERSE_MATRIX_SIZE_CHALLENGE_1) - 1 - index }));
        }

        await makeRequest(promises, 500);
    }
}