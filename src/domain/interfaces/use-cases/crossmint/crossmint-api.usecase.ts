import { Polyanet } from "../../../entities/polyanet.entity";

export interface ICrossmintApi {
    post(url: string, data: Polyanet): Promise<any>;
    delete(url: string, data: Polyanet): Promise<any>;
}