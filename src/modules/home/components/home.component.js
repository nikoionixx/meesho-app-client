import React from "react";
import NavbarComponent from "../../shared/components/navbar/navbar";
import ProductComponent from "./product/product.component";


const HomeComponent = () => {
    return(
        <React.Fragment>
            <NavbarComponent />
            <div className="container mx-auto">
                <ProductComponent />
            </div>
        </React.Fragment>
    )
};

export default HomeComponent;