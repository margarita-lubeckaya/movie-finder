import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as mixins from '@src/Theme/mixins'

export const Card = styled.article`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-template-areas: 'a';
  border-radius: 1rem;
  overflow: hidden;
`

export const Poster = styled.figure`
  width: 100%;
  aspect-ratio: 5 / 6;
  position: relative;
  grid-area: a;
  z-index: 1;
`

export const PosterImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 2em;
  padding: 0.5em;
  // text-shadow: 0 0 2px ${({ theme }) => theme.colors.mainBg};
  transition: transform 0.5s ease;
  justify-self: flex-end;
`
export const Date = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  padding: ${mixins.pxToRem(4)} ${mixins.pxToRem(7)} ${mixins.pxToRem(2)};
  background: ${({ theme }) => theme.colors.brand};
  border-radius: ${mixins.pxToRem(4)};
  line-height: 1.4;
  font-size: 1rem;
`

export const CardLink = styled(Link)`
  z-index: 5;
  grid-area: a;
  background-color: ${({ theme }) => theme.colors.mainBg + '30'};
  --link-color-hover: ${({ theme }) => theme.colors.text};
  --link-underline: none;
  --link-underline-hover: none;
  transition: backdrop-filter 0.5s linear;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  &:hover {
    backdrop-filter: blur(10px);

    ${Title} {
      transform: scale(1.05) translateY(-0.5%);
    }
  }
`