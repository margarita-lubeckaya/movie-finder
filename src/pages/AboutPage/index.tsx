import * as React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from '@src/components/styled'

const HomePage = () => {
  const { t } = useTranslation(['about'])
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">{t('title')}</Styled.Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          deserunt ea, error fuga iusto libero, minus modi, nesciunt obcaecati
          possimus ratione rerum sed voluptatum! Ad consequuntur cum cumque
          doloremque dolorum ea, eligendi, error est ex in libero placeat porro
          quis ratione reprehenderit sint tempora{' '}
        </p>
        <p>
          veniam voluptatibus? Ad consectetur consequatur consequuntur corporis,
          debitis dolor dolore earum enim fugiat id laborum, molestias nostrum
          officiis, quidem quisquam quo ratione.
        </p>
        <p>
          Aliquam aliquid, consequuntur, dolor doloremque et excepturi ipsum
          laborum nam nesciunt perferendis quae quam repellat reprehenderit
          veritatis, voluptas! Accusantium aperiam eum facere fugiat hic itaque,
          mollitia quibusdam quos ratione. Dolorum eum facilis modi nisi.
        </p>
      </Styled.Container>
    </Styled.Section>
  )
}

export default HomePage
