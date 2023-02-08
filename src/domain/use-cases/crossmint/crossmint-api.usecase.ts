import axios from 'axios';
import config from '../../../config';
import { Polyanet } from '../../entities/polyanet.entity';
import { ICrossmintApi } from '../../interfaces/use-cases/crossmint/crossmint-api.usecase';

export default class CrossmintApi implements ICrossmintApi {
  async post(url: string, data: Polyanet): Promise<any> {
    try {
      const response = await axios.post(`${config.CROSSMINT_API_URL_BASE}${url}`,
        data, {
        params: {
          candidateId: config.CANDIDATE_ID
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(url: string, data: Polyanet): Promise<any> {
    try {
      const response = await axios.delete(`${config.CROSSMINT_API_URL_BASE}${url}`, {
        data,
        params: {
          candidateId: config.CANDIDATE_ID
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}