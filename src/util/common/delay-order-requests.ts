import { AxiosResponse } from "axios";

export const makeRequest = async (promises: Array<() => Promise<AxiosResponse>>, delay = 2000): Promise<void> => {
    for (const promise of promises) {
        try {
            await promise();
            await new Promise(
                resolve => setTimeout(resolve, delay));
        } catch (err) {
            throw Error();
        }
    }
};