import styled from 'styled-components'

const SectionStyled = styled.section<{
  $paddingBottom?: string
  $paddingTop?: string
}>`
  position: relative;
  overflow: hidden;
  padding-left: var(--base-spacing-content-x);
  padding-right: var(--base-spacing-content-x);

  ${({ theme, $paddingBottom = 'normal' }) =>
    theme.setPropResponsive(
      'padding-bottom',
      theme.spacing[$paddingBottom]
        ? theme.spacing[$paddingBottom]
        : $paddingBottom,
      true
    )}

  ${({ theme, $paddingTop = 'normal' }) =>
    theme.setPropResponsive(
      'padding-top',
      theme.spacing[$paddingTop] ? theme.spacing[$paddingTop] : $paddingTop,
      true
    )}
`

SectionStyled.defaultProps = {
  $paddingTop: 'normal',
  $paddingBottom: 'normal',
}

export default SectionStyled
