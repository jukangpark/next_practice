"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SignUpFormValues } from "./types";

const SignUpPage = () => {
  const { control, handleSubmit, setValue } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
    setValue("email", "");
    setValue("password", "");
  };

  const style = {
    color: "black",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>회원가입</h3>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input {...field} placeholder="email" style={style} />
          )}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input {...field} placeholder="password" style={style} />
          )}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignUpPage;
