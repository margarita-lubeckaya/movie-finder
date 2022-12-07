import axios from 'axios'

import { IMoveDetailed, IMovie } from 'types/movie'

import { API_URL } from './config'

const MovieService = {
  async getDetailed(id: string): Promise<{ results: IMoveDetailed }> {
    const { data } = await axios.get(`${API_URL}/titles/${id}`, {
      params: { info: 'base_info' },
    })
    return data
  },
  async getCrew(id: string): Promise<{ results: IMovie }> {
    const { data } = await axios.get(`${API_URL}/titles/${id}/crew`)
    return data
  },
  async getMainActors(id: string): Promise<{ results: IMovie }> {
    const { data } = await axios.get(`${API_URL}/titles/${id}/main_actors`)
    return data
  },
}

export default MovieService
