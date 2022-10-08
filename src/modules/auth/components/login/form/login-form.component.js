import Button from "../../../../shared/components/button/button.component";
import OutlinedInput from "../../../../shared/components/input/input.component";
import { RegisterContext } from "../../../../shared/context/register.context";
import { useForm } from 'react-hook-form';
import FormError from "../../../../shared/components/error/error.component";
import AuthService from '../../../services/auth.service';
import { useState } from "react";
import UtilService from "../../../../shared/service/util.service";
import { SUCCESS_CODE } from "../../../../../constants/code.constants";


const LoginFormComponent = () => {

  const { register, handleSubmit , formState : {errors} } = useForm();
  const [formErrors,setFormErrors] = useState(null);

  const _authService = new AuthService();
  const _utilService = new UtilService();

  const onSubmit = async (data) => {
    setFormErrors(null);
    const axiosRes = await _authService.login(data)
          .catch(err => setFormErrors(_utilService.parseErrorResponseMessage(err)));
    const parsedResult = _utilService.parseSuccessResponse(axiosRes);
    if(parsedResult.code === SUCCESS_CODE.SUCCESS_RESPONSE)
    console.log('Succesfully Logged In');
  }

  return (
    <RegisterContext.Provider value={{register,errors}}>
      <FormError errors={formErrors}></FormError>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <OutlinedInput
          label={"EmailId"}
          type="email"
          name="emailId"
          validationSchema={{required: true}}
        ></OutlinedInput>
        <OutlinedInput
          label={"Password"}
          type="password"
          name="password"
          validationSchema={{required: true}}
        ></OutlinedInput>
        <Button buttonTitle={"Login"} type={"submit"}></Button>
      </form>
    </RegisterContext.Provider>
  );
};

export default LoginFormComponent;
