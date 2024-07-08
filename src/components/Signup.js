import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ name: "", email: "", password: "" });

  const onSubmit = (data) => console.log("data", data);

  console.log("error", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
      <Card>
        <CardBody className="flex flex-col gap-4 ">
          <Input
            label="Name *"
            size="lg"
            {...register("name", {
              required: "Name Is Required",
              maxLength: 80,
            })}
          />
          <Typography className="text-sm text-[red] mt-[-12px]">
            {errors?.name?.message}
          </Typography>
          <Input
            label="Email *"
            // type="email"
            size="lg"
            {...register("email", {
              required: "email is required",
              pattern: {
                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          
          <Typography className="text-sm text-[red] mt-[-12px]">
            {errors?.email?.message}
          </Typography>
          <Input
            label="Password *"
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
            Sign Up
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
