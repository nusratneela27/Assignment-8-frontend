"use client";

import Image from "next/image";
import loginBanner from "@/assets/login.jpg";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterUI = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          alt="discount"
          src={loginBanner}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10  flex items-center justify-center text-center bg-black bg-opacity-30">
          <div className="w-11/12 md:1/2 lg:w-1/3 rounded-3xl p-10 bg-white bg-opacity-50 ">
            <h1 className="text-4xl font-medium mb-4 text-amber-900">
              Register
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 md:px-20"
            >
              <Input
                variant="underlined"
                type="text"
                label="Name"
                {...register("name", { required: true })}
              />
              <Input
                variant="underlined"
                type="email"
                label="Email"
                {...register("email", { required: true })}
              />
              <Input
                variant="underlined"
                type="password"
                label="Password"
                {...register("password", { required: true })}
              />
              <Button
                type="submit"
                className="bg-gradient-to-tr from-amber-700 to-yellow-500 text-white shadow-lg"
              >
                Submit
              </Button>
            </form>
            <div className="flex flex-col md:flex-row justify-around pt-9">
              <p>
                Back To{" "}
                <Link href="/">
                  <span className="text-amber-900 font-semibold hover:underline">
                    home
                  </span>
                </Link>
              </p>
              <p>
                Have An Account?{" "}
                <Link href="/login">
                  <span className="text-amber-900 font-semibold hover:underline">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUI;