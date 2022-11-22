import PropTypes from 'prop-types'

export type TReleaseDate = {
  day: number
  month: number
  year: number
}

export interface IMovie {
  id: string
  primaryImage?: {
    id: string
    width: number
    height: number
    url: string
    caption: {
      plainText: string
    }
  }
  titleType: {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
  }
  titleText: {
    text: string
  }
  releaseDate: TReleaseDate
}

export const movieType = PropTypes.shape({
  id: PropTypes.string,
  primaryImage: PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.shape({
      plainText: PropTypes.string,
    }),
  }),
  titleText: PropTypes.shape({ text: PropTypes.string }),
  titleType: PropTypes.shape({ text: PropTypes.string }),
  releaseDate: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
})

type TGenre = {
  text: string
  id: string
}

export interface IMoveDetailed extends IMovie {
  ratingsSummary: {
    aggregateRating: number | null
    voteCount: number
  }
  genres: {
    genres: TGenre[]
  }
  // episodes: null
  // runtime: null
  // series: null
  meterRanking: {
    currentRank: number
    rankChange: {
      changeDirection: string
      difference: number
    }
  }
  plot: {
    plotText: {
      plainText: string
    }
  }
}
