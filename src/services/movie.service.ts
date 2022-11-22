import axios from 'axios'
import { API_URL } from './config'
import { IMoveDetailed, IMovie } from '@src/types/movie'

interface IRatings {
  tconst: string
  averageRating: number
  numVotes: number
}

export const MovieService = {
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
  async getRatings(id: string): Promise<{ results: IRatings }> {
    const { data } = await axios.get(`${API_URL}/titles/${id}/ratings`)
    return data
  },
  async getMainActors(id: string): Promise<{ results: IMovie }> {
    const { data } = await axios.get(`${API_URL}/titles/${id}/main_actors`)
    return data
  },
}
