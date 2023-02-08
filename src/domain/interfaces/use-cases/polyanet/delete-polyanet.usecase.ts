import { AxiosResponse } from "axios";
import { Polyanet } from "../../../entities/polyanet.entity";

export interface DeletePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<AxiosResponse>;
}