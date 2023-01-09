import axios from 'axios'

import { IMovie, TFilterParams } from 'types/movie'

import { API_URL } from './config'

const SearchService = {
  async getFiltered(
    params: TFilterParams,
    pageParam: number,
    limit: number
  ): Promise<{ results: IMovie[]; next: string | null; page: string }> {
    const { data } = await axios.get(`${API_URL}/titles/`, {
      params: {
        ...params,
        page: pageParam,
        limit,
      },
    })
    return data
  },
}

export default SearchService
