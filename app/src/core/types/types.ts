export type Car = {
  name: string,
  color: string,
  id: number,
}

export type NewCar = Omit<Car, 'id'>

export type CurrentCar = Car & {HTML: HTMLElement}

export type WinnersTableRowCar = [
  number: number,
  carHtml: HTMLElement,
  name: string,
  wins: number,
  bestTime: number
];
