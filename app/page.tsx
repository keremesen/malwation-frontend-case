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
    if (data.email === adminMail && data.password === "123123") {
      login(data.email, data.password);
      router.push("/dashboard");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 bg-white rounded-lg p-8 shadow">
        <div className="flex items-center justify-center">
          <Image
            alt="Geek Agent"
            src="/assets/gif1.gif"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-8">
          <div className="text-center mb-6">
            <Image
              alt="malwation"
              src="/assets/logoo.png"
              height={80}
              width={120}
            />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(Login)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3 text-gray-700 placeholder-gray-400"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3 text-gray-700 placeholder-gray-400"
                id="password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </div>
            <div>
              <button className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
