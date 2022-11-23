import { useQuery } from 'react-query'
import InfoService from '@src/services/info.service'

export const useFilterData = () => {
  const { data: genres } = useQuery({
    queryKey: ['genres'],
    queryFn: InfoService.getGenres,
    select: (response) => response.results,
    onError: (error) => {
      console.log('load genres error:', error)
    },
  })

  const { data: titleTypes } = useQuery({
    queryKey: ['titleTypes'],
    queryFn: InfoService.getTitleTypes,
    select: (response) => response.results,
    onError: (error) => {
      console.log('load titles error:', error)
    },
  })

  return { genres, titleTypes }
}
