import { Typography } from "@material-tailwind/react";
import ProductListingComponent from "./component/prodict-listing/product-listing.component";
import { useSelector } from "react-redux";
import RenderIf from "../../../shared/components/renderIf/renderIf";
import ProductService from "../../services/product.service";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../../../middleware/redux/actions/product.actions";
import {useState} from 'react';
import SkeletonCardLoader from "../../../shared/components/skeleton-card-loader/skeleton-card-loader";

const ProductComponent = () => {
  const _productService = new ProductService();
  const dispatch = useDispatch();
  const [isLoader,setLoader] = useState(false);
  const products = useSelector((state) => state.product.allProducts);
  useEffect(() => {
      _getAllProducts();
  }, []);

  async function _getAllProducts() {
    setLoader(true);
    const axiosData = await _productService.getAllProducts();

    setTimeout(() => {
      dispatch(setProducts(axiosData.data));
      setLoader(false);
    },2000);
  }

  return (
    <div className="flex flex-col">
      <Typography variant={"h3"} className="mb-3">
        Products for you
      </Typography>
      <RenderIf isTrue={products}>
        <ProductListingComponent products={products} />
      </RenderIf>
      <RenderIf isTrue={isLoader}>
         <div className="grid grid-cols-4 gap-3">
         <SkeletonCardLoader />
         <SkeletonCardLoader />
         <SkeletonCardLoader />
         <SkeletonCardLoader />
         </div>
      </RenderIf>
    </div>
  );
};

export default ProductComponent;
