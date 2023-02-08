import { Polyanet } from "../../entities/polyanet.entity";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";
import { DrawXPolyanetUseCase } from "../../interfaces/use-cases/polyanet/draw-x-polyanet.usecase";
import config from '../../../config';
import { AxiosResponse } from "axios";
import { makeRequest } from "../../../util/common/delay-order-requests";

export class DrawXPolyanet implements DrawXPolyanetUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(url: string) {
        const START_DRAW_FROM = 2;
        let promises: Array<() => Promise<AxiosResponse>> = [];

        for (let index = START_DRAW_FROM; index < parseInt(config.MEGAVERSE_MATRIX_SIZE) - START_DRAW_FROM; index++) {
            promises.push(() => this.crossmintApi.post(url, { row: index, column: index }));
            promises.push(() => this.crossmintApi.post(url, { row: index, column: parseInt(config.MEGAVERSE_MATRIX_SIZE) - 1 - index }));
        }

        return makeRequest(promises, 500);
    }
}