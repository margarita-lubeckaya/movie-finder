import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 0;
  align-items: flex-end;
`

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-bottom: 1rem;
`
export const EntryLabel = styled.label`
  padding-bottom: 0.5em;
`
export const EntryError = styled.label`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  top: calc(100% - 1rem);
  font-size: 0.8em;
  padding-top: 0.2em;
`

const fieldCss = css`
  padding: 0.5em 1em;
`
export const EntryInput = styled.input`
  ${fieldCss}
`
export const EntrySelect = styled.select`
  ${fieldCss}
`
