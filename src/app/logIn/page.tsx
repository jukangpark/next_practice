"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "./types";

const LogInPage = () => {
  const { control, handleSubmit, setValue } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    setValue("email", "");
    setValue("password", "");
  };

  const style = {
    color: "black",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>로그인</h3>
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

export default LogInPage;
