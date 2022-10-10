import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const ProductDetailComponent = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const { title, description, image } = product;
  const navigate = useNavigate();

  function _goBack(){
    navigate(-1);
  }

  return (
    <div className="flex w-full gap-4">
        <span onClick={_goBack}>Go Back</span>
      <div className="flex w-[500px]">
        <img src={image} alt={title} className="h-[500px]" />
      </div>
      <div className="flex flex-col w-full">
        <Typography variant={"lead"} className="mb-3">
          {title}
        </Typography>
        <Typography variant={"paragraph"} className="mb-3">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
