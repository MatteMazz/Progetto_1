export type ProdDescription = {
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
};
