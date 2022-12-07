import { useQuery } from 'react-query'

import InfoService from '@services/info.service'

export const useQueryPopular = () => {
  const {
    data: popular,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['popular'],
    queryFn: InfoService.getPopular,
    select: (response) => response.results,
    onError: (error) => {
      console.log(error)
    },
  })

  return { popular, isLoading, isError }
}
