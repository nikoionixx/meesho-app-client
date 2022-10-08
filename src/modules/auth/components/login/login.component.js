import React from "react"
import LoginSignupBaseComponent from "../../shared/component/login-signup-base/base.component";
import LoginFormComponent from "./form/login-form.component";
const LoginComponent = () => {

    return (
        <LoginSignupBaseComponent message={'Login to view your account'} navigateToPath={'/signup'} messagestarting={"Don't have a account"} messageEnding={'Signup'}>
            <LoginFormComponent ></LoginFormComponent>
        </LoginSignupBaseComponent>
    )
}

export default LoginComponent;