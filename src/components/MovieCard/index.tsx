import * as React from 'react'

import { IMovie } from 'types/movie'

import formatDate from '@src/helpers/formatDate'

import { useImageFallback } from '@hooks/useImageFallback'

import ImageStyled from '@components/styled/Image'

import * as S from './styled'

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
      <S.CardLink to={`/movies/${movie.id}`} state={{ movie }}>
        <S.Date>{formatDate(movie.releaseDate)}</S.Date>
        <S.Title>{movie.titleText.text}</S.Title>
      </S.CardLink>
    </S.Card>
  )
}

export default MovieCard
