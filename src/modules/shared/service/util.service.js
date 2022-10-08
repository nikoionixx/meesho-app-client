import { SUCCESS_CODE } from "../../../constants/code.constants";

class UtilService {

    parseErrorResponseMessage = (err) => {
        if('message' in err){
            return err.response.data.message;
        }
        return ['Unknown Error'];
    }
    
    parseSuccessResponse = (res) => {
        if('data' in res){
            return res.data;
        }
        return res;
    }   
}

export default UtilService;