export type Product = {
  UPC: string;
  name: string;
  price: {
    current: {
      value: number;
    };
    currency: string;
  };
  availability: {
    stock: number;
  };
  variants: Omit<Product, "variants">[];
};
