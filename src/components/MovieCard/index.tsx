import * as React from 'react'
import { IMovie, movieType } from '@src/types/movie'
import ImageStyled from '@src/components/styled/Image'
import formatDate from '@src/helpers/formatDate'

import * as S from './styled'
import { useImageFallback } from '@src/hooks/useImageFallback'

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { imageOnErrorHandler, imageSrc } = useImageFallback(
    movie.primaryImage?.url
  )

  return (
    <S.Card>
      <S.Poster>
        <ImageStyled
          width={300}
          height={400}
          src={imageSrc}
          onError={imageOnErrorHandler}
          alt={movie.primaryImage?.caption?.plainText || movie.titleText.text}
        />
      </S.Poster>
      <S.CardLink to={`/movie/${movie.id}`} state={{ movie }}>
        <S.Date>{formatDate(movie.releaseDate)}</S.Date>
        <S.Title>{movie.titleText.text}</S.Title>
      </S.CardLink>
    </S.Card>
  )
}

MovieCard.propTypes = {
  movie: movieType,
}

export default MovieCard
