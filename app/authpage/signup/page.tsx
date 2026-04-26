"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function getStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  let score = 0;
  if (!password) return { score: 0, label: "Strength", color: "#9CA3AF" };
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 1) return { score: 1, label: "Weak", color: "#ef4444" };
  if (score === 2) return { score: 2, label: "Fair", color: "#f97316" };
  if (score === 3) return { score: 3, label: "Good", color: "#ca8a04" };
  return { score: 4, label: "Strong", color: "#16a34a" };
}

export default function SignupPage() {
  const router = useRouter();
  const signupData = useAuthStore((state) => state.signupData);
  const setSignupData = useAuthStore((state) => state.setSignupData);
  const password = signupData.password;

  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  const strength = getStrength(password);

  const handleCreateAccount = () => {
    if (
      signupData.fullName &&
      signupData.email &&
      signupData.password &&
      signupData.confirmPassword
    ) {
      if (signupData.password === signupData.confirmPassword) {
        // Add your sign-up logic here
        router.push("/authpage/signin");
      }
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left panel */}
      <div className="w-115 bg-[#F3FEFD] flex flex-col justify-between px-12 py-12.75 overflow-y-auto">
        <div className="w-24 h-8">
          <img src="/asset/Logo.png" alt="Logo" />
        </div>

        <div className="mb-20">
          <h2 className="text-4xl italic font-light text-gray-800 mb-6 leading-tight">
            Calm your
            <br />
            workflow.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed pr-25">
            A focused workspace designed to reduce noise and help your team move
            with intention.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-16 py-10 overflow-y-auto bg-white">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create account
            </h1>
            <p className="text-gray-600 text-sm">
              Get started for free. No credit card required.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Ada Lovelace"
                value={signupData.fullName}
                onChange={(e) => setSignupData({ fullName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-black"
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work email
              </label>
              <input
                type="email"
                placeholder="ada@company.com"
                value={signupData.email}
                onChange={(e) => setSignupData({ email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setSignupData({ password: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-black"
              />
              {/* PASSWORD SECTION - STRENGTH INDICATOR */}
              <div className="flex items-center justify-start mt-2 gap-2 w-full">
                {/* BAR 1 */}
                <div
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      strength.score >= 1 ? strength.color : "#D1D5DB",
                  }}
                />
                {/* BAR 2 */}
                <div
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      strength.score >= 2 ? strength.color : "#D1D5DB",
                  }}
                />
                {/* BAR 3 */}
                <div
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      strength.score >= 3 ? strength.color : "#D1D5DB",
                  }}
                />
                {/* BAR 4 */}
                <div
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      strength.score >= 4 ? strength.color : "#D1D5DB",
                  }}
                />
                {/* PASSWORD STRENGTH LABEL */}
                <span
                  className="text-xs font-medium ml-2 transition-colors whitespace-nowrap"
                  style={{ color: strength.color }}
                >
                  {strength.label}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-black"
              />
            </div>

            {/* Create Account Button */}
            <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition-colors mt-6"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2.5 rounded-lg transition-colors"
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>

          {/* Sign in link */}
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/authpage/signin")}
                className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer bg-transparent border-none p-0"
              >
                Sign in
              </button>
            </span>
          </div>

          {/* Terms and Privacy */}
          <div className="text-center mt-4 text-xs text-gray-500">
            By continuing you agree to NOOI's{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
