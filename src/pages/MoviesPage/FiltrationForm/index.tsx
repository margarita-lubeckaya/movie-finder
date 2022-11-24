import * as React from 'react'
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
  const { register, handleSubmit } = useForm()

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
          defaultValue={defaultValues.year}
          {...register('year')}
        />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="start-year">
          {t('allMovies.filtration.startYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="start-year"
          defaultValue={defaultValues.startYear}
          {...register('startYear')}
        />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="end-year">
          {t('allMovies.filtration.endYear')}
        </S.EntryLabel>
        <S.EntryInput
          id="end-year"
          defaultValue={defaultValues.endYear}
          {...register('endYear')}
        />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="list">
          {t('allMovies.filtration.list')}
        </S.EntryLabel>
        <S.EntrySelect
          id="list"
          defaultValue={defaultValues.list}
          {...register('list')}
        >
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
        <S.EntrySelect
          id="genre"
          defaultValue={defaultValues.genre}
          {...register('genre')}
        >
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
        <S.EntrySelect
          id="title-type"
          defaultValue={defaultValues.titleType}
          {...register('titleType')}
        >
          {titleTypes?.length &&
            titleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
        </S.EntrySelect>
      </S.Entry>

      <Styled.Button type="submit" as="button">
        {t('allMovies.filtration.submit')}
      </Styled.Button>
    </S.Form>
  )
}

export default FiltrationForm
