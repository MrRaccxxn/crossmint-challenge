import { Soloon } from "../../../entities/soloon.entity";

export interface CreateSoloonUseCase {
    execute(url: string, soloon: Soloon): Promise<void>;
}