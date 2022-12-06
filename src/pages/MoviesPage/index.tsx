import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import * as Styled from '@src/components/styled'
import MovieCard from '@src/components/MovieCard'
import { useFiltration } from '@src/hooks/useFiltration'
import { ListVariants, TFilterParams } from '@src/types/movie'

import * as S from './styled'
import FiltrationForm from './FiltrationForm'

const itemsPerPage = 8

const MoviesPage = () => {
  const { t } = useTranslation(['common', 'allMovies'])
  const [searchParams, setSearchParams] = useSearchParams()

  const filterInitParams = (): TFilterParams => {
    const initValue: TFilterParams = {
      titleType: '',
      genre: '',
      list: ListVariants.FullCollection,
      year: 0,
      startYear: 0,
      endYear: 0,
    }

    return Object.keys(initValue).reduce((saved, paramKey) => {
      const numberTypes = ['year', 'startYear', 'endYear']
      if (searchParams.has(paramKey)) {
        const searchValue = searchParams.get(paramKey) as string
        return {
          ...saved,
          [paramKey]: numberTypes.includes(paramKey)
            ? parseInt(searchValue, 10)
            : searchValue,
        }
      }

      const paramValue = initValue[paramKey as keyof typeof initValue]
      if (paramValue) {
        return { ...saved, [paramKey]: paramValue }
      }

      return saved
    }, {})
  }

  const [filterParams, setFilterParams] =
    useState<TFilterParams>(filterInitParams)

  const filteredMovies = useFiltration(filterParams, itemsPerPage)

  const handleSubmit = (params: TFilterParams) => {
    const cleanParams = Object.keys(params).reduce((saved, paramKey) => {
      const paramValue = params[paramKey as keyof typeof params]
      if (paramValue) {
        return { ...saved, [paramKey]: paramValue }
      }
      return saved
    }, {})

    setSearchParams(cleanParams)

    setFilterParams({
      ...cleanParams,
    })
  }

  const handleLoadMore = () => {
    filteredMovies.fetchNextPage()
  }

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">{t('title', { ns: 'allMovies' })}</Styled.Title>

        <FiltrationForm onSubmit={handleSubmit} defaultValues={filterParams} />

        {filteredMovies.isLoading && <Styled.Loader />}

        {filteredMovies.data?.pages?.length ? (
          <S.CardList>
            {filteredMovies.data?.pages.map((resultsPage) =>
              resultsPage.results.length
                ? resultsPage.results.map((item) => (
                    <S.CardItem key={item.id}>
                      <MovieCard movie={item} />
                    </S.CardItem>
                  ))
                : t('noResults', { ns: 'common' })
            )}
          </S.CardList>
        ) : (
          t('noResults', { ns: 'common' })
        )}

        {filteredMovies.hasNextPage && (
          <S.CardsFooter>
            <Styled.Button onClick={handleLoadMore} as="button">
              {t('loadMore', { ns: 'common' })}
            </Styled.Button>
          </S.CardsFooter>
        )}
      </Styled.Container>
    </Styled.Section>
  )
}

export default MoviesPage
