import react from "react";
import ProductItem from "../product-item/product-item.component";


const ProductListingComponent = ({products}) => {
    function _renderProductItems(){
        return products.map(product => {
           return <ProductItem key={product.id} product={product}/>
        }); 
    }

    return (
        <div className="grid grid-cols-4 gap-4">
                {_renderProductItems()}
        </div>
    )
};

export default ProductListingComponent;