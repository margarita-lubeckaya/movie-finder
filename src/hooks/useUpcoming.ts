import { useQuery } from 'react-query'
import InfoService from '@src/services/info.service'

export const useUpcoming = () => {
  const {
    data: upcoming,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: InfoService.getUpcoming,
    select: (response) => response.results,
    onError: (error) => {
      console.log(error)
    },
  })

  return { upcoming, isLoading, isError }
}
