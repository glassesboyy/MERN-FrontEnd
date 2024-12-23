import React from "react";
import { Button, Input, Label, Link } from "../../../components";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-900 to-black">
      <div className="flex flex-col border-2 border-purple-900 w-9/12 md:flex-row bg-black shadow-2xl shadow-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621276336795-925346853745?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Register background"
          className="hidden aspect-square md:block w-1/2 object-cover"
        />
        <div className="p-8 w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-white mb-6 text-center mt-7">
            Register
          </h1>
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" textColor="text-white">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                textSize="text-sm"
              />
            </div>
            <div>
              <Label htmlFor="password" textColor="text-white">
                Create Password
              </Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your new password"
                textSize="text-sm"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword" textColor="text-white">
                Confirm Password
              </Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your new password"
                textSize="text-sm"
              />
            </div>
            <div className="flex justify-center">
              <Button to="/login" variant="purple" width="w-1/2">
                Register
              </Button>
            </div>
            <p className="flex text-gray-400 text-sm">
              Sudah mempunyai akun?{" "}
              <span>
                <Link title="Login Sekarang" margin="ml-1" href="/login" />
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
