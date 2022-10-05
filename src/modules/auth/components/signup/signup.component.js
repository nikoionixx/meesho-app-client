import React from "react";
import LoginSignupBaseComponent from "../../shared/component/login-signup-base/base.component";

import SignupFormComponent from "./form/signup-form.component";


const SingupComponent = () => {
  return (
      <LoginSignupBaseComponent message={'Signup to create your account'} navigateToPath={'/login'} messagestarting={"Already have a account"} messageEnding={'Login'}>
        <SignupFormComponent />
      </LoginSignupBaseComponent>
  );
};

export default SingupComponent;
