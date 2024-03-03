export type Fuel = "GAS" | "PETROL";
export type Brand =
  | "Volkswagen"
  | "BMW"
  | "Kia"
  | "Nissan"
  | "Mercedes"
  | "Opel";

export interface Car {
  name: string;
  price: number;
  travelDistance: number;
  fuel: Fuel;
  brand: Brand;
}
