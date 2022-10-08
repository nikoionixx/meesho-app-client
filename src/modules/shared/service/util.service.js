class UtilService {

    parseErrorResponseMessage = (err) => {
        if('message' in err){
            return err.response.data.message;
        }
        return ['Unknown Error'];
    }
    
    parseSuccessResponse = (res) => {
        console.log(res);
        if('data' in res){
            return res.data;
        }
        return res;
    }   
}

export default UtilService;