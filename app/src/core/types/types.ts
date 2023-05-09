export type Car = {
  name: string,
  color: string,
  id: number,
}

export type NewCar = Omit<Car, 'id'>
