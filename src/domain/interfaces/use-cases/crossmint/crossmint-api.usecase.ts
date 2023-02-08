import { AxiosResponse } from "axios";
import { Polyanet } from "../../../entities/polyanet.entity";

export interface ICrossmintApi {
    post(url: string, data: Polyanet): Promise<AxiosResponse>;
    delete(url: string, data: Polyanet): Promise<AxiosResponse>;
}