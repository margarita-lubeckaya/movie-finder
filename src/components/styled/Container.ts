import styled from 'styled-components'

const Container = styled.div`
  background-color: green;
  width: 100%;
  max-width: var(--container-max-width);

  margin: 0 auto;

  ${({ theme }) => theme.mediaBreakpointUp('xxl')} {
    width: 90%;
  }
`

Container.defaultProps = {}

export default Container
