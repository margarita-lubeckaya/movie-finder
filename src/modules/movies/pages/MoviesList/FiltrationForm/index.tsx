import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ListVariants, TFilterParams } from 'types/movie'

import { useFilterData } from '@hooks/queries/useFilterData'

import * as Styled from '@components/styled'

import FormEntry from './FormEntry'
import * as S from './styled'
import { schema } from './validation'

const FiltrationForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (formData: TFilterParams) => void
  defaultValues: TFilterParams
}) => {
  const { t } = useTranslation(['allMovies'])
  const { genres, titleTypes, isLoading } = useFilterData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFilterParams>({
    defaultValues,
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  })

  return isLoading ? (
    <Styled.Loader />
  ) : (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <FormEntry
        type="input"
        name="year"
        register={register}
        label={t('filtration.year')}
        errorMessage={t('filtration.invalidYearError')}
        error={errors.year}
      />

      <FormEntry
        type="input"
        name="startYear"
        register={register}
        label={t('filtration.startYear')}
        errorMessage={t('filtration.invalidYearError')}
        error={errors.startYear}
      />

      <FormEntry
        type="input"
        name="endYear"
        register={register}
        label={t('filtration.endYear')}
        errorMessage={t('filtration.invalidYearError')}
        error={errors.endYear}
      />

      <FormEntry
        type="select"
        name="list"
        register={register}
        label={t('filtration.list')}
        error={errors.list}
      >
        {Object.keys(ListVariants).map((listKey, key) => (
          <option
            key={key}
            value={ListVariants[listKey as keyof typeof ListVariants]}
          >
            {t(`filtration.listVariants.${listKey}`)}
          </option>
        ))}
      </FormEntry>

      <FormEntry
        type="select"
        name="genre"
        register={register}
        label={t('filtration.genre')}
        error={errors.genre}
      >
        {genres?.length &&
          genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
      </FormEntry>

      <FormEntry
        type="select"
        name="titleType"
        register={register}
        label={t('filtration.titleType')}
        error={errors.titleType}
      >
        {titleTypes?.length &&
          titleTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
      </FormEntry>

      <S.FormFooter>
        <Styled.Button type="submit" as="button">
          {t('filtration.submit')}
        </Styled.Button>
      </S.FormFooter>
    </S.Form>
  )
}

export default FiltrationForm
