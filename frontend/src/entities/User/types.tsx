import { TProduct } from "../Product";

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

export type TUserProfile = {
  id: number;
  user: TUser;
  phoneNumber: string;
  deliveryAddress: string;
  city: string;
  postalCode: string;
  favorites: TProduct[];
};

export type TSellerProfile = {
  id: number;
  user: TUser;
  companyName: string;
};
