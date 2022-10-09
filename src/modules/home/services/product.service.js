import axios from "axios"

class ProductService {

    _url = 'https://fakestoreapi.com/products';

    getAllProducts(){
        return axios.get(this._url);
    }

    getSingleProduct(id){
        return axios.get(`${this._url}/id`);
    }

}

export default ProductService;