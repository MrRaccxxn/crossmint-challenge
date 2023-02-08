import axios, { AxiosResponse } from 'axios';
import config from '../../../config';
import { Polyanet } from '../../entities/polyanet.entity';
import { ICrossmintApi } from '../../interfaces/use-cases/crossmint/crossmint-api.usecase';

export default class CrossmintApi implements ICrossmintApi {
  baseUrl: string
  constructor(crossmintBaseUrl: string) {
    this.baseUrl = crossmintBaseUrl
  }

  async post(url: string, data: Polyanet): Promise<AxiosResponse> {
    try {
      return await axios.post(`${this.baseUrl}${url}`, {
        ...data,
        candidateId: config.CANDIDATE_ID,
      },
        {
          headers: { "content-type": "application/json" }
        }
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(url: string, data: Polyanet): Promise<AxiosResponse> {
    try {
      return await axios.delete(`${this.baseUrl}${url}`, {
        headers: { "content-type": "application/json" },
        data: {
          ...data,
          candidateId: config.CANDIDATE_ID,
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}