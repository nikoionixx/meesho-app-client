import {
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProduct } from "../../../../../../middleware/redux/actions/product.actions";

const ProductItem = ({ product }) => {
  const { title, description, image, price , id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function _navigateToProductDetail(){
    dispatch(setProduct(product));
    navigate(`product/${id}`);
  }

  return (
    <div className="bg-white rounded p-4 border cursor-pointer hover:bg-pink-50" onClick={_navigateToProductDetail}>
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
