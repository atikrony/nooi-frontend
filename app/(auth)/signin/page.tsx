"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { GoogleButton } from "@/components/auth/google-button";
import { PasswordInput } from "@/components/auth/password-input";
import type { SignInFormData } from "@/types/auth.types";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function SignInPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      // TODO: call your sign-in API here
      console.log("Sign in:", data);
      toast.success("Signed in successfully!");
      router.push("/");
    } catch {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: trigger Google OAuth
    toast.info("Google sign-in coming soon.");
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
            Calm your
            <br />
            workflow.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
            A focused workspace designed to reduce noise and help your team move
            with intention.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 py-10 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign in</h1>
            <p className="text-gray-500 text-sm">
              Welcome back. Enter your details to continue.
            </p>
          </div>

          {/* Google */}
          <GoogleButton
            label="Sign in with Google"
            onClick={handleGoogleSignIn}
          />

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-gray-400 text-xs">or sign in with email</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
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
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-teal-600 hover:text-teal-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <PasswordInput
                id="password"
                placeholder="••••••••"
                autoComplete="current-password"
                error={errors.password?.message}
                {...register("password")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-center mt-6 text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
