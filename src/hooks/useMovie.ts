import { useQuery } from 'react-query'
import { MovieService } from '@src/services/movie.service'

export const useMovie = (movieId: string | undefined) => {
  const {
    data: movieDetailed,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movieDetailed', movieId],
    queryFn: () => MovieService.getDetailed(movieId || ''),
    select: (response) => response.results,
    onError: (error) => {
      console.log(error)
    },
    enabled: !!movieId,
  })

  console.log('data', movieDetailed)
  return { movieDetailed, isLoading, isError }
}
