import * as React from 'react'
// import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import formatDate from '@src/helpers/formatDate'

import { useImageFallback } from '@hooks/useImageFallback'
import { useMovie } from '@hooks/useMovie'

import * as Styled from '@components/styled'

import IconStar from './IconStar'
import * as S from './styled'

const MovieDetails = () => {
  const { id } = useParams()
  const { state } = useLocation()

  const { movieDetailed, isLoading, isError } = useMovie(id)

  const { imageOnErrorHandler, imageSrc } = useImageFallback(
    movieDetailed?.primaryImage?.url
  )

  return (
    <Styled.Section>
      <Styled.Container>
        {isLoading && state && 'movie' in state ? (
          <Styled.Title $size="title">
            {state.movie.titleText.text}
          </Styled.Title>
        ) : (
          isLoading && <Styled.Loader />
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
                onError={imageOnErrorHandler}
                src={imageSrc}
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

export default MovieDetails
