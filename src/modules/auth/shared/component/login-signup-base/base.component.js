import React from "react";
import { MeeshoLogo } from '../../../../shared/components/logo/logo.component';
import { useNavigate } from 'react-router-dom';
import { TermsAndConditions } from "../termsandconditions/termsandconditions.component";

const LoginSignupBaseComponent = ({children,message , navigateToPath , messagestarting,messageEnding}) => {

  const navigate = useNavigate();

  function NavigateAuthScreen(){
    return  <span onClick={() => navigate(navigateToPath)} className="w-full text-center text-sm">{messagestarting}, <span className="text-primary underline cursor-pointer">{messageEnding}</span> </span>
   }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-lightPink flex-col">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <MeeshoLogo />
          </div>
          <div className="flex px-8 py-8 bg-white w-96 rounded-lg flex-col gap-5">
          {message}
          {children}
          <NavigateAuthScreen />
          <TermsAndConditions />
          </div>
        </div>
      </div>
    );
};


export default LoginSignupBaseComponent;
