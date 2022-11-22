import * as React from 'react'
import { useUpcoming } from '@src/hooks/useUpcoming'
import * as S from '@src/pages/HomePage/styled'
import ContainerStyled from '@src/components/styled/Container'
import SectionStyled from '@src/components/styled/Section'
import MovieCard from '@src/components/MovieCard'
import TitleStyled from '@src/components/styled/Title'
import DescriptionStyled from '@src/components/styled/Description'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { isLoading, isError, upcoming } = useUpcoming()
  const { t } = useTranslation()

  return isError ? null : (
    // <>
    <SectionStyled>
      <ContainerStyled>
        <TitleStyled as="h2">{t('home.upcomingTitle')}</TitleStyled>
        <DescriptionStyled as="p">{t('home.upcomingText')}</DescriptionStyled>

        {isLoading && <p>Loading..</p>}
        <S.CardList>
          {upcoming?.length &&
            upcoming.map((item) => (
              <S.CardItem key={item.id}>
                <MovieCard movie={item} />
              </S.CardItem>
            ))}
        </S.CardList>
      </ContainerStyled>
    </SectionStyled>
    // </>
  )
}

export default HomePage
