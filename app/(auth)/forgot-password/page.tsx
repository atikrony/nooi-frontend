"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import type { ForgotPasswordFormData } from "@/types/auth.types";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      // TODO: call your reset-password API here
      console.log("Forgot password:", data);
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
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
            Recover your
            <br />
            access.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
            We&apos;ll send you a link to reset your password. Check your inbox
            after submitting.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 py-10 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {submitted ? (
            /* Success state */
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Check your email
              </h1>
              <p className="text-gray-500 text-sm mb-1">
                We sent a reset link to
              </p>
              <p className="text-gray-800 font-medium text-sm mb-6">
                {getValues("email")}
              </p>
              <p className="text-xs text-gray-400 mb-8">
                Didn&apos;t receive it? Check your spam folder or{" "}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  try again
                </button>
                .
              </p>
              <Link
                href="/signin"
                className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                <ArrowLeft size={14} />
                Back to sign in
              </Link>
            </div>
          ) : (
            /* Form state */
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  Forgot password?
                </h1>
                <p className="text-gray-500 text-sm">
                  Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>

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
                    Email address
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors"
                >
                  {isSubmitting ? "Sending…" : "Send reset link"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/signin"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft size={14} />
                  Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
