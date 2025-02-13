import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAxios } from "@/hooks/useAxios";

/* import shadcn  */
//import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";

type LoginFormValues = {
  email: string;
  password: string;
};
export function LoginForm() {
  /*  handle submit login logic */
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { request, loading } = useAxios();

  const onSubmit = async (data: LoginFormValues) => {
    const response = await request("post", "/auth/login", data);
    if (response) {
      localStorage.setItem("token", response.token);
      window.location.href = "/dashboard";
    }
  };

  const [rememberMe, setRememberMe] = useState(false);
  return (

    <div className="flex min-h-screen items-center">
    
      <Card className="w-full max-w-md rounded-lg bg-white p-8 ">
        <CardContent className="">
          <h2 className="pl-8 text-start text-2xl text-title1 font-poppins font-semibold ">
            Log in
          </h2>
          <p className="pl-8 mt-2 text-start text-xs text-title2-600 font-poppins font-normal">
            Enter your Email and password to sign in
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* ---------- Email section--------------- */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              {/* ---------- Password section--------------- */}
              <div className="grid gap-2">
                <div className="flex items-center font-poppins-400">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input {...register("password")} type="password" required />
              </div>
              {/* ---------- Switch section--------------- */}
              <div className="mb-4 flex items-center gap-2">
                <Switch
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={() => setRememberMe(!rememberMe)}
                  className="data-[state=checked]:bg-buttonNeutral"
                />
                <Label htmlFor="remember-me">Remember me</Label>
              </div>
              {/* ---------- Login section--------------- */}
              <Button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
              {/* ---------- Forgot Password --------------- */}
              <p className="text-center text-sm text-gray-600">
                Forgot your{" "}
                <a className="text-buttonNeutral hover:underline" href="#">
                  Password?
                </a>
              </p>
              <svg width="446" height="20" viewBox="0 0 446 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="290" height="1" transform="translate(0 9.5)" fill="#E2E8F0"/>
              </svg>

              <p className="text-center text-sm text-gray-600">
                By clicking continue, you agree to our{" "}
                <a className="text-buttonNeutral hover:underline" href="https://www.mf.gov.dz/index.php/fr/">
                  Terms of Service
                </a>
                {" "}or{" "}
                <a className="text-buttonNeutral hover:underline" href="https://dgb.mf.gov.dz">
                  Privacy Policy
                </a>
              </p>
              
            </div>
          </form>
        </CardContent>
      </Card>

      {/* -------- Right Section - Image & Logo --------------- */}
      {/* <div className="relative hidden items-center justify-center bg-teal-700 md:flex md:w-1/2">
        <div className="flex items-center text-white">
          <img
            src="logo.svg"
            alt="Decorative background"
            className="relative z-[1] h-auto w-auto"
          />
        </div>
      </div> */}

      {/* 
      <div className="text-muted-foreground hover:[&_a]:text-primary text-balance text-center text-xs [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  );
}
