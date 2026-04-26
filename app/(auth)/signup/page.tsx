"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { GoogleButton } from "@/components/auth/google-button";
import { PasswordInput } from "@/components/auth/password-input";
import type { SignUpFormData } from "@/types/auth.types";

const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z
      .string()
      .min(8, "Must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // TODO: call your sign-up API here
      console.log("Sign up:", data);
      toast.success("Account created! Please sign in.");
      router.push("/signin");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignUp = () => {
    // TODO: trigger Google OAuth
    toast.info("Google sign-up coming soon.");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left branded panel */}
      <div className="hidden lg:flex w-[440px] shrink-0 bg-[#F3FEFD] flex-col justify-between px-12 py-12 overflow-y-auto">
        <div className="w-24 h-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/asset/Logo.png" alt="nooi logo" />
        </div>
        <div className="mb-20">
          <h2 className="text-4xl italic font-light text-gray-800 mb-6 leading-tight">
            Join thousands
            <br />
            of creators.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
            Start building with nooi today. Your workspace, your rules.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 py-10 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Create account
            </h1>
            <p className="text-gray-500 text-sm">
              It&apos;s free to get started.
            </p>
          </div>

          {/* Google */}
          <GoogleButton
            label="Sign up with Google"
            onClick={handleGoogleSignUp}
          />

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-gray-400 text-xs">or sign up with email</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className={`w-full border rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-1 ${
                  errors.name
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={`w-full border rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-1 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Password
              </label>
              <PasswordInput
                id="password"
                placeholder="Create a strong password"
                autoComplete="new-password"
                error={errors.password?.message}
                {...register("password")}
              />
              {!errors.password && (
                <p className="mt-1 text-xs text-gray-400">
                  Min. 8 characters, one uppercase, one number
                </p>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Confirm password
              </label>
              <PasswordInput
                id="confirmPassword"
                placeholder="Repeat your password"
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
