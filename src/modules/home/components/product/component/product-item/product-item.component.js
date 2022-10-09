import {
  Typography,
} from "@material-tailwind/react";

const ProductItem = ({ product }) => {
  const { title, description, image, price } = product;

  return (
    <div className="bg-white rounded p-4 border cursor-pointer hover:bg-pink-50">
      <div className="flex w-full justify-center bg-white border">
        <img src={image} alt={"hello"}  className="h-40"/>
      </div>
      <div className="text-primary text-lg mt-3">₹{price}</div>
      <Typography variant={"lead"}>{title}</Typography>
      <Typography variant={"paragraph"}>{description}</Typography>
    </div>
  );
};

export default ProductItem;
