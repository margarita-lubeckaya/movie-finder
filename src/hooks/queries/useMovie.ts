import { useQuery } from 'react-query'

import MovieService from '@services/movie.service'

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
  return { movieDetailed, isLoading, isError }
}
