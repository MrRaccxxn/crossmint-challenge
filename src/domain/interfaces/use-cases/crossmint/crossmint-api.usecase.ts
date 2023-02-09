import { AxiosResponse } from "axios";
import { Polyanet } from "../../../entities/polyanet.entity";

export interface ICrossmintApi {
    get(url: string): Promise<AxiosResponse>;
    post(url: string, data: Polyanet): Promise<void>;
    delete(url: string, data: Polyanet): Promise<void>;
}