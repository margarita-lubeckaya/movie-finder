import * as yup from 'yup'

const firstMovieYear = 1888
const maxYear = 2999

const validateYear = (value: any) =>
  value === ''
    ? yup.string()
    : yup.number().positive().min(firstMovieYear).max(maxYear).integer()

export const schema = yup.object({
  year: yup.lazy(validateYear),
  startYear: yup.lazy(validateYear),
  endYear: yup.lazy((value) =>
    value === ''
      ? yup.string()
      : yup
          .number()
          .positive()
          .min(firstMovieYear)
          .max(maxYear)
          .integer()
          .when('startYear', (startYear, scheme) => {
            return startYear !== ''
              ? scheme.min(startYear)
              : scheme.min(firstMovieYear)
          })
  ),
  list: yup.string(),
  genre: yup.string(),
  titleType: yup.string(),
})

export type FormData = yup.InferType<typeof schema>
