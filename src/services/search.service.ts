import axios from 'axios'
import { API_URL } from './config'
import { IMovie, TFilterParams } from '@src/types/movie'

const SearchService = {
  async getFiltered(params: TFilterParams): Promise<{ results: IMovie[] }> {
    const { data } = await axios.get(`${API_URL}/titles/`, {
      params: {
        ...params,
      },
    })
    return data
  },
}

export default SearchService
