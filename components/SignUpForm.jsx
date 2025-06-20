"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onHandlerSubmiT = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to sign up");
      }

      toast.success("Account created successfully! Please log in.");
      router.push("/login");
    } catch (error) {
      toast.error(error.message || "Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onHandlerSubmiT)}
      className="w-[60%] mx-auto flex justify-center items-center flex-col"
    >
      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-full mb-2.5 flex flex-col gap-1.5">
          <Label htmlFor="firstName"> First Name </Label>
          <Input
            id="firstName"
            placeholder="First name"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="w-full mb-2.5 flex flex-col gap-1.5">
          <Label htmlFor="lastName"> Last Name </Label>
          <Input
            id="lastName"
            placeholder="Last name"
            {...register("lastName", { required: true })}
          />
        </div>
      </div>
      <div className="w-full mb-2.5 flex flex-col gap-1.5">
        <Label htmlFor="email"> Email </Label>
        <Input
          id="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </div>
      <div className="w-full mb-2.5 flex flex-col gap-1.5">
        <Label htmlFor="password"> Password </Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
        />
      </div>
      <div className="w-full mb-2.5 flex flex-col gap-1.5">
        <Label htmlFor="confirmPassword"> Confirm Password </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: { value: true, message: "Please confirm your password" },
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
      </div>
      <Button type="submit" disabled={isLoading}></Button>
    </form>
  );
}
