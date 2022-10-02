import React from "react";
import { MeeshoLogo } from '../../../shared/components/logo/logo.component';
import { TermsAndConditions } from '../../../shared/components/termsandconditions/termsandconditions.component';

const LoginSignupBaseComponent = ({children,message}) => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-lightPink flex-col">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <MeeshoLogo />
          </div>
          <div className="flex px-8 py-8 bg-white w-96 rounded-lg flex-col gap-5">
          {message}
          {children}
          <TermsAndConditions />
          </div>
        </div>
      </div>
    );
};


export default LoginSignupBaseComponent;
