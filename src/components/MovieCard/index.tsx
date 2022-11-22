import * as React from 'react'
import * as S from './styled'
import { IMovie, movieType } from '@src/types/movie'
import moviePlaceholder from '@src/assets/movie-placeholder.png'
import ImageStyled from '@src/components/styled/Image'
import formatDate from '@src/helpers/formatDate'

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <S.Card>
      <S.Poster>
        <ImageStyled
          width={300}
          height={400}
          src={movie.primaryImage?.url || moviePlaceholder}
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
