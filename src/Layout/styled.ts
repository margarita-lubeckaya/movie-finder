import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const PageMain = styled.main`
  position: relative;
  width: 100%;
  flex: 1 1 auto;
  padding-top: var(--header-static-height);
`

export const PageFooter = styled.footer`
  position: relative;
  width: 100%;
`
