import { Box } from "@mui/material";
import "./Product.scss";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const ProductCard: React.FC<{
  data: IProduct;
}> = ({ data }) => {
  return (
    // <Link href={`/products/${data.id}`}>
    <Box className="product_container">
      <img src={data.image} alt="product image" className="product_image" />
      <h4 className="product_title">{data.title}</h4>
      <p className="product_price">
        <span className="old_price">&#8377;{data.price * 80}</span>
        <span className="new_price">&#8377;{data.price * 50}</span>
      </p>
    </Box>
    // </Link>
  );
};
