import { AxiosResponse } from "axios";

export interface GoalMapUseCase {
    execute(url: String): Promise<AxiosResponse>;
}