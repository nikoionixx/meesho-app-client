import { ApiService } from '../../shared/service/api.service';

class AuthService {

    _apiService = new ApiService();

    login(data){
        return this._apiService.post('/auth/login',data);
    }

    signup(data){
        return this._apiService.post('/auth/signup',data);
    }

}

export default AuthService;