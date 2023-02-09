import { Cometh } from "../../../entities/cometh.entity";

export interface DeleteComethUseCase {
    execute(url: string, cometh: Cometh): Promise<void>;
}