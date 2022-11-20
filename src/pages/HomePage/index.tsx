import * as React from 'react'
import { useUpcoming } from '@src/hooks/useUpcoming'
import * as S from '@src/pages/HomePage/styled'
import ContainerStyled from '@src/components/styled/Container'
import SectionStyled from '@src/components/styled/Section'

const HomePage = () => {
  const { isLoading, isError, upcoming } = useUpcoming()

  return isError ? null : (
    // <>
    <SectionStyled>
      <ContainerStyled>
        <h1>Homepage Component</h1>
        {isLoading && <p>Loading..</p>}
        <S.CardList>
          {upcoming?.length &&
            upcoming.map((item) => (
              <S.CardItem key={item.id}>
                <S.Movie>
                  {item.primaryImage ? (
                    <S.Poster
                      width={300}
                      height={400}
                      src={item.primaryImage.url}
                      alt={item.primaryImage.url || item.titleText.text}
                    />
                  ) : (
                    <S.PosterPlaceholder />
                  )}
                  <S.MovieTitle>{item.titleText.text}</S.MovieTitle>
                </S.Movie>
              </S.CardItem>
            ))}
        </S.CardList>
      </ContainerStyled>
    </SectionStyled>
    // </>
  )
}

export default HomePage
