import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { ListVariants } from 'types/movie'

import { usePopular } from '@hooks/usePopular'
import { useUpcoming } from '@hooks/useUpcoming'

import MovieCard from '@components/MovieCard'
import * as Styled from '@components/styled'

import * as S from './styled'

const HomePage = () => {
  const popularMovies = usePopular()
  const upcomingMovies = useUpcoming()
  const { t } = useTranslation(['home', 'common'])

  return (
    <>
      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">
            {t('popularTitle', { ns: 'home' })}
          </Styled.Title>
          <Styled.Description as="p">
            {t('popularText', { ns: 'home' })}
          </Styled.Description>
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
            <Styled.Button to={`/movies?list=${ListVariants.PopMovies}`}>
              {t('seeAll', { ns: 'common' })}
            </Styled.Button>
          </S.CardsFooter>
        </Styled.Container>
      </Styled.Section>

      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">
            {t('upcomingTitle', { ns: 'home' })}
          </Styled.Title>
          <Styled.Description as="p">
            {t('upcomingText', { ns: 'home' })}
          </Styled.Description>

          {upcomingMovies.isLoading && <Styled.Loader />}
          <S.CardList>
            {upcomingMovies.upcoming?.length &&
              upcomingMovies.upcoming.map((item) => (
                <S.CardItem key={item.id}>
                  <MovieCard movie={item} />
                </S.CardItem>
              ))}
          </S.CardList>
          <S.CardsFooter>
            <Styled.Button to={'/movies'}>
              {t('seeAll', { ns: 'common' })}
            </Styled.Button>
          </S.CardsFooter>
        </Styled.Container>
      </Styled.Section>
    </>
  )
}

export default HomePage
