import styled from 'styled-components'

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
`

export const CardItem = styled.li`
  //flex: 1 1 22%;
`

export const Movie = styled.article`
  height: 100%;
  width: 100%;
  position: relative;
`

export const MovieTitle = styled.h3`
  font-weight: bold;
  font-size: 2em;
  padding: 0.5em;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.mainBg};
`

export const Poster = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`

export const PosterPlaceholder = styled(Poster).attrs({ as: 'div' })`
  background-color: green;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`
