import * as React from 'react'
import { useUpcoming } from '@src/hooks/useUpcoming'
import { usePopular } from '@src/hooks/usePopular'
import * as S from '@src/pages/HomePage/styled'
import { useTranslation } from 'react-i18next'
import MovieCard from '@src/components/MovieCard'
import * as Styled from '@src/components/styled'

const HomePage = () => {
  const popularMovies = usePopular()
  const upcomingMovies = useUpcoming()
  const { t } = useTranslation()

  return (
    <>
      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">{t('home.popularTitle')}</Styled.Title>
          <Styled.Description as="p">
            {t('home.popularText')}
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
        </Styled.Container>
      </Styled.Section>

      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">{t('home.upcomingTitle')}</Styled.Title>
          <Styled.Description as="p">
            {t('home.upcomingText')}
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
        </Styled.Container>
      </Styled.Section>
    </>
  )
}

export default HomePage
