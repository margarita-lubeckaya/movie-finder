import * as React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from '@components/styled'

const NotFoundPage = () => {
  const { t } = useTranslation(['common'])
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">{t('404Error.title')}</Styled.Title>
        <Styled.Button to="/">{t('404Error.linkText')}</Styled.Button>
      </Styled.Container>
    </Styled.Section>
  )
}

export default NotFoundPage
