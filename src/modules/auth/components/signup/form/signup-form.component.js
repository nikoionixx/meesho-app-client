import React from "react";
import OutlinedInput from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useForm } from "react-hook-form";
import { RegisterContext } from "../../../../shared/context/register.context";

const SignupFormComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RegisterContext.Provider value={register}>
        <OutlinedInput
          label={"First Name"}
          name={"firstName"}
          validationSchema={{ required: "First Name is required" }}
        ></OutlinedInput>
        <OutlinedInput label={"Last Name"} name={"lastName"}></OutlinedInput>
        <OutlinedInput
          type="email"
          label={"EmailId"}
          name={"emailId"}
        ></OutlinedInput>
        <OutlinedInput
          label={"Phone Number"}
          name={"phoneNumber"}
        ></OutlinedInput>
        <OutlinedInput
          type="password"
          label={"Password"}
          name={"password"}
        ></OutlinedInput>
        <OutlinedInput
          type="password"
          label={"Confirm Password"}
          name={"confirmPassword"}
        ></OutlinedInput>
      </RegisterContext.Provider>

      <Button type="submit" buttonTitle={"Signup"}></Button>
    </form>
  );
};

export default SignupFormComponent;
