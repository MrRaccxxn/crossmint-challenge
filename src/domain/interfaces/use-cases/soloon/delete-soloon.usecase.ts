import { Soloon } from "../../../entities/soloon.entity";

export interface DeleteSoloonUseCase {
    execute(url: string, soloon: Soloon): Promise<void>;
}