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
`
export const EntryLabel = styled.label`
  padding-bottom: 0.5em;
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
