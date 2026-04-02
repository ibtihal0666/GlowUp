export type Category = 'Cleanser' | 'Toner' | 'Serum' | 'Moisturizer' | 'SPF' | 'Eye Cream' | 'Mask' | 'Other';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  pixelArt: string[][]; // 16x16 grid of hex colors
  spriteId?: string;    // if set, use the pre-made SVG sprite instead
}

export interface RoutineItem {
  productId: string;
  completed: boolean;
}

// Default empty 16x16 grid
export const createEmptyGrid = (): string[][] => {
  return Array(16).fill(null).map(() => Array(16).fill(''));
};
