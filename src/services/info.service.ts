import axios from 'axios'

import { IMovie, ListVariants } from 'types/movie'

import { API_URL } from './config'

const InfoService = {
  async getUpcoming(): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/x/upcoming`, {
      params: {
        titleType: 'movie',
        limit: '4',
        sort: 'year.incr',
        startYear: new Date().getFullYear(),
      },
    })
    return data
  },
  async getPopular(): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/`, {
      params: {
        titleType: 'movie',
        list: ListVariants.PopMovies,
        limit: '4',
      },
    })
    return data
  },
  async getGenres(): Promise<{ results: string[] }> {
    const { data } = await axios.get(`${API_URL}/titles/utils/genres`)
    return data
  },
  async getTitleTypes(): Promise<{ results: string[] }> {
    const { data } = await axios.get(`${API_URL}/titles/utils/titleTypes`)
    return data
  },
}

export default InfoService
