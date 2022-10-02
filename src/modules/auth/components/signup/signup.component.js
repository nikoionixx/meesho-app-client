import React from "react";

import SignupFormComponent from "./form/signup-form.component";
import LoginSignupBaseComponent from "../login-signup-base/base.component";

const SingupComponent = () => {
  return (
      <LoginSignupBaseComponent message={'Signup to create your account'}>
        <SignupFormComponent />
      </LoginSignupBaseComponent>
  );
};

export default SingupComponent;
