export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  rate: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
}
export interface IProductFormat {
  id: string;
  name: string;
  price: string;
  category: string;
  rate: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
}
export interface ICartProduct {
  id: string;
  prodId: string;
  quantity: number;
  name: string;
  price: number;
  imgUrl: string;
}
export interface IUser {
  id: string;
  name: string;
  phone: string;
  username: string;
  password: string;
  imgUrl?: string;
  address?: string;
}
export interface ICheckedout {
  userId: string;
  name: string;
  phone: string;
  address?: string;
  description: { descId: string; prodId: string; quantity: number }[];
}
export interface ICategory {
  id: string;
  name: string;
  description: string;
  webUrl: string;
}
