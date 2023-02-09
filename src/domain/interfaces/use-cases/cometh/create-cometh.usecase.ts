import { Cometh } from "../../../entities/cometh.entity";

export interface CreateComethUseCase {
    execute(url: string, cometh: Cometh): Promise<void>;
}