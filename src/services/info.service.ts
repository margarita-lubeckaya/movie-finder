import axios from 'axios'
import { API_URL } from './config'

interface IMovie {
  id: string
  primaryImage?: {
    id: string
    width: number
    height: number
    url: string
    caption: {
      plainText: string
    }
  }
  titleType: {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
  }
  titleText: {
    text: string
  }
  releaseDate: {
    day: number
    month: number
    year: number
  }
}

export const InfoService = {
  async getUpcoming(): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/x/upcoming`, {
      params: {
        titleType: 'movie',
        limit: '4',
        startYear: new Date().getFullYear(),
      },
    })
    console.log(data)
    return data
  },
  async getGenres() {
    return null
  },
}
