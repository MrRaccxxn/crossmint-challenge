import { Polyanet } from "../../../entities/polyanet.entity";

export interface CreatePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<void>;
}