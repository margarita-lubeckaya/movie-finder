import { useQuery } from 'react-query'
import SearchService from '@src/services/search.service'
import { TFilterParams } from '@src/types/movie'

export const useFiltration = (params: TFilterParams) => {
  const {
    data: popular,
    isLoading,
    isError,
    // isPreviousData,
  } = useQuery({
    queryKey: ['filtration', params],
    queryFn: () => SearchService.getFiltered(params),
    select: (response) => response.results,
    onSuccess: (data) => {
      console.log('filtration Success ', data)
    },
    onError: (error) => {
      console.log('filtration error', error)
    },
    // keepPreviousData: params.page && params.page > 0,
  })

  return { popular, isLoading, isError }
}
