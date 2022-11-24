import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as mixins from '@src/Theme/mixins'

export const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  grid-template-areas: 'title rating image' 'description description image' '. . image';
  column-gap: 2rem;
  align-content: center;
`

export const Media = styled.figure`
  aspect-ratio: 5 / 6;
  grid-area: image;
  max-width: ${mixins.pxToRem(320)};
  align-self: start;
  justify-self: center;
`

export const Rating = styled.div`
  grid-area: rating;
  color: gold;
  font-size: 2rem;
  align-self: start;
  align-content: center;
  display: flex;
  gap: 0.5rem;
`

export const MovieDescription = styled.div`
  grid-area: description;
`

export const ReleaseDate = styled.div`
  padding-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.accent};
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Tag = styled(Link)`
  --link-underline: none;
  --link-underline-hover: none;
  padding: ${mixins.pxToRem(4)} ${mixins.pxToRem(12)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  font-size: ${mixins.pxToRem(14)};
`
