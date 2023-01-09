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

export enum ListVariants {
  PopMovies = 'most_pop_movies',
  PopSeries = 'most_pop_series',
  TopBoxOffice = 'top_boxoffice_200',
  TopBoxOfficeLast = 'top_boxoffice_last_weekend_10',
  TopRated = 'top_rated_250',
  TopRatedEnglish = 'top_rated_english_250',
  TopRatedLowest = 'top_rated_lowest_100',
  TopRatedSeries = 'top_rated_series_250',
  FullCollection = 'titles',
}

export type TFilterParams = {
  titleType?: string
  genre?: string
  list?: `${ListVariants}`
  sort?: 'year.incr' | 'year.decr'
  limit?: number
  year?: number
  startYear?: number
  endYear?: number
  page?: number
}
