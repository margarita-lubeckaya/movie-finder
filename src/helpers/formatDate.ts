import { TReleaseDate } from 'types/movie'

const formatDate = (releaseDate: TReleaseDate) => {
  return new Date(
    releaseDate?.year || 2022,
    releaseDate?.month - 1 || 0,
    releaseDate?.day || 1
  ).toLocaleDateString('en-US')
}

export default formatDate
