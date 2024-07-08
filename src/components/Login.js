import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ email: "", password: "" });
  const onSubmit = (data) => {
    localStorage.setItem("token", "142");
    reset();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
      <Card>
        <CardBody className="flex flex-col gap-4 ">
          <Input
            label="E-mail"
            type="text"
            size="lg"
            {...register("email", {
              required: "email is required*",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email address*",
              },
            })}
          />
          <Typography className="text-sm text-[red] mt-[-12px]">
            {errors?.email?.message}
          </Typography>
          <Input
            label="Password"
            type="password"
            size="lg"
            {...register("password", {
              required: "Password is required*",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters",
              },
            })}
          />
          <Typography className="text-sm text-[red] mt-[-12px]">
            {errors?.password?.message}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <button
            className="block w-full select-none rounded-lg bg-[#0d72b6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 "
            type="submit"
          >
            Sign in
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
