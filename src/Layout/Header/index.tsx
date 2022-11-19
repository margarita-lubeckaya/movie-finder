import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styled'

const Header = ({
  onThemeChange,
}: {
  onThemeChange: (theme: string) => void
}) => {
  const { t, i18n } = useTranslation()

  const onThemeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onThemeChange(event.target.value)
  }
  const onLangSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    i18n.changeLanguage(event.target.value).then((p) => {
      console.log(p)
    })
  }

  const lngs = {
    fr: 'French',
    en: 'English',
  }

  return (
    <S.Header>
      <S.HeaderCentered>
        <S.LogoLink to="/">movie finder</S.LogoLink>
        <S.Nav>
          <S.NavMenuList>
            <S.NavMenuItem>
              <S.MainNavLink to="/movies">
                {t('header.nav.movies')}
              </S.MainNavLink>
            </S.NavMenuItem>
            <S.NavMenuItem>
              <S.MainNavLink to="/about">{t('header.nav.about')}</S.MainNavLink>
            </S.NavMenuItem>
          </S.NavMenuList>
          <S.ExtraList>
            <S.ExtraItem>
              <select
                onChange={onLangSelect}
                defaultValue={i18n.resolvedLanguage}
              >
                {Object.keys(lngs).map((lng) => (
                  <option key={lng} value={lng}>
                    {lngs[lng as keyof typeof lngs]}
                  </option>
                ))}
              </select>
            </S.ExtraItem>
            <S.ExtraItem>
              <select onChange={onThemeSelect}>
                <option value="default">{t('header.theme.default')}</option>
                <option value="light">{t('header.theme.light')}</option>
                <option value="extra">{t('header.theme.extra')}</option>
              </select>
            </S.ExtraItem>
          </S.ExtraList>
        </S.Nav>
      </S.HeaderCentered>
    </S.Header>
  )
}

export default Header
