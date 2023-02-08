import { Polyanet } from "../../../entities/polyanet.entity";

export interface ICrossmintApi {
    post(url: string, data: Polyanet): Promise<void>;
    delete(url: string, data: Polyanet): Promise<void>;
}