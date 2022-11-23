import axios from 'axios'
import { API_URL } from './config'
import { IMovie } from '@src/types/movie'

export const InfoService = {
  async getUpcoming(): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/x/upcoming`, {
      params: {
        titleType: 'movie',
        limit: '4',
        sort: 'year.incr',
        startYear: new Date().getFullYear(),
      },
    })
    console.log(data)
    return data
  },
  async getPopular(): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/`, {
      params: {
        titleType: 'movie',
        list: 'most_pop_movies',
        limit: '4',
      },
    })
    console.log(data)
    return data
  },
  async getGenres() {
    return null
  },
}
