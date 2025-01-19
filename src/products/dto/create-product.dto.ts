export class CreateProductDto {
  id?: string;
  name: string;
  brand: string;
  sku: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  description: string;
  features: string;
  rating: number;
  reviewsCount: number;
  tags: string[];
  imageUrl: string;
  manufacturer: string;
  model: string;
  releaseDate: string;
  warranty: string;
  color: string;
  material: string;
  origin: string;
  createdAt: Date;
  updatedAt: Date;
}
