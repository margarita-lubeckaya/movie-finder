import * as React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useFilterData } from '@src/hooks/useFilterData'
import * as Styled from '@src/components/styled'

import { ListVariants, TFilterParams } from '@src/types/movie'

import * as S from './styled'

const FiltrationForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (formData: TFilterParams) => void
  defaultValues: TFilterParams
}) => {
  const { t } = useTranslation()
  const { genres, titleTypes, isLoading } = useFilterData()
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
        <S.EntryLabel htmlFor="year">
          {t('allMovies.filtration.year')}
        </S.EntryLabel>
        <S.EntryInput
          id="year"
          {...register('year', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />
        {errors.year && (
          <S.EntryError htmlFor="year">Invalid year</S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="start-year">
          {t('allMovies.filtration.startYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="start-year"
          {...register('startYear', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />

        {errors.startYear && (
          <S.EntryError htmlFor="start-year">Invalid year</S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="end-year">
          {t('allMovies.filtration.endYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="end-year"
          {...register('endYear', {
            pattern: /^(19|20)\d{2}$/,
          })}
        />

        {errors.endYear && (
          <S.EntryError htmlFor="end-year">Invalid year</S.EntryError>
        )}
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="list">
          {t('allMovies.filtration.list')}
        </S.EntryLabel>
        <S.EntrySelect id="list" {...register('list')}>
          {Object.keys(ListVariants).map((listKey, key) => (
            <option
              key={key}
              value={ListVariants[listKey as keyof typeof ListVariants]}
            >
              {t(`allMovies.filtration.listVariants.${listKey}`)}
            </option>
          ))}
        </S.EntrySelect>
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="genre">
          {t('allMovies.filtration.genre')}
        </S.EntryLabel>
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
          {t('allMovies.filtration.titleType')}
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
          {t('allMovies.filtration.submit')}
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
