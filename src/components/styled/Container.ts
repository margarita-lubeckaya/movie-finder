import styled from 'styled-components'

const ContainerStyled = styled.div`
  width: 100%;
  max-width: var(--container-max-width);

  margin: 0 auto;

  ${({ theme }) => theme.mediaBreakpointUp('xxl')} {
    width: 90%;
  }
`

ContainerStyled.defaultProps = {}

export default ContainerStyled
