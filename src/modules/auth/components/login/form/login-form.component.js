import Button from "../../../../shared/components/button/button.component";
import OutlinedInput from "../../../../shared/components/input/input.component";
import { useForm } from "react-hook-form";
import FormError from "../../../../shared/components/error/error.component";
import AuthService from "../../../services/auth.service";
import React from "react";
import UtilService from "../../../../shared/service/util.service";
import { SUCCESS_CODE } from "../../../../../constants/code.constants";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Storage from "../../../../shared/service/storage.service";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../middleware/redux/actions/user.actions";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../../context/register.context";

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formErrors, setFormErrors] = React.useState(null);
  const [isLoader, setLoader] = React.useState(false);
  const _authService = new AuthService();
  const _utilService = new UtilService();
  const _storage = new Storage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setFormErrors(null);
    setLoader(true);
    const axiosRes = await _authService
      .login(data)
      .catch((err) => _postErrorResponse(err));
    setTimeout(() => _postSuccessResponse(axiosRes), 2000);
  };

  function _postSuccessResponse(axiosRes) {
    if (axiosRes) {
      setLoader(false);
      const parsedResult = _utilService.parseSuccessResponse(axiosRes);
      if (parsedResult.code === SUCCESS_CODE.SUCCESS_RESPONSE) {
        _storage.setItem("token", parsedResult.data.token);
        navigate("/home/");
        dispatch(setUser(parsedResult.data.user));
      }
    }
  }

  function _postErrorResponse(err) {
    if (err) {
      setLoader(false);
      setFormErrors(_utilService.parseErrorResponseMessage(err));
    }
  }

  return (
    <RegisterContext.Provider value={{ register, errors }}>
      <FormError errors={formErrors}></FormError>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <OutlinedInput
          label={"EmailId"}
          type="email"
          name="emailId"
          icon={faEnvelope}
          validationSchema={{ required: true }}
        ></OutlinedInput>
        <OutlinedInput
          label={"Password"}
          type="password"
          name="password"
          icon={faLock}
          validationSchema={{ required: true }}
        ></OutlinedInput>
        <Button
          buttonTitle={"Login"}
          type={"submit"}
          isLoader={isLoader}
        ></Button>
      </form>
    </RegisterContext.Provider>
  );
};

export default LoginFormComponent;
