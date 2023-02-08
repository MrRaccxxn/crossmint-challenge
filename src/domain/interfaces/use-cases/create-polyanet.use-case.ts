import { Polyanet } from "../../entities/polyanet.entity";

export interface CreatePolyanetUseCase {
    execute(polyanet: Polyanet): Promise<boolean>;
}