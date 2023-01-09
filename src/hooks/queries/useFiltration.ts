import { useInfiniteQuery } from 'react-query'

import { TFilterParams } from 'types/movie'

import SearchService from '@services/search.service'

export const useFiltration = (params: TFilterParams, limit: number) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['filtration', params],
      queryFn: ({ pageParam = 1 }) =>
        SearchService.getFiltered(params, pageParam, limit),
      getNextPageParam: (lastPage) => {
        return (lastPage.next && parseInt(lastPage.page, 10) + 1) || undefined
      },
      // onSuccess: (fetchedData) => {
      //   console.log('filtration Success ', fetchedData)
      // },
      onError: (error) => {
        console.log('filtration error', error)
      },
    })

  return { data, isLoading, isError, fetchNextPage, hasNextPage }
}
