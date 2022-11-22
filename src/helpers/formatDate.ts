import { TReleaseDate } from '@src/types/movie'

const formatDate = (releaseDate: TReleaseDate) => {
  return new Date(
    releaseDate.year,
    releaseDate.month - 1,
    releaseDate.day
  ).toLocaleDateString('en-US')
}

export default formatDate
