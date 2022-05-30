export interface FirestoreUser {
  id: string;
  displayName: string | null;
  role?: "user" | "admin";
  photoUrl: string | null;
}

export interface Product {
  brand: string;
  category: "Acoustic";
  color: string;
  id: string;
  images: ProductImages;
  model: string;
  price: number;
}

export type ProductImages = {
  main: string;
  photos: string[];
};
