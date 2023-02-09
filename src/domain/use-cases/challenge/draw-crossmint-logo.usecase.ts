import { makeRequest } from "../../../util/common/delay-order-requests";
import { CrossMintEndPoints } from "../../../util/enums/crossmint-api.enum";
import { isColorValid, isDirectionValid } from "../../../util/validation/isDirectionValid";
import { Astral, AstralNames } from "../../@types/astral.type";
import { ComethDirectionType } from "../../entities/cometh.entity";
import { Position } from "../../entities/position.entity";
import { SoolonColorType } from "../../entities/soloon.entity";
import { DrawCrossmintLogoUseCase } from "../../interfaces/use-cases/challenge/draw-crossmint-logo.usecase";
import { ICrossmintApi } from "../../interfaces/use-cases/crossmint/crossmint-api.usecase";

export class DrawCrossmintLogo implements DrawCrossmintLogoUseCase {
    constructor(private crossmintApi: ICrossmintApi) { }

    async execute(matrixData: string[][]) {
        let promises: Array<() => Promise<void>> = [];

        for (let i: number = 0; i < matrixData.length; i++) {
            for (let j: number = 0; j < matrixData[i].length; j++) {
                const item: string = matrixData[i][j];

                if (!item || item.toLowerCase() === AstralNames.space) {
                    continue;
                }

                const position: Position = { row: i, column: j };
                let astral: Astral;

                if (item.toLowerCase() === AstralNames.polyanet) {
                    astral = { ...position };
                    promises.push(() => this.crossmintApi.post(CrossMintEndPoints.polyanets, astral));
                    continue;
                }

                const [detail, name] = item.split("_");

                if (name.toLowerCase() === AstralNames.soloon && isColorValid(detail)) {
                    astral = { color: detail.toLowerCase() as SoolonColorType, ...position };
                    promises.push(() => this.crossmintApi.post(CrossMintEndPoints.soloons, astral));
                    continue;
                }

                if (name.toLowerCase() === AstralNames.cometh && isDirectionValid(detail)) {
                    astral = { direction: detail.toLowerCase() as ComethDirectionType, ...position };
                    promises.push(() => this.crossmintApi.post(CrossMintEndPoints.comeths, astral));
                    continue;
                }
            }
        }

        await makeRequest(promises, 500);
    }
}