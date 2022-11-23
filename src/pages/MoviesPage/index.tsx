import * as React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from '@src/components/styled'
import MovieCard from '@src/components/MovieCard'
import { useFiltration } from '@src/hooks/useFiltration'

import * as S from './styled'
import FiltrationForm from './FiltrationForm'
import { useState } from 'react'
import { TFilterParams } from '@src/types/movie'

const itemsPerPage = 8

const MoviesPage = () => {
  const { t } = useTranslation()

  const [filterParams, setFilterParams] = useState<TFilterParams>({
    limit: itemsPerPage,
  })

  const popularMovies = useFiltration(filterParams)

  const handleSubmit = (params: TFilterParams) => {
    const newParams = Object.keys(params).reduce((saved, paramKey) => {
      const paramValue = params[paramKey as keyof typeof params]
      if (paramValue) {
        return { ...saved, [paramKey]: paramValue }
      }
      return saved
    }, {})

    setFilterParams({
      ...newParams,
      limit: itemsPerPage,
      page: 1,
    })
  }

  const handleLoadMore = () => {
    setFilterParams((old) => {
      return {
        ...old,
        page: (old.page || 1) + 1,
      }
    })
  }

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">{t('allMovies.title')}</Styled.Title>

        <FiltrationForm onSubmit={handleSubmit} />

        {popularMovies.isLoading && <Styled.Loader />}
        <S.CardList>
          {popularMovies.popular?.length &&
            popularMovies.popular.map((item) => (
              <S.CardItem key={item.id}>
                <MovieCard movie={item} />
              </S.CardItem>
            ))}
        </S.CardList>

        <S.CardsFooter>
          <Styled.Button onClick={handleLoadMore} as="button">
            {t('common.loadMore')}
          </Styled.Button>
        </S.CardsFooter>
      </Styled.Container>
    </Styled.Section>
  )
}

export default MoviesPage
