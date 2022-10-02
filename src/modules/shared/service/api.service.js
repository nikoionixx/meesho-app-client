import AxiosInstance from "../../middleware/axios/axios.middleware";

export class ApiService {

    _axiosInstance = AxiosInstance;

    get(url){
        return this._axiosInstance.get(url);
    }

    post(url,data){
        return this._axiosInstance.post(url,data);
    }
}