export interface IDataFilms {
  id: number
  name: string
  description: string
  premiere: string
  debut: string
  image: string
}

export interface IDataFilmsChoice extends IDataFilms {
  daysHours: [IDataFilmsChoiceDaysHours]
}

export interface IDataFilmsChoiceDaysHours {
  day: string
  hours: [string]
}

export interface IChair {
  seat: string
  chosen: boolean
  special: boolean
}
