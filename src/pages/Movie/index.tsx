import * as React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import * as Styled from '@src/components/styled'
import { useMovie } from '@src/hooks/useMovie'
import moviePlaceholder from '@src/assets/movie-placeholder.png'
import IconStar from './IconStar'
import formatDate from '@src/helpers/formatDate'

import * as S from './styled'

const MoviePage = () => {
  const { id } = useParams()
  const { state } = useLocation()

  const { movieDetailed, isLoading, isError } = useMovie(id)

  return (
    <Styled.Section>
      <Styled.Container>
        {isLoading && state && 'movie' in state ? (
          <Styled.Title $size="title">
            {state.movie.titleText.text}
          </Styled.Title>
        ) : (
          isLoading && 'loading... '
        )}
        {isError && 'troubles to load the data'}

        {!!movieDetailed && (
          <S.MovieInfo>
            <Styled.Title $size="title">
              {movieDetailed.titleText.text}
            </Styled.Title>

            <S.Rating>
              <IconStar />
              {movieDetailed.ratingsSummary.voteCount
                ? movieDetailed.ratingsSummary.aggregateRating
                : '0'}
            </S.Rating>

            <S.MovieDescription>
              <S.ReleaseDate>
                {formatDate(movieDetailed.releaseDate)}
              </S.ReleaseDate>
              <Styled.Description>
                {movieDetailed.plot?.plotText?.plainText}
              </Styled.Description>
              {/*genres genres.genres = {text: string, id: string}*/}
              <S.Tags>
                {movieDetailed.genres.genres.map((genre) => (
                  <S.Tag to={`/movies/?genre=${genre.id}`} key={genre.id}>
                    {genre.text}
                  </S.Tag>
                ))}
              </S.Tags>
            </S.MovieDescription>

            <S.Media>
              <Styled.Image
                width={300}
                height={400}
                src={movieDetailed.primaryImage?.url || moviePlaceholder}
                alt={
                  movieDetailed.primaryImage?.caption?.plainText ||
                  movieDetailed.titleText.text
                }
              />
            </S.Media>
          </S.MovieInfo>
        )}
      </Styled.Container>
    </Styled.Section>
  )
}

export default MoviePage
