import Image from "next/image";
import loginBanner from "@/assets/login.jpg";
import { Input } from "@nextui-org/react";

const LoginUI = () => {
  return (
    <>
      <div style={{ position: "relative", height: "910px" }}>
        <Image
          alt="discount"
          src={loginBanner}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />
        <div className="absolute inset-0 z-10  flex items-center justify-center text-center bg-black bg-opacity-30">
          <div className="w-1/2 rounded-2xl p-10 bg-amber-100 bg-opacity-50">
            <h1 className="text-4xl  font-medium mb-4">Login</h1>
            <p className="text-xl font-thin mb-4">Welcome Back</p>
            <form>
              <Input
                variant="underlined"
                type="text"
                label="Name"
                placeholder="Enter your name"
              />
              <Input
                variant="underlined"
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUI;
