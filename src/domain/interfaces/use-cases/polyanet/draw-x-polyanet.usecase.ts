import { AxiosResponse } from "axios";

export interface DrawXPolyanetUseCase {
    execute(url: string): Promise<void>;
}