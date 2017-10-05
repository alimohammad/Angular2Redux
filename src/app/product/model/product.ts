export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export class Product implements IProduct  {
  id: number;
  name: string;
  price: number;
}
