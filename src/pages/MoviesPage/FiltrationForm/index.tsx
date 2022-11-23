import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useFilterData } from '@src/hooks/useFilterData'
import ButtonStyled from '@src/components/styled/Button'

import { ListVariants, TFilterParams } from '@src/types/movie'

import * as S from './styled'

//laLONDE1Alatuno!

const FiltrationForm = ({
  onSubmit,
}: {
  onSubmit: (formData: TFilterParams) => void
}) => {
  const { t } = useTranslation()
  const { genres, titleTypes } = useFilterData()
  const { register, handleSubmit } = useForm()

  // const onSubmit = (formData: TFilterParams) => {
  //   console.log('formData', formData)
  // }

  // console.log(formState)

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Entry>
        <S.EntryLabel htmlFor="year">
          {t('allMovies.filtration.year')}
        </S.EntryLabel>
        <S.EntryInput id="year" {...register('year')} />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="start-year">
          {t('allMovies.filtration.startYear')}
        </S.EntryLabel>
        <S.EntryInput id="start-year" {...register('startYear')} />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="end-year">
          {t('allMovies.filtration.endYear')}
        </S.EntryLabel>
        <S.EntryInput id="end-year" {...register('endYear')} />
      </S.Entry>

      <S.Entry>
        <S.EntryLabel htmlFor="list">
          {t('allMovies.filtration.list')}
        </S.EntryLabel>
        <S.EntrySelect
          id="list"
          {...register('list')}
          defaultValue={ListVariants.FullCollection}
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

      <ButtonStyled type="submit" as="button">
        {t('allMovies.filtration.submit')}
      </ButtonStyled>
    </S.Form>
  )
}

export default FiltrationForm
