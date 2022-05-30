import { Product } from "./models";

export type AuthFormProps = {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export type CartItemType = {
  id: string;
  price: number;
  quantity: number;
  product: Product;
};
