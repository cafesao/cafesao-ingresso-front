export interface IState {
  id: string
  day: string
  hour: string
}

export interface IStateChair extends IState {
  selectedChair: string[]
}
