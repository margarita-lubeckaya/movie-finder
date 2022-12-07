import PropTypes from 'prop-types'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ListVariants, TFilterParams } from 'types/movie'

import { useQueryFilterData } from '@hooks/useQueryFilterData'

import * as Styled from '@components/styled'

import * as S from './styled'

const FiltrationForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (formData: TFilterParams) => void
  defaultValues: TFilterParams
}) => {
  const { t } = useTranslation(['allMovies'])
  const { genres, titleTypes, isLoading } = useQueryFilterData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    reValidateMode: 'onChange',
  })

  return isLoading ? (
    <Styled.Loader />
  ) : (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Entry>
        <S.EntryLabel htmlFor="year">{t('filtration.year')}</S.EntryLabel>
        <S.EntryInput
          id="year"
          {...register('year', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />
        {errors.year && (
          <S.EntryError htmlFor="year">
            {t('filtration.invalidYearError')}
          </S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="start-year">
          {t('filtration.startYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="start-year"
          {...register('startYear', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />

        {errors.startYear && (
          <S.EntryError htmlFor="start-year">
            {t('filtration.invalidYearError')}
          </S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="end-year">
          {t('filtration.endYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="end-year"
          {...register('endYear', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />

        {errors.endYear && (
          <S.EntryError htmlFor="end-year">
            {t('filtration.invalidYearError')}
          </S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="list">{t('filtration.list')}</S.EntryLabel>
        <S.EntrySelect id="list" {...register('list')}>
          {Object.keys(ListVariants).map((listKey, key) => (
            <option
              key={key}
              value={ListVariants[listKey as keyof typeof ListVariants]}
            >
              {t(`filtration.listVariants.${listKey}`)}
            </option>
          ))}
        </S.EntrySelect>
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="genre">{t('filtration.genre')}</S.EntryLabel>
        <S.EntrySelect id="genre" {...register('genre')}>
          {genres?.length &&
            genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
        </S.EntrySelect>
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="title-type">
          {t('filtration.titleType')}
        </S.EntryLabel>
        <S.EntrySelect id="title-type" {...register('titleType')}>
          {titleTypes?.length &&
            titleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
        </S.EntrySelect>
      </S.Entry>

      <S.FormFooter>
        <Styled.Button type="submit" as="button">
          {t('filtration.submit')}
        </Styled.Button>
      </S.FormFooter>
    </S.Form>
  )
}

FiltrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({
    titleType: PropTypes.string,
    genre: PropTypes.string,
    list: PropTypes.string,
    year: PropTypes.number,
    startYear: PropTypes.number,
    endYear: PropTypes.number,
  }),
}

FiltrationForm.defaultProps = {}

export default FiltrationForm
