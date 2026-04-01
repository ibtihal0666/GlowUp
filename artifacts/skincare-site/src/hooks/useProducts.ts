import { useState, useEffect } from 'react';
import { Product } from '../lib/types';

const STORAGE_KEY = 'glowbit_products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse products', e);
      }
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts));
  };

  const addProduct = (product: Product) => {
    saveProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    saveProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };
}
