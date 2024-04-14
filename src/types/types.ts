export interface IMovie {
  id: number;
  name?: string | null;
  type: string;
  year?: number ;
  description?: string | null;
  shortDescription?: string | null;
  status?: string | null;
  rating?: IRating;
  movieLength?: number| null;
  ageRating?: number | null;
  logo?: IUrl;
  backdrop?: IUrl;
  genres?: INames[];
  countries?: INames[];
  persons?: IPerson[];
  reviewInfo?: IReviewInfo;
  seasonsInfo?: ISeasonInfo[];
  similarMovies?: ILinkedMovie[];
  sequelsAndPrequels?: ILinkedMovie[];
  totalSeriesLength?: number ;
  seriesLength?: number ;
  isSeries: boolean;
}

export interface IUrl{
  url: string
}

export interface IRating{
  kp?: number
  imdb?: number
  filmCritics?: number
}

export interface INames{
  name: string
}

export interface IPerson {
  id?: number | null;
  photo?: string | null;
  name?: string | null;
}

export interface ILinkedMovie {
  id?: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: IUrl;
}

export interface IPoster{
  url?: string
  id: string
}

export interface ISeasonInfo {
  number?: number | null;
  episodesCount?: number | null;
}

export interface ISeason {
  movieId?: number;
  number?: number;
  episodesCount?: number;
  episodes: IEpisode[];
}

export interface IEpisode {
  number?: number;
  name?: string;
  description?: string;
}

export interface IReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: string | null;
}

export interface IReview {
  id?: number;
  movieId?: number;
  title?: string;
  type?: string;
  review: string;
  date?: string;
  author?: string;
  authorId?: number;
  userRating: number;
}