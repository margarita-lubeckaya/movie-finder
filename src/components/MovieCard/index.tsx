import * as React from 'react'
import * as S from './styled'
import { IMovie, movieType } from '@src/types/movie'
import moviePlaceholder from '@src/assets/movie-placeholder.png'

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const formatDate = () => {
    return new Date(
      movie.releaseDate.year,
      movie.releaseDate.month - 1,
      movie.releaseDate.day
    ).toLocaleDateString('en-US')
  }
  return (
    <S.Card>
      <S.Poster>
        {movie.primaryImage ? (
          <S.PosterImage
            width={300}
            height={400}
            src={movie.primaryImage.url}
            alt={movie.primaryImage.caption?.plainText || movie.titleText.text}
          />
        ) : (
          <S.PosterImage
            width={300}
            height={400}
            src={moviePlaceholder}
            alt={movie.titleText.text}
          />
        )}
      </S.Poster>
      <S.CardLink
        to={`/movie/${encodeURI(movie.titleText.text)}`}
        state={{ movie }}
      >
        <S.Date>{formatDate()}</S.Date>
        <S.Title>{movie.titleText.text}</S.Title>
      </S.CardLink>
    </S.Card>
  )
}

MovieCard.propTypes = {
  movie: movieType,
}

export default MovieCard
