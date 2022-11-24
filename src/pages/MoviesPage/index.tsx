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

// todo : load more infinite
// todo : reset form ?

const MoviesPage = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()

  const filterInitParams = (): TFilterParams => {
    const initValue: TFilterParams = {
      titleType: '',
      genre: '',
      list: ListVariants.FullCollection,
      year: 0,
      startYear: 0,
      endYear: 0,
      page: 1,
      limit: itemsPerPage,
    }

    return Object.keys(initValue).reduce((saved, paramKey) => {
      const numberTypes = ['page', 'year', 'startYear', 'endYear', 'limit']
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

  const filteredMovies = useFiltration(filterParams)

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
      limit: itemsPerPage,
      page: 1,
    })
  }

  const handleLoadMore = () => {
    setSearchParams({
      ...(filterParams as Record<string, string>),
      page: ((filterParams.page || 1) + 1).toString(),
    })
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

        <FiltrationForm onSubmit={handleSubmit} defaultValues={filterParams} />

        {filteredMovies.isLoading && <Styled.Loader />}

        {filteredMovies.data?.filtered.length ? (
          <S.CardList>
            {filteredMovies.data?.filtered.length &&
              filteredMovies.data?.filtered.map((item) => (
                <S.CardItem key={item.id}>
                  <MovieCard movie={item} />
                </S.CardItem>
              ))}
          </S.CardList>
        ) : (
          t('common.noResults')
        )}

        {filteredMovies.data?.hasNextPage && (
          <S.CardsFooter>
            <Styled.Button onClick={handleLoadMore} as="button">
              {t('common.loadMore')}
            </Styled.Button>
          </S.CardsFooter>
        )}
      </Styled.Container>
    </Styled.Section>
  )
}

export default MoviesPage
