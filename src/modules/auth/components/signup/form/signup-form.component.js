import React, { useState } from "react";
import OutlinedInput from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useForm } from "react-hook-form";
import { RegisterContext } from "../../../../shared/context/register.context";
import AuthService from "../../../services/auth.service";
import UtilService from "../../../../shared/service/util.service";
import FormError from "../../../../shared/components/error/error.component";
import FormSuccess from "../../../../shared/components/success/success.component";
import { SUCCESS_CODE } from "../../../../../constants/code.constants";
import { useNavigate } from 'react-router-dom';
import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const SignupFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const _authService = new AuthService();
  const _utilService = new UtilService();
  const [formErrors, setFormErrors] = useState(null);
  const [formMessage, setFormMessage] = useState(null);
  const [isLoader,setLoader] = useState(false); 
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setFormErrors(null);
    setFormMessage(null);
    setLoader(true);
    const axiosRes = await _authService
      .signup(data)
      .catch((err) => {
        setLoader(false);
        setFormErrors(_utilService.parseErrorResponseMessage(err))
      });
    setTimeout(() => {
      _postSuccessResponse(axiosRes);
    },2000);
  };

  function _postSuccessResponse(axiosRes){
    setLoader(false);
    const parsedResult = _utilService.parseSuccessResponse(axiosRes);
    if(parsedResult.code === SUCCESS_CODE.SUCCESS_RESPONSE)
    setFormMessage(parsedResult.message);
    reset();
    navigate('/login');
  }

  return (
    <RegisterContext.Provider value={{ register, errors }}>
      <FormSuccess message={formMessage}/>
      <FormError errors={formErrors}/>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <OutlinedInput
          label={"First Name"}
          name={"firstName"}
          icon={faUser}
          validationSchema={{ required: true }}
        ></OutlinedInput>
        <OutlinedInput
          label={"Last Name"}
          name={"lastName"}
          icon={faUser}
          validationSchema={{ required: true }}
        ></OutlinedInput>
        <OutlinedInput
          type="text"
          label={"EmailId"}
          name={"emailId"}
          validationSchema={{
            required: true,
            pattern:
              '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
          }}
          icon={faEnvelope}
        ></OutlinedInput>
        <OutlinedInput
          label={"Phone Number"}
          name={"phoneNumber"}
          validationSchema={{ required: true, minLength: 10 }}
          icon={faPhone}
        ></OutlinedInput>
        <OutlinedInput
          type="password"
          label={"Password"}
          name={"password"}
          icon={faLock}
          validationSchema={{
            required: true,
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$",
          }}
        ></OutlinedInput>
        <OutlinedInput
          type="password"
          label={"Confirm Password"}
          name={"confirmPassword"}
          icon={faLock}
          validationSchema={{
            required: true,
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$",
          }}
        ></OutlinedInput>

        <Button type="submit" isLoader={isLoader} buttonTitle={"Signup"}></Button>
      </form>
    </RegisterContext.Provider>
  );
};

export default SignupFormComponent;
