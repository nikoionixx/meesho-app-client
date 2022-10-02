import React from "react"
import { RegisterContext } from "../../../shared/context/register.context";
import LoginSignupBaseComponent from "../login-signup-base/base.component"
import { useForm } from 'react-hook-form';
import OutlinedInput from "../../../shared/components/input/input.component";
import Button from "../../../shared/components/button/button.component";
import { ApiService } from '../../../shared/service/api.service';
const LoginComponent = () => {

    const _apiService = new ApiService();
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        _apiService.post('/auth/login',data);
    }

    return (
        <LoginSignupBaseComponent message={'Login to view your account'} navigateToPath={'/signup'} messagestarting={"Don't have a account"} messageEnding={'Signup'}>
           <RegisterContext.Provider value={register}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <OutlinedInput label={'EmailId'} type="email" name="emailId"></OutlinedInput>
                    <OutlinedInput label={'Password'} type="password" name="password"></OutlinedInput>
                    <Button buttonTitle={'Login'} type={'submit'}></Button>
                </form>
           </RegisterContext.Provider>
        </LoginSignupBaseComponent>
    )
}

export default LoginComponent;