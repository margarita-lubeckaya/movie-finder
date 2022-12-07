import PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '@src/i18n'

import * as S from './styled'

const Header = ({
  onThemeChange,
  selectedTheme,
}: {
  onThemeChange: (theme: string) => void
  selectedTheme: string
}) => {
  const { t, i18n } = useTranslation(['common'])

  const onThemeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onThemeChange(event.target.value)
  }
  const onLangSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <S.Header>
      <S.HeaderCentered>
        <S.LogoLink to="/">movie finder</S.LogoLink>
        <S.Nav>
          <S.NavMenuList>
            <S.NavMenuItem>
              <S.MainNavLink to="/movies">{t('nav.movies')}</S.MainNavLink>
            </S.NavMenuItem>
            <S.NavMenuItem>
              <S.MainNavLink to="/about">{t('nav.about')}</S.MainNavLink>
            </S.NavMenuItem>
          </S.NavMenuList>
          <S.ExtraList>
            <S.ExtraItem>
              <select
                onChange={onLangSelect}
                defaultValue={i18n.resolvedLanguage}
              >
                {Object.keys(supportedLanguages).map((lng) => (
                  <option key={lng} value={lng}>
                    {supportedLanguages[lng as keyof typeof supportedLanguages]}
                  </option>
                ))}
              </select>
            </S.ExtraItem>
            <S.ExtraItem>
              <select
                onChange={onThemeSelect}
                value={selectedTheme || 'default'}
              >
                <option value="default">{t('theme.default')}</option>
                <option value="light">{t('theme.light')}</option>
                <option value="extra">{t('theme.extra')}</option>
              </select>
            </S.ExtraItem>
          </S.ExtraList>
        </S.Nav>
      </S.HeaderCentered>
    </S.Header>
  )
}

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string,
}
Header.defaultProps = {
  selectedTheme: 'default',
}

export default Header
