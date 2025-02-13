import React from "react";
import { LoginForm } from "@/components/molecules/login-form";
//import LoginForm from "@/components/organisms/LoginForm";
const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-end items-center h-screen">

        <div className="bg-primary w-full h-full mr-64 justify-items-start bg-[url('/logo.svg')] bg-no-repeat bg-center ">
        </div>

        <div className="px-6 md:p-50 mr-64">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
            </div>
        </div>
    </div>


  );
};

export default LoginPage;

/* 


 <Flex className="max-h-min" direction={{ base: "column", md: "row" }}>
      {/* Left Section - Login Form 
      <Flex
        className="m-16 w-full p-8 md:w-1/2"
        direction="column"
        justify="center"
        align="center"
      >
        <Box className="w-full max-w-md">
          <Heading className="mb-4 text-3xl font-semibold text-teal-700">
            Welcome
          </Heading>
          <Text className="mb-8 text-gray-600">
            Enter your email and password to sign in
          </Text>

          <form>
            <FormControl className="mb-4">
              <FormLabel className="text-gray-700">Email</FormLabel>
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-lg border p-2 focus:ring-2 focus:ring-teal-600"
              />
            </FormControl>

            <FormControl className="mb-4">
              <FormLabel className="text-gray-700">Password</FormLabel>
              <Input
                type="password"
                placeholder="Your password"
                className="rounded-lg border p-2 focus:ring-2 focus:ring-teal-600"
              />
            </FormControl>

            <Flex className="my-6 justify-start">
              <Checkbox defaultChecked variant={"subtle"}>
                Remember me
              </Checkbox>
            </Flex>

            <Button
              type="submit"
              className="w-full rounded-lg bg-teal-700 py-2 text-white hover:bg-teal-800"
            >
              SIGN IN
            </Button>
          </form>

          <Text className="mt-4 text-center font-normal">
            Forgot your
            <span className="cursor-pointer pl-1 font-normal text-[#1c7484]">
              Password?
            </span>
          </Text>
        </Box>
      </Flex>

     Right Section - Image & Logo 
      <Flex className="relative hidden items-center justify-center bg-teal-700 md:flex md:w-1/2">
        <Box textAlign="center" color="white">
          <Image
            src="logo.svg"
            alt="Decorative background"
            className="relative z-[1] h-auto w-auto"
          />
        </Box>
      </Flex>
    </Flex>*/
