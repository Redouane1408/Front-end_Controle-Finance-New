"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
//import { Loader2 } from "lucide-react";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <CardContent>
          <h2 className="text-center text-2xl font-semibold text-teal-700">
            Welcome
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email and password to sign in
          </p>

          <form className="mt-6">
            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4 flex items-center gap-2">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
              />
              <Label htmlFor="remember-me">Remember me</Label>
            </div>

            <Button type="submit" className="w-full">
              SIGN IN
            </Button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Forgot your{" "}
              <a className="text-teal-700 hover:underline" href="#">
                Password?
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
