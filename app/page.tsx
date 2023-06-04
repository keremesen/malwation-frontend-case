"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

type FormData = {
  email: string;
  password: string;
};

export default function Home() {
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const adminMail = "johndoe@malwation.com";
  const router = useRouter();
  const auth = useAuth();
  if (!auth) {
    return null;
  }
  const { user, login } = auth;

  const Login = (data: FormData) => {
    if (data.email === adminMail && data.password ==="123123") {
      login(data.email, data.password);
      router.push("/dashboard");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <Image alt="Geek Agent" className="absolute left-1/4"  src="/assets/gif1.gif" width={200} height={200} />
      {!user && (
        <div className="h-1/2 w-1/4 bg-white flex  rounded-xl items-center justify-center">
          <form className="flex flex-col w-2/3 space-y-1" onSubmit={handleSubmit(Login)}>
            <label>Email</label>
            <input
              className="border-gray-400 border-2"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-700">{errors.email.message}</span>
            )}
            <label>Password</label>
            <input
              className="border-gray-400 border-2 "
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-700">{errors.password.message}</span>
            )}

            <input className="bg-gray-200 p-1 rounded-full  text-semibold"  value="Login" type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
