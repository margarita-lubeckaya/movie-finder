import * as React from 'react'
import { useUpcoming } from '@src/hooks/useUpcoming'
import * as S from '@src/pages/HomePage/styled'
import { useTranslation } from 'react-i18next'
import MovieCard from '@src/components/MovieCard'
import * as Styled from '@src/components/styled'

const HomePage = () => {
  const { isLoading, isError, upcoming } = useUpcoming()
  const { t } = useTranslation()

  return isError ? null : (
    <>
      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">{t('home.upcomingTitle')}</Styled.Title>
          <Styled.Description as="p">
            {t('home.upcomingText')}
          </Styled.Description>
          {isLoading && <p>Loading..</p>}
          actors
        </Styled.Container>
      </Styled.Section>

      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">{t('home.upcomingTitle')}</Styled.Title>
          <Styled.Description as="p">
            {t('home.upcomingText')}
          </Styled.Description>
          {isLoading && <p>Loading..</p>}
          tags
        </Styled.Container>
      </Styled.Section>

      <Styled.Section>
        <Styled.Container>
          <Styled.Title as="h2">{t('home.upcomingTitle')}</Styled.Title>
          <Styled.Description as="p">
            {t('home.upcomingText')}
          </Styled.Description>

          {isLoading && <p>Loading..</p>}
          <S.CardList>
            {upcoming?.length &&
              upcoming.map((item) => (
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
