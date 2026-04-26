"use client";

import { useState } from "react";
import Link from "next/link";

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

function EyeOpen() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeClosed() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function getStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
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

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    alt: "Modern sofa living room",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
    alt: "Bathroom with glass shower",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    alt: "Marble kitchen island",
  },
  {
    src: "https://images.unsplash.com/photo-1593640408182-31c228209f8f?w=400&q=80",
    alt: "Computer desk setup",
  },
  {
    src: "https://images.unsplash.com/photo-1564540579594-0930edb6de43?w=400&q=80",
    alt: "Minimalist bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80",
    alt: "Warm chandelier",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    alt: "Cozy bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80",
    alt: "House exterior with trees",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80",
    alt: "Dark corridor hallway",
  },
  {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
    alt: "White minimalist living room",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
    alt: "Outdoor patio seating",
  },
  {
    src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80",
    alt: "Modern dining lounge",
  },
];

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");

  const strength = getStrength(password);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left panel — form */}
      <div className="w-107.5 shrink-0 flex flex-col justify-center px-12 py-10 overflow-y-auto">
        <div className="w-full max-w-85 mx-auto">
          {/* Heading */}
          <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-1.5">
            Create account
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-7">
            Join thousands of designers on nooi. It&apos;s free to get started.
          </p>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 border border-gray-200 rounded-lg py-2.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-5"
          >
            <GoogleIcon />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              or sign up with email
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Fields */}
          <div className="space-y-4">
            {/* Full name */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                Full name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOpen /> : <EyeClosed />}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                Min. 8 characters, one uppercase, one number
              </p>

              {/* Strength meter */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-0.75 flex-1 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor:
                            i <= strength.score ? strength.color : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: strength.color }}
                  >
                    Password strength: {strength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat your password"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirm ? <EyeOpen /> : <EyeClosed />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center gap-2.5 pt-0.5">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-[#1a3d2f] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[#1a3d2f] font-medium hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#1a3d2f] font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-between bg-[#1a3d2f] hover:bg-[#152e23] text-white rounded-lg py-3 px-5 text-sm font-semibold transition-colors mt-1"
            >
              <span>Create account</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15">
                <ArrowRight />
              </span>
            </button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#1a3d2f] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right panel — masonry image gallery */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-2" style={{ columns: 3, columnGap: "8px" }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="mb-2 break-inside-avoid overflow-hidden rounded-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full block object-cover"
                loading={i < 6 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
